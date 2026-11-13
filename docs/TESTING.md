# Testing

## Automated validation
```bash
npm ci
npm run build
```

## Manual smoke tests
1. Open the dashboard locally and on the deployed base path.
2. Toggle the sidebar on desktop and narrow viewports.
3. Confirm KPI cards, recent sales, product rows, and news feed render.
4. Confirm all three charts initialize.
5. Check local images and fonts in the browser network panel.
6. Check console errors and JSON fetch failures.
7. Verify layout at mobile and desktop widths.

The current repository does not define a dedicated unit-test or lint script. Build success is not a substitute for these manual checks.
