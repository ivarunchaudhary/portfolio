export const initializeTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const theme = savedTheme || (prefersDark ? 'dark' : 'light');
  
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(theme);
  
  return theme;
};

export const toggleTheme = () => {
  const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(newTheme);
  
  localStorage.setItem('theme', newTheme);
  
  return newTheme;
};
