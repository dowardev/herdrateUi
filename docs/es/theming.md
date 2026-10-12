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

## ¿Cuándo cambiar una sola cosa vs todo el tema?

**Cambiá una sola cosa** cuando querés ajustar un detalle puntual:

```css
.mi-seccion {
  --bg-elevated: #1e1e2e;   /* sólo cambia los modales */
}
```

Eso toca una variable. Sólo cambia lo que la usa; el resto sigue igual.

**Cambiá todo el tema** cuando querés un look nuevo de raíz (ej. modo oscuro). Override-ás las variables en `:root`:

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

Eso reemplaza el tema entero de tu app de una.

## Cómo se aplica por componente

Cada página de componente tiene su propia sección `## CSS Custom Properties` con la tabla de los tokens que ese componente en particular usa, su default real y una descripción corta. La capa es la misma; la lista es por componente.

## Convenciones de la API (props y slots)

Cada área de contenido de un componente sigue uno de tres patrones, elegidos según lo que tenga sentido semánticamente. La regla ayuda a que la API sea predecible: si conocés el patrón, sabés cómo invocar el componente.

### 1. Contenido reemplazable (prop + slot, slot gana)

Áreas como el título, descripción, cabecera o pie de un card que aceptan texto plano como valor por defecto y markup rico cuando hace falta.

```vue
<h3 class="card-title">
  <slot name="title">{{ title }}</slot>
</h3>
```

Uso:

```vue
<Card title="Plano" />                                  <!-- prop solo -->
<Card><template #title>★ <em>rico</em></template></Card> <!-- slot solo -->
<Card title="Caí"><template #title>Rico</template></Card> <!-- slot pisa al prop -->
```

**Regla**: el slot gana. El prop es el fallback que se renderiza cuando el slot está vacío.

**Componentes que usan este patrón**: `Card` (`title`, `description`, `header`, `footer`), `Modal` (`title`, `footer`), `Box` (`header`, `footer`), `Panel` (`header`, `footer`), `TreeNode` (`label`), `StatusBar` (`info`).

### 2. Contenido opcional (slot solo, render condicional)

Áreas como un footer de acciones o un bloque extra de cabecera que no tienen un valor por defecto razonable — si no hay slot, el bloque no se renderiza.

```vue
<footer v-if="$slots.footer" class="card-foot">
  <slot name="footer" />
</footer>
```

Uso:

```vue
<Card><template #footer><Button>OK</Button></template></Card>
<!-- sin slot, el bloque no aparece -->
```

**Componentes que usan este patrón**: por ahora ninguno en la versión actual — todas las áreas que eran slot-only migraron al patrón 1 en LBDS-285. Si en el futuro agregás una nueva área, usá este patrón cuando no haya un valor por defecto razonable.

### 3. Visual / estilo (prop solo)

Colores, sombras, bordes, variantes de tipografía. Los slots no tienen sentido acá porque querés aplicar un valor escalar (un enum, un boolean), no markup.

```vue
<button :class="`color-${color}`">Click</button>
```

Uso:

```vue
<Button color="primary" fill="solid" :border="false" />
```

**Regla**: si lo único que tiene sentido es un valor escalar, es prop-only. No agregues slot.

**Componentes que usan este patrón**: todos los booleanos/enums visuales (`color`, `border`, `shadow`, `design`, `fill`, `icon`, `size`, etc.) en cualquier componente.

## Cómo elegir entre los tres

- **¿Tiene sentido un valor textual por defecto que el usuario escriba en una línea?** → Patrón 1 (prop + slot).
- **¿No hay un default razonable y el área es puramente "extra"?** → Patrón 2 (slot solo).
- **¿Es un valor escalar que no es texto?** → Patrón 3 (prop solo).
