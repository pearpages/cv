import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The site is served from the apex of perepages.com (repo `cv`, published by
// .github/workflows/deploy.yml). Every asset path must be root-relative — a
// `/cv/` base would 404 here and white-screen the page.
export default defineConfig({
  base: '/',
  plugins: [react()],

  // Two entries. `print.html` is the source for dist/cv.pdf — headless Chromium
  // renders it in scripts/build-pdf.mjs, which then deletes it from dist/ so it
  // is never published.
  //
  // This is the *top-level* `input`, not `build.rollupOptions.input`: Vite 8 is
  // Rolldown-based and treats the latter as a deprecated alias. The top-level
  // option also applies in dev, which is what lets `npm run dev` serve
  // /print.html for working on the layout.
  //
  // Paths are relative so this file needs no `node:path` import and no
  // `@types/node`; Vite resolves them against `root`, which is this directory.
  // Vite ignores the keys for HTML entries and uses the resolved path, so
  // `print.html` lands at `dist/print.html`.
  input: {
    main: 'index.html',
    print: 'print.html',
  },
});
