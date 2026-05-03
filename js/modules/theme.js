import { Storage } from '../utils/storage.js';

const THEME_KEY = 'app_theme';
const DARK_MODE_CLASS = 'dark-mode';

class Theme {
  constructor() {
    this.currentTheme = this.loadTheme();
    this.applyTheme(this.currentTheme);
  }

  loadTheme() {
    const savedTheme = Storage.getItem(THEME_KEY);
    if (savedTheme) return savedTheme;

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return 'light';
  }

  applyTheme(theme) {
    const body = document.body;
    if (theme === 'dark') {
      body.classList.add(DARK_MODE_CLASS);
    } else {
      body.classList.remove(DARK_MODE_CLASS);
    }
    this.currentTheme = theme;
    Storage.setItem(THEME_KEY, theme);
  }

  toggle() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme(newTheme);
    return newTheme;
  }

  getCurrent() {
    return this.currentTheme;
  }
}

export { Theme };
