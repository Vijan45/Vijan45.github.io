/**
 * Builds data/publications.json for the portfolio.
 *
 * Primary source: the public works on Bhijan Neupane's ORCID record.
 * Optional enrichment: Google Scholar through SerpApi when SERPAPI_KEY is set.
 *
 * ResearchGate is intentionally not scraped: it does not provide a supported
 * public publications API. Keeping ORCID authoritative makes the scheduled
 * update credential-free and stable.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputPath = path.join(root, 'data', 'publications.json');
const overridesPath = path.join(root, 'data', 'publication-overrides.json');
const orcidId = '0009-0006-3132-2733';
const scholarAuthorId = 'R-Six5gAAAAJ';
const apiKey = process.env.SERPAPI_KEY;
const orcidBaseUrl = `https://pub.orcid.org/v3.0/${orcidId}`;

const normalise = value =>
  String(value || '')
    .toLowerCase()
    .replace(/[’'`]/g, "'")
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim();

const getValue = value => value?.value || '';

function publicationDate(work) {
  const date = work?.['publication-date'];
  const year = getValue(date?.year);
  const rawMonth = getValue(date?.month);
  const rawDay = getValue(date?.day);
  const month = rawMonth ? rawMonth.padStart(2, '0') : '';
  const day = rawDay ? rawDay.padStart(2, '0') : '';
  return [year, month, day].filter(Boolean).join('-');
}

function externalIds(work) {
  return Array.isArray(work?.['external-ids']?.['external-id'])
    ? work['external-ids']['external-id']
    : [];
}

function doiFor(work) {
  const identifier = externalIds(work).find(
    item => normalise(item?.['external-id-type']) === 'doi'
  );
  return String(
    identifier?.['external-id-normalized']?.value || identifier?.['external-id-value'] || ''
  )
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\/(?:dx\.)?doi\.org\//, '')
    .replace(/^doi:\s*/, '');
}

function typeLabel(type) {
  const labels = {
    'journal-article': 'Journal article',
    preprint: 'Preprint',
    'conference-paper': 'Conference paper',
    'conference-abstract': 'Conference abstract',
    'book-chapter': 'Book chapter',
    book: 'Book',
    dissertation: 'Dissertation',
    report: 'Report',
    dataset: 'Dataset'
  };
  return labels[type] || 'Publication';
}

async function fetchJson(url, label, options = {}) {
  let lastError;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20_000);
    try {
      const response = await fetch(url, { ...options, signal: controller.signal });
      if (!response.ok) throw new Error(`${label} returned HTTP ${response.status}`);
      return await response.json();
    } catch (error) {
      lastError = error;
      if (attempt < 3) await new Promise(resolve => setTimeout(resolve, attempt * 1_000));
    } finally {
      clearTimeout(timeout);
    }
  }
  throw new Error(`${label} failed after 3 attempts: ${lastError?.message || 'unknown error'}`);
}

function scoreSummary(summary) {
  const source = getValue(summary?.source?.['source-name']);
  const url = getValue(summary?.url);
  const date = publicationDate(summary);
  return (
    Number(summary?.['display-index'] || 0) * 10 +
    (doiFor(summary) ? 5 : 0) +
    (source === 'Crossref' ? 3 : 0) +
    (url.startsWith('https://doi.org/') ? 2 : 0) +
    (date.length === 10 ? 12 : date.length === 7 ? 6 : 0)
  );
}

function preferredSummary(group) {
  const summaries = Array.isArray(group?.['work-summary']) ? group['work-summary'] : [];
  return summaries.slice().sort((a, b) => scoreSummary(b) - scoreSummary(a))[0];
}

async function fetchOrcidPublications(overrides) {
  const works = await fetchJson(`${orcidBaseUrl}/works`, 'ORCID works request', {
    headers: { Accept: 'application/json' }
  });
  const summaries = (Array.isArray(works.group) ? works.group : [])
    .map(preferredSummary)
    .filter(summary => summary?.visibility === 'public' && summary?.['put-code']);

  if (!summaries.length) throw new Error('The public ORCID record contained no works.');

  const details = await Promise.all(
    summaries.map(summary =>
      fetchJson(`${orcidBaseUrl}/work/${summary['put-code']}`, 'ORCID work request', {
        headers: { Accept: 'application/json' }
      })
    )
  );

  return details.map(work => {
    const title = getValue(work?.title?.title) || 'Untitled publication';
    const key = normalise(title);
    const override = overrides[key] || {};
    const doi = doiFor(work);
    const authors = (Array.isArray(work?.contributors?.contributor)
      ? work.contributors.contributor
      : []
    )
      .map(contributor => getValue(contributor?.['credit-name']))
      .filter(Boolean);
    const date = publicationDate(work);
    const journal = getValue(work?.['journal-title']);
    const venueParts = [journal, doi ? `https://doi.org/${doi}` : ''].filter(Boolean);

    return {
      id: doi ? `doi:${doi}` : `orcid:${work['put-code']}`,
      type: typeLabel(work.type),
      year: date.slice(0, 4),
      publishedAt: date,
      title: {
        en: title,
        ne: override.titleNe || title
      },
      description: {
        en: authors.length
          ? authors.join(', ')
          : 'Public work synchronised from the ORCID record.',
        ne: authors.length
          ? `लेखक: ${authors.join(', ')}`
          : 'ORCID अभिलेखबाट समक्रमित सार्वजनिक कृति।'
      },
      venue: venueParts.join(' · ') || 'ORCID',
      url:
        override.url ||
        (doi ? `https://doi.org/${doi}` : '') ||
        getValue(work?.url) ||
        `https://orcid.org/${orcidId}`,
      sources: ['ORCID']
    };
  });
}

async function fetchScholarPublications(overrides) {
  if (!apiKey) return [];

  const url = new URL('https://serpapi.com/search.json');
  url.searchParams.set('engine', 'google_scholar_author');
  url.searchParams.set('author_id', scholarAuthorId);
  url.searchParams.set('hl', 'en');
  url.searchParams.set('sort', 'pubdate');
  url.searchParams.set('num', '100');
  url.searchParams.set('api_key', apiKey);
  const payload = await fetchJson(url, 'SerpApi Google Scholar request');
  if (payload.error) throw new Error(`SerpApi Google Scholar request failed: ${payload.error}`);

  return (Array.isArray(payload.articles) ? payload.articles : []).map(article => {
    const title = article.title || 'Untitled publication';
    const key = normalise(title);
    const override = overrides[key] || {};
    const year =
      String(article.year || article.publication || '').match(/\b(19|20)\d{2}\b/)?.[0] || '';
    const articleLink = article.link?.startsWith('http')
      ? article.link
      : `https://scholar.google.com/citations?view_op=view_citation&user=${scholarAuthorId}&citation_for_view=${encodeURIComponent(article.citation_id || '')}`;

    return {
      id: article.citation_id || `scholar:${key.replace(/\s+/g, '-')}`,
      type: 'Publication',
      year,
      publishedAt: year,
      title: { en: title, ne: override.titleNe || title },
      description: {
        en: article.authors || 'Publication synchronised from Google Scholar.',
        ne: article.authors
          ? `लेखक: ${article.authors}`
          : 'Google Scholar बाट समक्रमित प्रकाशन।'
      },
      venue: article.publication || 'Google Scholar',
      url: override.url || articleLink,
      citations: Number(article.cited_by?.value || 0),
      sources: ['Google Scholar']
    };
  });
}

function mergePublications(orcidPublications, scholarPublications) {
  const merged = new Map();

  for (const publication of orcidPublications) {
    merged.set(normalise(publication.title.en), publication);
  }

  for (const publication of scholarPublications) {
    const key = normalise(publication.title.en);
    const existing = merged.get(key);
    if (existing) {
      existing.sources = [...new Set([...existing.sources, ...publication.sources])];
      existing.citations = publication.citations;
      if (!existing.description.en) existing.description = publication.description;
    } else {
      merged.set(key, publication);
    }
  }

  return [...merged.values()].sort((a, b) => {
    const byDate = String(b.publishedAt || b.year).localeCompare(
      String(a.publishedAt || a.year)
    );
    return byDate || a.title.en.localeCompare(b.title.en);
  });
}

try {
  const overrides = JSON.parse(await readFile(overridesPath, 'utf8'));
  const orcidPublications = await fetchOrcidPublications(overrides);
  let scholarPublications = [];

  if (apiKey) {
    try {
      scholarPublications = await fetchScholarPublications(overrides);
    } catch (error) {
      console.warn(`Google Scholar enrichment skipped: ${error.message}`);
    }
  } else {
    console.log('SERPAPI_KEY is not set; using the public ORCID record only.');
  }

  const publications = mergePublications(orcidPublications, scholarPublications);
  if (publications.length < 3) {
    throw new Error(`Refusing to replace the feed with only ${publications.length} publications.`);
  }

  const sources = [`ORCID ${orcidId}`];
  if (scholarPublications.length) sources.push(`Google Scholar ${scholarAuthorId} via SerpApi`);
  const output = {
    updatedAt: new Date().toISOString().slice(0, 10),
    source: sources.join('; '),
    publications
  };

  await writeFile(outputPath, `${JSON.stringify(output, null, 2)}\n`, 'utf8');
  console.log(
    `Updated ${publications.length} publications (${orcidPublications.length} from ORCID${scholarPublications.length ? `, ${scholarPublications.length} from Google Scholar before deduplication` : ''}).`
  );
} catch (error) {
  console.error(`Publication update failed: ${error.message}`);
  process.exitCode = 1;
}
