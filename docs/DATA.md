# Demo Data

## Source
Dashboard content is stored in `src/info.json`.

Top-level groups:
- `cards`: KPI labels, icon classes, values, percentages and active state.
- `news`: thumbnail path, title, subtitle and category.
- `topselling`: image path, product name, price and sold count.
- `recentsales`: order number, customer label, product label, amount and status.
- `recentactiviy`: sample activity timeline entries.

## Important implementation detail
`src/main.js` currently uses `Object.values(data)` and fixed array indexes to select groups. This makes the rendering dependent on JSON property order. If the data model changes, prefer named properties such as `data.recentsales` and `data.topselling`.

All records are illustrative. Do not use them as live business metrics.
