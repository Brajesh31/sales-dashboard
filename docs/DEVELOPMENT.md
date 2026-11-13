# Development

## Requirements
- Node.js
- npm
- Committed `package-lock.json`

## Commands
```bash
npm ci
npm run dev
npm run build
npm run preview
```

## Working areas
- `index.html`: dashboard markup and external chart script loading.
- `src/main.js`: sidebar behavior and JSON-driven content.
- `src/charts.js`: Chart.js configuration.
- `src/info.json`: static sample data.
- `src/style.css`: local CSS.
- `vite.config.ts`: Tailwind plugin and public base path.

When adding a new data field, update the JSON and its rendering logic together. Avoid relying on positional `Object.values()` indexes.
