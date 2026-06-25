/**
 * Writes data/publications.json for GitHub Pages.
 * Source: Google Scholar Author endpoint through SerpApi.
 * The API key is read only from SERPAPI_KEY; never place it in browser code.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputPath = path.join(root, 'data', 'publications.json');
const overridesPath = path.join(root, 'data', 'publication-overrides.json');
const scholarAuthorId = 'R-Six5gAAAAJ';
const apiKey = process.env.SERPAPI_KEY;

if (!apiKey) {
  console.warn('SERPAPI_KEY is not set. Keeping the existing verified publication snapshot.');
  process.exit(0);
}

const normalise = value => String(value || '').toLowerCase().replace(/[’'`]/g, "'").replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
const pickYear = article => {
  const raw = String(article.year || article.publication || '');
  return raw.match(/\b(19|20)\d{2}\b/)?.[0] || '';
};

async function fetchProfile() {
  const url = new URL('https://serpapi.com/search.json');
  url.searchParams.set('engine', 'google_scholar_author');
  url.searchParams.set('author_id', scholarAuthorId);
  url.searchParams.set('hl', 'en');
  url.searchParams.set('sort', 'pubdate');
  url.searchParams.set('num', '100');
  url.searchParams.set('api_key', apiKey);
  const response = await fetch(url);
  if (!response.ok) throw new Error(`SerpApi request failed with ${response.status}`);
  const payload = await response.json();
  if (payload.error) throw new Error(payload.error);
  return payload;
}

try {
  const [profile, overrides] = await Promise.all([
    fetchProfile(),
    readFile(overridesPath, 'utf8').then(JSON.parse)
  ]);
  const articles = Array.isArray(profile.articles) ? profile.articles : [];
  if (!articles.length) throw new Error('The Google Scholar response contained no articles.');

  const publications = articles.map(article => {
    const key = normalise(article.title);
    const override = overrides[key] || {};
    const articleLink = article.link?.startsWith('http') ? article.link : `https://scholar.google.com/citations?view_op=view_citation&user=${scholarAuthorId}&citation_for_view=${encodeURIComponent(article.citation_id || '')}`;
    return {
      id: article.citation_id || key.replace(/\s+/g, '-'),
      type: 'Publication',
      year: pickYear(article),
      title: { en: article.title || 'Untitled publication', ne: override.titleNe || article.title || 'शीर्षक उपलब्ध छैन' },
      description: {
        en: article.authors || 'Publication record synchronised from Google Scholar.',
        ne: article.authors ? `लेखक: ${article.authors}` : 'Google Scholar बाट समक्रमित प्रकाशन अभिलेख।'
      },
      venue: article.publication || 'Google Scholar',
      url: override.url || articleLink,
      citations: Number(article.cited_by?.value || 0)
    };
  });

  const output = {
    updatedAt: new Date().toISOString().slice(0, 10),
    source: `Google Scholar profile ${scholarAuthorId} via scheduled SerpApi update`,
    publications
  };
  await writeFile(outputPath, `${JSON.stringify(output, null, 2)}\n`, 'utf8');
  console.log(`Updated ${publications.length} publications in ${path.relative(root, outputPath)}.`);
} catch (error) {
  console.error(`Publication update failed: ${error.message}`);
  process.exitCode = 1;
}
