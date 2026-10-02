# Theming

Las CSS custom properties de la librería siguen una **taxonomía por capa de superficie**. Cada token apunta a una capa visual concreta, no a un componente específico: si override-ás una capa, todos los componentes que la usan se actualizan juntos.

## Capas

| Capa | Token | Función visual |
|------|-------|----------------|
| base | `--bg` | fondo de la app, inputs vacíos |
| intermedia | `--bg-alt` | hover / pressed |
| elevada | `--bg-elevated` | modals, dropdowns, popovers |
| panel | `--bg-panel` | cards, accordions, side panels |
| borde | `--border` | bordes de superficies |
| texto | `--text` / `--text-muted` | texto principal / secundario |
| acento | `--accent` | hover y selección |
| paleta | `--color-primary` …`--color-dark` | 9 colores semánticos (Catppuccin) |
| tipografía | `--font-mono` | stack monospace |
| animación | `--cp-ease` / `--cp-ease-snap` | curvas de easing |

## Ejemplo — tema sepia

```css
.sepia-card {
  --bg-panel: #fffaf0;
  --border: #c9a87c;
  --text: #3a2a1a;
  --color-primary: #8b4513;
}
```

Funciona porque la card usa `var(--bg-panel)` para su fondo, `var(--border)` para su borde, `var(--text)` para el color del texto y `var(--color-primary)` para sus acentos. Todos estos `var()` están en el CSS scoped del componente y reciben el cascade normal.

## When to change one thing vs the whole theme

**Change one thing** when you want to adjust a specific detail:

```css
.my-section {
  --bg-elevated: #1e1e2e;   /* only changes modals */
}
```

That touches one variable. Only what uses it changes; the rest stays the same.

**Change the whole theme** when you want a new look from scratch (e.g. dark mode). Override the variables in `:root`:

```css
:root {
  --bg: #1e1e2e;
  --bg-alt: #2a2a3a;
  --bg-elevated: #333344;
  --bg-panel: #2d2d3d;
  --text: #e0e0e8;
  --text-muted: #a0a0b0;
  --border: #444455;
  --color-primary: #cba6f7;
  /* ... */
}
```

That replaces the whole theme of your app in one go.

## Cómo se aplica por componente

Cada página de componente tiene su propia sección `## CSS Custom Properties` con la tabla de los tokens que ese componente en particular usa, su default real y una descripción corta. La capa es la misma; la lista es por componente.
