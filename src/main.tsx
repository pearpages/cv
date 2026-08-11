import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Archivo is imported from the `wdth` entrypoint rather than the default:
// the hero animates the width axis, and the standard build ships weight only.
import '@fontsource-variable/archivo/wdth.css';
import '@fontsource-variable/instrument-sans';
import '@fontsource-variable/geist-mono';

import './styles/index.scss';
import { App } from './App';

const container = document.getElementById('cv');
if (!container) throw new Error('Mount point #cv is missing from index.html');

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
