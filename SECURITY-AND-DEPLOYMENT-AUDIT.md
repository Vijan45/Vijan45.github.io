# Security and deployment audit

Repository: `Vijan45/Vijan45.github.io`

Audit date: 2026-07-28

Auditor: authenticated GitHub account `Vijan45`

This report is sanitized. It contains no tokens, repository-secret values, webhook URLs, or credential material. No DNS or Cloudflare setting was changed.

## Executive summary

The repository is public and publishes the GitHub user Pages site for `Vijan45` with custom domain `bhijan.com.np`. The custom domain is proxied through Cloudflare, but response headers and GitHub deployment records confirm GitHub Pages remains the origin. Repository visibility, Pages, the custom domain, the `CNAME` file, and the production branch were therefore preserved.

The account has repository admin access. Vulnerability alerts, automated security updates, CodeQL default setup, secret scanning, push protection, and read-only default Actions permissions were already enabled. The audit added a production-branch ruleset and automatic deletion of merged feature branches directly in repository settings. File hardening is proposed on `chore/repository-security-hardening`.

## Deployment and repository baseline

| Item                            | Audited state                                  |
| ------------------------------- | ---------------------------------------------- |
| Visibility                      | Public                                         |
| Default/production branch       | `main`                                         |
| GitHub Pages                    | Enabled; status `built`; build type `legacy`   |
| Pages source                    | `main`, repository root                        |
| Pages URL recorded by GitHub    | `http://bhijan.com.np/`                        |
| Custom domain                   | `bhijan.com.np`                                |
| GitHub Pages HTTPS enforcement  | Disabled                                       |
| Repository CNAME file           | `/CNAME`, containing `bhijan.com.np`           |
| Deployment environment          | `github-pages`, restricted by branch policy    |
| Latest recorded deployment      | Successful GitHub Pages deployment from `main` |
| Cloudflare role                 | Reverse proxy/DNS in front of GitHub Pages     |
| External DNS/Cloudflare changes | None                                           |

Live checks found Cloudflare anycast addresses for the apex and `www`. HTTPS returned HTTP 200 through Cloudflare while retaining GitHub Pages origin headers. The direct `https://vijan45.github.io/` URL redirected to the configured custom domain.

GitHub Pages HTTPS enforcement was not changed. GitHub reports it disabled, and the custom domain is proxied through Cloudflare; changing origin HTTPS behavior without reviewing the external Cloudflare SSL and redirect configuration could cause a redirect loop or outage. The public HTTP endpoint also returned content rather than redirecting. That external redirect posture should be reviewed separately in Cloudflare.

## Actions and integrations

Current workflows are GitHub-managed CodeQL and the legacy Pages build/deployment workflow. No user-authored workflow file exists on `main`. The most recent CodeQL and Pages runs audited on 2026-07-28 completed successfully.

The default workflow token permission is read-only, and workflows cannot approve pull-request reviews. The repository has one deployment environment (`github-pages`) and no repository webhooks. GitHub App installations could not be enumerated: the authenticated OAuth token has repository administration scopes but the installations endpoint returned HTTP 403 because it was not authorized to a GitHub App. No integrations were removed or changed.

The README describes a scheduled publication-update workflow, but no corresponding workflow file is present on `main`. The static publication data remains deployed, and this audit does not add or restore a workflow that could require an unverified external secret.

## Security controls and findings

| Control                          | Audited state                            |
| -------------------------------- | ---------------------------------------- |
| Vulnerability alerts             | Enabled                                  |
| Automated security updates       | Enabled and not paused                   |
| Open Dependabot alerts           | 0                                        |
| Dependabot version-update file   | Absent on `main`; added in this branch   |
| Secret scanning                  | Enabled                                  |
| Push protection                  | Enabled                                  |
| Open secret-scanning alerts      | 0                                        |
| CodeQL default setup             | Configured for JavaScript and TypeScript |
| Open code-scanning alerts        | 0                                        |
| Actions default token permission | Read repository contents                 |
| Actions PR-approval permission   | Disabled                                 |
| Repository webhooks              | 0                                        |

## Credential exposure review

Gitleaks 8.30.1 scanned all 7 reachable commits (approximately 240 KB) with redaction enabled and found no potential credentials. GitHub secret scanning reported no open alerts. No tracked or historical files used common sensitive names such as `.env`, private-key files, or credentials files.

No exposed credential was identified, so no rotation action is currently indicated. If a provider reports a credential independently, revoke it first, replace it in GitHub secrets, and investigate affected logs and deployments before considering history cleanup.

## Branch policy and administrative changes

| Setting                  | Before       | After                                                                  |
| ------------------------ | ------------ | ---------------------------------------------------------------------- |
| Production ruleset       | None         | Active `Protect production branch` ruleset targeting `refs/heads/main` |
| Branch deletion          | Not blocked  | Blocked by ruleset                                                     |
| Force pushes             | Not blocked  | Blocked by ruleset                                                     |
| Pull requests            | Not required | Required with 0 approvals                                              |
| Review-thread resolution | Not required | Required                                                               |
| Linear history           | Not required | Unchanged to preserve all enabled merge methods                        |
| Required status checks   | None         | Unchanged; no user-authored CI workflow exists                         |
| Delete merged branches   | Disabled     | Enabled                                                                |

The ruleset does not require an outside reviewer or approval, so the repository owner can merge their own pull request after resolving any conversations. It does not change the Pages source or current deployment.

## Proposed repository-file changes

| File or control          | Before             | Proposed on this branch                                                                                                      |
| ------------------------ | ------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| `.gitignore`             | Partial exclusions | Environment files, private keys, credential files, build output, local Cloudflare state, editor files, and OS files excluded |
| `.env.example`           | Absent             | Added with a placeholder `SERPAPI_KEY`; no credential value                                                                  |
| `.github/dependabot.yml` | Absent             | Weekly npm update checks                                                                                                     |
| This report              | Absent             | Added                                                                                                                        |

## Validation

`npm run check` completed successfully on this branch. It validated both JavaScript files and parsed both publication-data JSON files.

## Preserved settings and known limitations

- The user Pages repository remains public and GitHub Pages remains enabled.
- `bhijan.com.np`, its `CNAME` file, the `main` Pages source, and the `github-pages` environment remain unchanged.
- GitHub Pages HTTPS enforcement was not changed because the Cloudflare proxy configuration was outside the authorized scope and could not be validated end to end.
- Linear history was not required because all three merge methods remain enabled.
- Status checks were not added because there is no user-authored CI workflow on the default branch.
- Secret-scanning non-provider patterns and validity checks remain disabled because they were not requested and may depend on plan or feature availability.
- GitHub App installation inventory requires a token authorized to a GitHub App and could not be completed through the authenticated CLI token.
