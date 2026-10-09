# Security

The security surface of the CV at perepages.com and the rules that protect it. General rules are
in [principles.md](principles.md); how the pieces fit in [architecture.md](architecture.md).
Update this file whenever the surface changes (new input, endpoint, secret, dependency,
permission).

## Reporting a vulnerability

Report privately through a GitHub security advisory on `pearpages/cv` (Security → Report a
vulnerability). Never a public issue for an unfixed vulnerability.

## Surface

Small: a static site on GitHub Pages with no backend, no forms, no auth and no user input.

- **Third-party script:** the footfall analytics tag (`analytics.pearpages.com/script.js`, a
  self-hosted Umami) loads on every page. Whoever controls that host can run script on
  perepages.com.
- **Inline scripts in `index.html`:** the anti-flash theme script reads `localStorage`, the
  service-worker bootstrap registers `/service-worker.js`, and a JSON-LD block. No CSP is set
  (GitHub Pages cannot send headers).
- **Service worker:** `public/service-worker.js` only unregisters itself and clears caches.
- **External links** (GitHub, npm, blog, contact) point at third parties.
- **Personal data:** the content is Pere's own public CV; contact details are published on
  purpose.
- **Build time:** `scripts/build-pdf.mjs` runs headless Chromium against a local Vite preview on
  port 4177; it loads only this repo's `print.html`.
- **Deploy:** `.github/workflows/deploy.yml` holds `pages: write` and `id-token: write`; it
  refuses tags not on `master`, and the `github-pages` environment accepts `v*.*.*` tags only.

## Secrets

- Never committed. The project uses none: no env vars, and CI uses only GitHub's OIDC token for
  Pages.
- `.env*` files are gitignored; an example file lists names only.
- The footfall website ID in `index.html` is public by design, not a secret.

## Dependencies

- `package-lock.json` is committed and CI installs with `npm ci`.
- Runtime dependencies are React, fonts and the `@pearpages/*` family packages; everything else is
  build-time (Vite, Sass, TypeScript, Playwright).
- CI actions are pinned to major tags (`@v4`, `@v5`), not SHAs.
- No automated update or audit is configured. TODO: decide on Dependabot or a periodic
  `npm audit`.

## Known risks

- **Analytics host compromise** would allow script injection site-wide; accepted because the host
  is Pere's own and the tag is cookieless.
- **No Content-Security-Policy**, because GitHub Pages cannot set response headers; a `<meta>` CSP
  would need hashes for the inline scripts. Accepted for a static page with no input.
- **Actions pinned by tag, not SHA** — accepted for a personal site; revisit if the workflow gains
  secrets.
