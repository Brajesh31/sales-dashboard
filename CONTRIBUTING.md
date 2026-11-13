# Contributing

## Setup
```bash
npm ci
npm run dev
```

## Guidelines
- Keep demo data in `src/info.json` and document schema changes.
- Keep DOM behavior in `src/main.js` and chart configuration in `src/charts.js`.
- Avoid unsafe HTML insertion when rendering data. Treat external or user-provided strings as untrusted.
- Keep the Vite base path synchronized with the deployment URL.
- Do not commit secrets, real customer data, generated output, or unlicensed assets.

## Validation
```bash
npm run build
```
Test sidebar toggling, data rendering, all charts, image paths, and narrow viewport layouts.

## Pull requests
Describe the visible change, list checks, and attach screenshots for UI changes. Note any new dependencies or data fields.
