import { Calculator } from './modules/calculator.js';
import { UI } from './modules/ui.js';
import { Theme } from './modules/theme.js';

class App {
  constructor() {
    this.calculator = new Calculator('CASHOUT');
    this.ui = new UI();
    this.theme = new Theme();
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.setupThemeToggle();
  }

  setupEventListeners() {
    const amountInput = this.ui.elements.amountInput;
    if (!amountInput) return;

    amountInput.addEventListener('input', () => {
      this.handleInput();
    });

    amountInput.focus();
  }

  handleInput() {
    const amount = this.ui.getInputValue();
    const result = this.calculator.calculate(amount);
    this.ui.displayResults(result);
  }

  setupThemeToggle() {
    let themeBtn = document.querySelector('.theme-toggle');
    if (!themeBtn) {
      themeBtn = this.createThemeToggleButton();
      document.body.appendChild(themeBtn);
    }

    themeBtn.addEventListener('click', () => {
      this.theme.toggle();
      this.updateThemeButtonIcon();
    });

    this.updateThemeButtonIcon();
  }

  createThemeToggleButton() {
    const btn = document.createElement('button');
    btn.className = 'theme-toggle';
    btn.setAttribute('aria-label', 'Toggle dark mode');
    return btn;
  }

  updateThemeButtonIcon() {
    const btn = document.querySelector('.theme-toggle');
    if (btn) {
      btn.textContent = this.theme.getCurrent() === 'dark' ? '☀️' : '🌙';
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
  });
} else {
  window.app = new App();
}

export { App };
