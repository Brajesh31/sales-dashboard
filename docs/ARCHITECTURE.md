# Architecture

```mermaid
flowchart TD
  Browser[Browser] --> HTML[index.html]
  HTML --> Main[src/main.js]
  HTML --> Charts[src/charts.js]
  Main --> JSON[src/info.json]
  JSON --> KPIs[KPI cards]
  JSON --> Sales[Recent sales table]
  JSON --> Products[Top-selling products]
  JSON --> Feed[News and activity]
  Charts --> ChartJS[Chart.js]
  ChartJS --> Canvas[Canvas chart elements]
  CSS[src/style.css and Tailwind] --> Browser
  Assets[public images and fonts] --> Browser
```

## Runtime
Vite serves the static entry page and source modules. `main.js` toggles the sidebar and fetches the local JSON file to populate several dashboard regions. `charts.js` initializes line, radar, and doughnut charts through the Chart.js global.

There is no server-side data service in this repository.
