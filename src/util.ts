export function isDarkTheme() {
  const el = document.querySelector('body');
  return el?.className.split(' ').includes('theme-dark') ?? false;
}
