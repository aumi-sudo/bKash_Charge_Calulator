# bKash Charge Calculator - Refactored

A modern, modular bKash charge calculator with real-time calculations, dark mode support, and extensible architecture.

## New Features

✨ **Real-time Auto-Calculation** - Results update instantly as you type (no Calculate button needed)
🌙 **Dark Mode** - Toggle between light and dark themes with persistent preferences
🏗️ **Modular Architecture** - Clean, organized code structure for easy maintenance and expansion
📦 **Extensible Design** - Built with room for future features like multiple calculator modes and i18n
⚡ **Performance** - Lightweight, vanilla JavaScript with no external dependencies

## Project Structure

```
bKash_Charge_Calculator/
├── index.html                    # Main entry point
├── css/
│   ├── base.css                 # Global styles & variables
│   ├── components.css           # Component styles
│   └── responsive.css           # Mobile responsive queries
├── js/
│   ├── main.js                  # App initialization entry
│   ├── app.js                   # Core application logic
│   ├── modules/
│   │   ├── calculator.js        # Calculation engine
│   │   ├── ui.js                # DOM updates & rendering
│   │   └── theme.js             # Dark mode management
│   ├── utils/
│   │   ├── validators.js        # Input validation
│   │   ├── formatter.js         # Number formatting
│   │   └── storage.js           # LocalStorage helper
│   └── constants/
│       └── rates.js             # bKash rates configuration
├── data/
│   └── rates.json               # Rate data (for future API integration)
└── .gitignore
```

## How It Works

### Real-Time Calculation
The calculator now automatically computes charges as you type:

1. User enters amount in input field
2. `App.handleInput()` is triggered on each keystroke
3. `Calculator.calculate()` processes the amount
4. `UI.displayResults()` updates the DOM instantly
5. Results animate in smoothly

### Dark Mode
Dark mode preference is saved to LocalStorage:
- Click the theme toggle button (top-right)
- Preference persists across sessions
- Respects system theme preference if not manually set

## Technologies Used

- **Frontend**: Vanilla JavaScript ES6 Modules
- **Styling**: CSS3 with CSS Variables for theming
- **Storage**: Browser LocalStorage API
- **Build**: No build tool required (works as-is)
- **Analytics**: Google Analytics (GA4)

## Getting Started

1. Clone or download the repository
2. Open `index.html` in your browser
3. Start calculating!

No installation or build steps required.

## Future Enhancements

The modular structure supports easy addition of:

- ✅ Multiple calculator modes (Money Send, Bill Pay, etc.)
- ✅ Multi-language support (English, Bengali)
- ✅ Fee breakdown charts
- ✅ Transaction history with LocalStorage
- ✅ Agent locator
- ✅ FAQ & knowledge base
- ✅ Mobile app wrapper

Simply create new modules in `js/modules/` and import them in `app.js`.

## Configuration

Edit `js/constants/rates.js` to update bKash rates:

```javascript
const RATES = {
  CASHOUT: {
    charge_percentage: 1.85,  // Update this
    min_amount: 50,
    max_amount: 30000
  }
};
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

Requires ES6 Module support.

## License

MIT License - Feel free to use and modify as needed!

## Original Author

Built with ❤️ by someone who loves the simplicity of the original calculator and wanted to make it even better.
