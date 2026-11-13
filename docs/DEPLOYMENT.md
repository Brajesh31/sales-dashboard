# Deployment

## Build
```bash
npm ci
npm run build
npm run preview
```

The Vite output is written to `dist/`. The current configuration sets `base: "/sales-dashboard/"`, which is suitable only when the site is hosted under that path.

## GitHub Pages
The package manifest declares a GitHub Pages homepage and deploy scripts, but the `gh-pages` package is not declared in the current dependencies. Add and lock the deployment dependency before using `npm run deploy`, or use a GitHub Actions Pages workflow.

## Release checklist
- Verify the actual hosting path matches Vite's base.
- Confirm JSON fetch paths and static assets load from the deployed subpath.
- Check all chart scripts and canvas elements.
- Verify no private business data or secrets are included.
