# Bhijan Neupane — GitHub Pages Research Portfolio

A responsive, accessibility-aware portfolio for **Bhijan Neupane**, designed for GitHub Pages. It ships with a Nepali-first interface, an English toggle, high-performance canvas/CSS motion, verified publication links, profile links, and a managed publication-feed workflow.

## Included

- Nepali is the default language; English is available with the header language switch and the choice is retained locally.
- Animated research identity interface with responsive canvas particles, orbit visualisation, scroll reveal, count-up figures, magnetic buttons, and motion-reduction support.
- Site icon assets: SVG favicon, PNG favicons, Apple touch icon, PWA manifest, and social-preview image.
- Direct profile links: Google Scholar, ResearchGate, GitHub, HackerNoon, and `info@bnmaterial.com`.
- Publication cards open their canonical DOI/SSRN page when known. The Google Scholar profile is the safe fallback.
- `data/publications.json` gives the deployed site a fast, static publication source.
- GitHub Actions refresh the publication feed weekly and deploy the portfolio automatically.

## Deploy to GitHub Pages

1. Create a new GitHub repository, preferably named `bhijan-neupane.github.io` for a root site or any repository name for a project site.
2. Upload the complete contents of this package to the repository root and push to the `main` branch.
3. In GitHub, open **Settings → Pages** and set **Source** to **GitHub Actions**.
4. Open the **Actions** tab and run **Deploy GitHub Pages** once. GitHub will show the deployed URL when it finishes.

## Enable automatic publication updates

The deployed browser never talks directly to Google Scholar; this prevents CORS failures, rate limiting, and accidental exposure of a private API key. Instead, GitHub Actions obtains publication data from the Google Scholar Author endpoint through SerpApi and commits a refreshed static JSON feed.

1. Create a SerpApi account and generate an API key.
2. In the GitHub repository, open **Settings → Secrets and variables → Actions → New repository secret**.
3. Name the secret `SERPAPI_KEY` and paste the API key as its value.
4. In **Actions**, run **Update publication feed** once to verify it. The workflow then runs every Monday at 02:17 UTC.

The configuration targets Scholar profile identifier `R-Six5gAAAAJ`. The initial static feed remains live even before the secret is configured.

## Publication source control

- `data/publications.json`: the live card data rendered by the website.
- `data/publication-overrides.json`: maps known exact publication titles to DOI/SSRN URLs and Nepali display titles. Keep this file when the scheduled feed is refreshed, so a click continues to open the publisher/preprint record rather than only a Scholar citation page.
- `scripts/update-publications.mjs`: the scheduled data fetcher. It requires Node.js 18+ and `SERPAPI_KEY` only when an update is requested.

## Validate locally

```bash
npm run check
```

For a quick local preview, run one of the following commands in the project folder and open the reported local URL:

```bash
python -m http.server 8080
# or
npx serve .
```

## Customisation points

- Change page content and translations in `assets/app.js` (`translations.ne` and `translations.en`).
- Update verified publication links/translations in `data/publication-overrides.json`.
- Adjust visual tokens at the top of `assets/styles.css`.
- Add a custom domain only after deployment by creating `CNAME` with your own verified domain name.

## License

MIT. See `LICENSE`.
