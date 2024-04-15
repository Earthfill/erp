const themes = {
  cmyk: 'cmyk',
  business: 'business'
};

export const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem('theme') || themes.cmyk;
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
};