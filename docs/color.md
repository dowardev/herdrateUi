# Color system

<script setup lang="ts">
const colors = ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'light', 'medium', 'dark'] as const
</script>

The library implements a semantic color system in the style of **Ionic**: each color has a name (`primary`, `secondary`, etc.) and is automatically assigned to the corresponding Catppuccin token according to the active theme (dark/light).

---

## Types

```ts
type Color =
  | 'primary'   // main accent
  | 'secondary' // secondary accent
  | 'tertiary'  // tertiary accent
  | 'success'   // successful operation
  | 'warning'   // warning
  | 'danger'    // error or danger
  | 'light'     // light shade (background)
  | 'medium'    // medium shade (borders/secondary text)
  | 'dark';     // dark shade (main text)

type Fill = 'solid' | 'outline' | 'clear';
```

`Fill` only applies to `Button` and `ButtonGroup`.

---

## Demo — full palette

### Background (.bg-color-{name})

<div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;">
  <span v-for="c in colors" :key="c" :class="`bg-color-${c}`" style="padding: 0.5rem 1rem; font-family: var(--font-mono); font-size: 0.75rem; border-radius: 2px;">
    {{ c }}
  </span>
</div>

### Text (.color-{name})

<div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;">
  <span v-for="c in colors" :key="c" :class="`color-${c}`" style="font-family: var(--font-mono); font-size: 0.8rem; padding: 0.3rem 0.6rem;">
    █ {{ c }}
  </span>
</div>

### Border (.bd-color-{name})

<div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;">
  <span v-for="c in colors" :key="c" :class="`bd-color-${c}`" style="border-width: 2px; border-style: solid; font-family: var(--font-mono); font-size: 0.75rem; padding: 0.3rem 0.6rem;">
    █ {{ c }}
  </span>
</div>

---

## CSS variables

Each semantic color exposes a `--color-{name}` variable that is automatically redefined according to the active theme.

| Variable | Dark theme (Mocha) | Light theme (Latte) |
|---|---|---|
| `--color-primary` | `--ctp-mocha-mauve` | `--ctp-latte-mauve` |
| `--color-secondary` | `--ctp-mocha-lavender` | `--ctp-latte-lavender` |
| `--color-tertiary` | `--ctp-mocha-blue` | `--ctp-latte-blue` |
| `--color-success` | `--ctp-mocha-green` | `--ctp-latte-green` |
| `--color-warning` | `--ctp-mocha-yellow` | `--ctp-latte-yellow` |
| `--color-danger` | `--ctp-mocha-red` | `--ctp-latte-red` |
| `--color-light` | `--ctp-mocha-rosewater` | `--ctp-latte-surface1` |
| `--color-medium` | `--ctp-mocha-overlay2` | `--ctp-latte-overlay0` |
| `--color-dark` | `--ctp-mocha-subtext1` | `--ctp-latte-text` |

## Customizing colors

You can override any color variable to customize the theme:

```css
:root {
  --color-primary: #ff00aa;
  --color-danger: #ff4444;
}
```

You can also redefine it only for dark or light theme using `.theme-dark` or `.theme-light`:

```css
.theme-dark {
  --color-primary: #ff00aa;
}
```

---

## Adding a color

You can extend the system with custom colors. Define the variables in `:root` and create a utility class:

```css
:root {
  --color-favorite: #69bb7b;
}

.color-favorite { color: var(--color-favorite); }
.bg-color-favorite { background: var(--color-favorite); }
.bd-color-favorite { border-color: var(--color-favorite); }
```

Then use the color in any component via classes:

```html
<span class="color-favorite">Favorite text</span>
```

---

## Utility classes

Available for use outside of components:

| Class | Effect |
|---|---|
| `.color-{name}` | `color` |
| `.bg-color-{name}` | `background` |
| `.bd-color-{name}` | `border-color` |

```html
<span class="bg-color-danger color-dark bd-color-warning">
  Alert
</span>
```

