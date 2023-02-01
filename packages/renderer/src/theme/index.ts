const THEME_DARKMODE = 'store-theme-darkmode';

export function getDarkMode() {
  const selected = localStorage.getItem(THEME_DARKMODE);

  return !!selected && /true/i.test(selected);
}

export function setTheme(darkMode: boolean) {
  localStorage.setItem(THEME_DARKMODE, String(darkMode));
}
