/**
 * Entry for the paper edition. Mounts into `print.html`, which is rendered to
 * PDF by `scripts/build-pdf.mjs` and never published.
 *
 * Fonts are the **static** fontsource packages, not the `@fontsource-variable/*`
 * ones the site uses. This is not a preference: Chrome silently degrades
 * variable fonts to Type 3 glyph procedures when generating a PDF — every glyph
 * becomes a drawing instruction rather than a real font program, tripling the
 * file size and leaving text extraction on its weakest footing for the cheap
 * parsers in ATS pipelines. Static faces embed properly as CID TrueType. The
 * build asserts this rather than trusting it.
 *
 * The `latin-*` entrypoints are deliberate too: a bare `500.css` pulls seven
 * subset faces (cyrillic, greek, vietnamese…) for a document that is entirely
 * Latin.
 */

import '@fontsource/source-serif-4/latin-400.css';
import '@fontsource/source-serif-4/latin-600.css';
import '@fontsource/source-serif-4/latin-400-italic.css';
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-500.css';
import '@fontsource/inter/latin-600.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Cv } from './Cv';
import './print.scss';

const root = document.getElementById('cv-print');
if (!root) throw new Error('print.html is missing #cv-print');

createRoot(root).render(
  <StrictMode>
    <Cv />
  </StrictMode>,
);
