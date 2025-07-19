export const getTheme = () => {
  return localStorage.getItem('theme') || 'light';
};

export const setTheme = (theme) => {
  localStorage.setItem('theme', theme);
  document.body.className = `font-inter ${theme}`;
};

export const toggleTheme = () => {
  const currentTheme = getTheme();
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
  return newTheme;
};

export const initializeTheme = () => {
  const theme = getTheme();
  setTheme(theme);
  return theme;
};
