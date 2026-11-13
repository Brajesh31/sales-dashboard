# Sales Dashboard

A static sales and administration dashboard built with Vite, vanilla JavaScript, Tailwind CSS 4, and Chart.js. The interface displays sample KPI cards, sales activity, top-selling products, recent news, and charts using local JSON and static image assets.

> This is a frontend demonstration populated with sample data. It is not connected to a real sales database, analytics platform, customer system, or payment provider. The displayed figures are illustrative, not business reporting.

## Features
- Responsive dashboard layout and collapsible sidebar.
- KPI cards populated from local JSON.
- Recent sales table.
- Top-selling product list.
- Activity/news feed.
- Line, radar, and doughnut charts using Chart.js.
- Static local product and news images.

## Stack
- JavaScript (ES modules)
- Vite 6
- Tailwind CSS 4 with the Vite plugin
- Chart.js loaded by the page

## Project structure
```text
index.html
src/
  main.js       Sidebar behavior and JSON-driven tables/feed
  charts.js     Chart.js visualizations
  info.json     Demo dashboard data
  style.css     Dashboard styles
public/
  news/         Demo news thumbnails
  products/     Demo product thumbnails
  fonts/        Icon font assets
vite.config.ts  Vite and Tailwind plugin configuration
```

## Requirements and setup
Node.js and npm are required. The repository includes `package-lock.json`.

```bash
git clone https://github.com/Brajesh31/sales-dashboard.git
cd sales-dashboard
npm ci
npm run dev
```

Open the local URL printed by Vite.

## Commands
| Command | Purpose |
| --- | --- |
| `npm run dev` | Start development server |
| `npm run build` | Create production output in `dist/` |
| `npm run preview` | Preview production build |
| `npm run deploy` | Run the configured gh-pages deployment script |

The `deploy` script invokes `gh-pages`, but the current package manifest does not declare it as a dependency. Install/configure it before relying on that script. The Vite base path is configured for `/sales-dashboard/` and should be changed if the hosting path differs.

## Data model
The UI reads `src/info.json`, including cards, news, top-selling products, recent sales, and activity entries. These are static examples. Update the JSON structure carefully because `src/main.js` currently reads array positions from `Object.values(data)`.

## Validation
```bash
npm ci
npm run build
```

## Limitations and security
- No backend or database is included.
- Dashboard values are static demo data.
- No authentication or authorization is implemented.
- Do not use this project to report real revenue or customer data without a trusted data source and access controls.

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md), [docs/DATA.md](docs/DATA.md), [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md), and [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

## Contributing and license
See [CONTRIBUTING.md](CONTRIBUTING.md). Licensed under MIT, see [LICENSE](LICENSE).

Last updated: 2026-11-13 21:20 UTC
