import { useCallback, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'perepages-theme';
const DARK_QUERY = '(prefers-color-scheme: dark)';

/* --ultramarine and the dark --surface from _tokens.scss. Also inlined in
   index.html, which needs them before any module has loaded. Three copies of
   two hex values; change them together. */
const THEME_COLOR: Record<Theme, string> = {
  light: '#1e2ed6',
  dark: '#090b11',
};

function isTheme(value: string | undefined): value is Theme {
  return value === 'light' || value === 'dark';
}

/**
 * The reader's light/dark choice.
 *
 * The theme is already applied by the time this runs — the inline script in
 * index.html stamps `data-theme` before the stylesheet is parsed. So the hook
 * reads that decision rather than making it again; deciding twice is exactly
 * the flash the inline script exists to prevent.
 *
 * `choice` and `system` are held apart on purpose. `data-theme` means *an
 * explicit choice* and stays absent until there is one, which is what leaves
 * `prefers-color-scheme` in charge in CSS with no JS on the path. `system`
 * exists only so the button's icon and the address-bar colour do not go stale
 * while that is still the case.
 */
export function useTheme(): { theme: Theme; toggle: () => void } {
  const [choice, setChoice] = useState<Theme | null>(() => {
    const applied = document.documentElement.dataset.theme;
    return isTheme(applied) ? applied : null;
  });

  const [system, setSystem] = useState<Theme>(() =>
    window.matchMedia(DARK_QUERY).matches ? 'dark' : 'light',
  );

  const theme = choice ?? system;

  useEffect(() => {
    const query = window.matchMedia(DARK_QUERY);
    const onChange = () => setSystem(query.matches ? 'dark' : 'light');

    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  // One writer for both places the theme lives outside React, so the two
  // cannot drift. The meta is keyed on the *resolved* theme rather than on
  // `choice`: with nothing chosen it still has to follow the OS.
  useEffect(() => {
    const root = document.documentElement;
    if (choice) root.dataset.theme = choice;
    else delete root.dataset.theme;

    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', THEME_COLOR[theme]);
  }, [choice, theme]);

  // Not inside a `setChoice` updater: updaters have to be pure and StrictMode
  // runs them twice.
  const toggle = useCallback(() => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';

    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // The choice still holds for this page view; it just will not survive
      // a reload.
    }

    setChoice(next);
  }, [theme]);

  return { theme, toggle };
}
