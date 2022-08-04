export function startupCheckForDarkMode() {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
}

export function toggleDarkMode() {
  if (localStorage.theme === 'dark') {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
}

export function enableDarkMode() {
  localStorage.theme = 'dark';
  document.documentElement.classList.remove('light');
  document.documentElement.classList.add('dark');
  document.body.classList.add('bg-zinc-900');
}

export function disableDarkMode() {
  localStorage.theme = 'light';
  document.documentElement.classList.add('light');
  document.documentElement.classList.remove('dark');
  document.body.classList.remove('bg-zinc-900');
}
