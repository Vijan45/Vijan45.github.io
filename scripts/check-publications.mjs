import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const data = JSON.parse(await readFile(path.join(root, 'data', 'publications.json'), 'utf8'));
const publications = Array.isArray(data.publications) ? data.publications : [];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(/^\d{4}-\d{2}-\d{2}$/.test(data.updatedAt), 'updatedAt must use YYYY-MM-DD.');
assert(String(data.source).includes('ORCID'), 'The publication feed must identify ORCID as a source.');
assert(publications.length >= 3, 'The publication feed must contain at least three items.');

const ids = new Set();
const titles = new Set();
let previousDate = '9999-99-99';

for (const [index, publication] of publications.entries()) {
  const title = publication?.title?.en;
  assert(publication.id, `Publication ${index + 1} has no id.`);
  assert(title, `Publication ${index + 1} has no English title.`);
  assert(!ids.has(publication.id), `Duplicate publication id: ${publication.id}`);
  assert(!titles.has(title.toLowerCase()), `Duplicate publication title: ${title}`);
  assert(/^\d{4}(-\d{2}(-\d{2})?)?$/.test(publication.publishedAt), `Invalid publication date: ${publication.publishedAt}`);
  assert(publication.year === publication.publishedAt.slice(0, 4), `Year/date mismatch for: ${title}`);
  assert(publication.publishedAt <= previousDate, 'Publications are not sorted newest first.');
  assert(new URL(publication.url).protocol === 'https:', `Publication URL must use HTTPS: ${title}`);
  ids.add(publication.id);
  titles.add(title.toLowerCase());
  previousDate = publication.publishedAt;
}

console.log(`Validated ${publications.length} ORCID-backed publications.`);
