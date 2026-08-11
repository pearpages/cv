import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The site is served from the apex of perepages.com (repo `cv`, published by
// .github/workflows/deploy.yml). Every asset path must be root-relative — a
// `/cv/` base would 404 here and white-screen the page.
export default defineConfig({
  base: '/',
  plugins: [react()],
});
