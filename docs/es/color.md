# Sistema de colores

<script setup lang="ts">
const colors = ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'light', 'medium', 'dark'] as const
</script>

La librería implementa un sistema de colores semánticos estilo **Ionic**: cada color tiene un nombre (`primary`, `secondary`, etc.) y se asigna automáticamente al token Catppuccin correspondiente según el tema activo (oscuro/claro).

---

## Tipos

```ts
type Color =
  | 'primary'   // acento principal
  | 'secondary' // acento secundario
  | 'tertiary'  // acento terciario
  | 'success'   // operación exitosa
  | 'warning'   // advertencia
  | 'danger'    // error o peligro
  | 'light'     // tono claro (fondo)
  | 'medium'    // tono medio (bordes/texto secundario)
  | 'dark';     // tono oscuro (texto principal)

type Fill = 'solid' | 'outline' | 'clear';
```

`Fill` solo aplica a `Button` y `ButtonGroup`.

---

## Demo — paleta completa

### Fondo (.bg-color-{name})

<div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;">
  <span v-for="c in colors" :key="c" :class="`bg-color-${c}`" style="padding: 0.5rem 1rem; font-family: var(--font-mono); font-size: 0.75rem; border-radius: 2px;">
    {{ c }}
  </span>
</div>

### Texto (.color-{name})

<div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;">
  <span v-for="c in colors" :key="c" :class="`color-${c}`" style="font-family: var(--font-mono); font-size: 0.8rem; padding: 0.3rem 0.6rem;">
    █ {{ c }}
  </span>
</div>

### Borde (.bd-color-{name})

<div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;">
  <span v-for="c in colors" :key="c" :class="`bd-color-${c}`" style="border-width: 2px; border-style: solid; font-family: var(--font-mono); font-size: 0.75rem; padding: 0.3rem 0.6rem;">
    █ {{ c }}
  </span>
</div>

---

## Variables CSS

Cada color semántico expone una variable `--color-{name}` que se redefine automáticamente según el tema activo.

| Variable | Tema oscuro (Mocha) | Tema claro (Latte) |
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

## Modificar colores

Puedes sobrescribir cualquier variable de color para personalizar el tema:

```css
:root {
  --color-primary: #ff00aa;
  --color-danger: #ff4444;
}
```

También puedes redefinir solo para tema oscuro o claro usando `.theme-dark` o `.theme-light`:

```css
.theme-dark {
  --color-primary: #ff00aa;
}
```

---

## Agregar un color

Puedes extender el sistema con colores personalizados. Define las variables en `:root` y crea una clase utilitaria:

```css
:root {
  --color-favorite: #69bb7b;
}

.color-favorite { color: var(--color-favorite); }
.bg-color-favorite { background: var(--color-favorite); }
.bd-color-favorite { border-color: var(--color-favorite); }
```

Luego usa el color en cualquier componente mediante clases:

```html
<span class="color-favorite">Texto favorito</span>
```

---

## Clases utilitarias

Disponibles para usar fuera de los componentes:

| Clase | Efecto |
|---|---|
| `.color-{name}` | `color` |
| `.bg-color-{name}` | `background` |
| `.bd-color-{name}` | `border-color` |

```html
<span class="bg-color-danger color-dark bd-color-warning">
  Alerta
</span>
```


