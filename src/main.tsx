import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Archivo is imported from the `wdth` entrypoint rather than the default:
// the hero animates the width axis, and the standard build ships weight only.
import '@fontsource-variable/archivo/wdth.css';
import '@fontsource-variable/instrument-sans';
import '@fontsource-variable/geist-mono';

// The cascade order first: layers rank by where they are first named, so this
// has to precede every stylesheet below.
import './styles/layers.css';

// pulp's tokens (@layer tokens) and the stylesheets of the components this site
// uses. `@pearpages/pulp-css` is deliberately absent: it carries pulp's reset and
// base styles, and this site keeps its own. Tokens first, so the site's own
// stylesheet can read them.
import '@pearpages/pulp-tokens/tokens.css';
import '@pearpages/pulp-react/button.css';
import '@pearpages/pulp-react/icon-button.css';
import '@pearpages/pulp-react/icon.css';

import './styles/index.scss';
import { App } from './App';

const container = document.getElementById('cv');
if (!container) throw new Error('Mount point #cv is missing from index.html');

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
