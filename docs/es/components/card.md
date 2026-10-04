<script setup>
import { cardMeta } from './meta/card'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# Card

Una tarjeta de contenido flexible con **dos líneas de diseño**:

<PlayHost :meta="cardMeta" />

## Líneas de diseño

<style scoped>
.design-lines-demo .tabs-list {
  margin-bottom: 1rem;
}
</style>
<div class="design-lines-demo">
<Tabs :defaultValue="line" :key="line">
  <TabsList>
    <Tab value="tuix">TUIX</Tab>
    <Tab value="rubik">Rubik</Tab>
  </TabsList>
  <TabPanel value="tuix">
    <Card
      number="// 01"
      category="HERDRATE"
      title="Panel de control"
      description="Métricas en tiempo real y vista general del estado del sistema."
      :tags="['Vue.js', 'TypeScript', 'Tailwind']"
      design="tuix"
    />
  </TabPanel>
  <TabPanel value="rubik">
    <Card
      number="// 01"
      category="HERDRATE"
      title="Panel de control"
      description="Métricas en tiempo real y vista general del estado del sistema."
      :tags="['Vue.js', 'TypeScript', 'Tailwind']"
      design="rubik"
    />
  </TabPanel>
</Tabs>
</div>

```vue
<Tabs defaultValue="tuix">
  <TabsList>
    <Tab value="tuix">TUIX</Tab>
    <Tab value="rubik">Rubik</Tab>
  </TabsList>
  <TabPanel value="tuix">
    <Card
      number="// 01"
      category="HERDRATE"
      title="Panel de control"
      description="Métricas en tiempo real y vista general del estado del sistema."
      :tags="['Vue.js', 'TypeScript', 'Tailwind']"
      design="tuix"
    />
  </TabPanel>
  <TabPanel value="rubik">
    <Card
      number="// 01"
      category="HERDRATE"
      title="Panel de control"
      description="Métricas en tiempo real y vista general del estado del sistema."
      :tags="['Vue.js', 'TypeScript', 'Tailwind']"
      design="rubik"
    />
  </TabPanel>
</Tabs>
```

## Demo

### Título y encabezado

Cómo se llena la cabecera de la tarjeta: el prop `title` más los slots `title` y `header`.

#### Título (`title`)

Encabezado de texto plano de la tarjeta.

<Card title="Perfil de usuario" description="Gestiona la configuración y preferencias de tu cuenta." />

```vue
<Card title="Perfil de usuario" description="Gestiona la configuración y preferencias de tu cuenta." />
```

#### Título enriquecido (slot `title`)

Reemplaza el texto del encabezado con markup enriquecido.

<Card description="Esta tarjeta usa un slot de título personalizado.">
  <template #title>
    <strong>Título</strong> <span style="color:var(--primary)">Personalizado</span>
  </template>
</Card>

```vue
<Card description="Esta tarjeta usa un slot de título personalizado.">
  <template #title>
    <strong>Título</strong> <span style="color:var(--primary)">Personalizado</span>
  </template>
</Card>
```

#### Header (slot `header`)

Contenido extra del header (p. ej. badges de estado).

<Card title="Estado del servidor" description="Todos los sistemas operativos.">
  <template #header>
    <span style="color:var(--success)">●</span> En vivo
  </template>
</Card>

```vue
<Card title="Estado del servidor" description="Todos los sistemas operativos.">
  <template #header>
    <span style="color:var(--success)">●</span> En vivo
  </template>
</Card>
```

#### Header (`header`)

Contenido de texto plano para el header mediante el prop `header`. El slot gana si se proporcionan ambos.

<Card title="Estado del servidor" description="Todos los sistemas operativos." header="● En vivo" />

```vue
<Card title="Estado del servidor" description="Todos los sistemas operativos." header="● En vivo" />
```

### Metadatos

Etiquetas pequeñas que identifican la tarjeta: índice, categoría y tags de tecnología.

#### Número (`number`)

Índice en monospace renderizado en la cabecera de la tarjeta (p. ej. `// 03`).

<Card number="// 03" title="Configuración" description="Configura el comportamiento de la aplicación." />

```vue
<Card number="// 03" title="Configuración" description="Configura el comportamiento de la aplicación." />
```

#### Categoría (`category`)

Etiqueta de categoría en mayúsculas, mostrada junto al índice.

<Card category="API" title="Endpoints" description="Documentación de endpoints REST y GraphQL." />

```vue
<Card category="API" title="Endpoints" description="Documentación de endpoints REST y GraphQL." />
```

#### Tags (`tags`)

Lista de chips de tecnologías, renderizada debajo de la descripción.

<Card
  title="Proyecto Alpha"
  description="Plataforma SaaS multi-tenant con colaboración en tiempo real."
  :tags="['Vue 3', 'Pinia', 'PostgreSQL', 'Docker']"
/>

```vue
<Card
  title="Proyecto Alpha"
  description="Plataforma SaaS multi-tenant con colaboración en tiempo real."
  :tags="['Vue 3', 'Pinia', 'PostgreSQL', 'Docker']"
/>
```

### Contenido rico (slot `default`)

Sobrescribe la descripción con contenido rico.

<Card title="Contenido Rico">
  <p>Esta descripción soporta <strong>HTML</strong> y <em>componentes Vue</em>.</p>
  <ul>
    <li>Elemento uno</li>
    <li>Elemento dos</li>
    <li>Elemento tres</li>
  </ul>
</Card>

```vue
<Card title="Contenido Rico">
  <p>Esta descripción soporta <strong>HTML</strong> y <em>componentes Vue</em>.</p>
  <ul>
    <li>Elemento uno</li>
    <li>Elemento dos</li>
    <li>Elemento tres</li>
  </ul>
</Card>
```

### Línea de diseño (`design`)

La misma tarjeta en ambas líneas: tuix (plano, afilado) y rubik (esquina recortada, elevación suave).

<Card title="Tarjeta TUIX" description="Esquinas afiladas, monospace, superficies planas." design="tuix" />
<Card title="Tarjeta Rubik" description="Esquinas recortadas, barras de tinta, restricción HUD." design="rubik" />

```vue
<Card title="Tarjeta TUIX" description="Esquinas afiladas, monospace, superficies planas." design="tuix" />
<Card title="Tarjeta Rubik" description="Esquinas recortadas, barras de tinta, restricción HUD." design="rubik" />
```

### Apariencia

Flags booleanos que cambian el aspecto de la superficie de la tarjeta.

#### Borde (`border`)

Contorno alrededor de la tarjeta (activo por defecto).

<Card title="Con borde" description="El borde es visible por defecto." border />
<Card title="Sin borde" description="Tarjeta limpia sin contorno." :border="false" />

```vue
<Card title="Con borde" description="El borde es visible por defecto." border />
<Card title="Sin borde" description="Tarjeta limpia sin contorno." :border="false" />
```

#### Sombra (`shadow`)

`shadow` aplica `var(--shadow)`. tuix define `--shadow: none` (línea plana), así que el prop solo es visible en rubik. Las dos tarjetas de abajo están fijadas a rubik — la única diferencia entre ellas es la sombra.

<Card title="Con sombra" description="Prop shadow explícito." design="rubik" shadow />
<Card title="Sin sombra" description="Default (shadow=false)." design="rubik" :shadow="false" />

```vue
<Card title="Con sombra" description="Prop shadow explícito." design="rubik" shadow />
<Card title="Sin sombra" description="Default (shadow=false)." design="rubik" :shadow="false" />
```

#### Flecha (`arrow`)

Afordancia de flecha en el borde derecho (activa por defecto).

<Card title="Con flecha" description="El indicador de flecha se muestra por defecto." arrow />
<Card title="Sin flecha" description="Borde derecho limpio." :arrow="false" />

```vue
<Card title="Con flecha" description="El indicador de flecha se muestra por defecto." arrow />
<Card title="Sin flecha" description="Borde derecho limpio." :arrow="false" />
```

### Footer (slot `footer`)

Contenido extra del footer (p. ej. botones de acción).

<Card title="Confirmar acción" description="¿Estás seguro de que quieres continuar?">
  <template #footer>
    <ButtonTui color="danger" fill="outline" @click="() => {}">Cancelar</ButtonTui>
    <ButtonTui color="primary" @click="() => {}">Confirmar</ButtonTui>
  </template>
</Card>

```vue
<script setup>
import { ButtonTui } from '@dowardev/herdrate-vue'
</script>

<Card title="Confirmar acción" description="¿Estás seguro de que quieres continuar?">
  <template #footer>
    <ButtonTui color="danger" fill="outline" @click="() => {}">Cancelar</ButtonTui>
    <ButtonTui color="primary" @click="() => {}">Confirmar</ButtonTui>
  </template>
</Card>
```

### Footer (`footer`)

Contenido de texto plano para el footer mediante el prop `footer`. El slot gana si se proporcionan ambos.

<Card title="Último commit" description="Agrega el nuevo prop y actualiza la documentación." footer="actualizado hace 2m" />

```vue
<Card title="Último commit" description="Agrega el nuevo prop y actualiza la documentación." footer="actualizado hace 2m" />
```

### Evento hover (`hover`)

Se emite cuando el puntero entra en la tarjeta (`mouseenter`). El consumidor decide qué hacer (p. ej. mostrar el borde).

<ClientOnly>
  <Card
    title="Pasa el ratón"
    description="Abre la consola del navegador para ver el evento hover."
    :border="false"
    @hover="() => console.log('¡Tarjeta con hover!')"
  />
</ClientOnly>

```vue
<Card
  title="Pasa el ratón"
  description="Abre la consola del navegador para ver el evento hover."
  :border="false"
  @hover="() => console.log('¡Tarjeta con hover!')"
/>
```
## Props

### title

Título de la tarjeta (requerido).

| Tipo | Por defecto | Requerido |
|---|---|---|
| `string` | — | ✅ |

### description

Contenido de texto plano del cuerpo. Lo pisa el slot por defecto si se proporciona.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `string` | — | ❌ |

### header

Contenido de texto plano para el header, mostrado antes del título. Lo pisa el slot `header` si se proporciona.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `string` | — | ❌ |

### footer

Contenido de texto plano para el footer, mostrado al final. Lo pisa el slot `footer` si se proporciona.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `string` | — | ❌ |

### number

Índice en monospace (p. ej. `// 03`).

| Tipo | Por defecto | Requerido |
|---|---|---|
| `string` | — | ❌ |

### category

Etiqueta en mayúsculas para categorización.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `string` | — | ❌ |

### tags

Chips de tecnologías mostrados debajo de la descripción.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `string[]` | — | ❌ |

### design

La línea de diseño: `tuix` (esquinas afiladas, plano) o `rubik` (esquinas recortadas, restricción HUD).

| Tipo | Por defecto | Requerido |
|---|---|---|
| `'tuix' \| 'rubik'` | inherit | ❌ |

### border

Muestra u oculta el borde.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `boolean` | `true` | ❌ |

### shadow

Sombra de elevación — plana (`ninguno`) en tuix —valor CSS `none`—, flotante en rubik.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `boolean` | `false` | ❌ |

### arrow

Muestra el indicador de flecha en el lado derecho.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `boolean` | `true` | ❌ |
## Slots

| Slot | Descripción |
|---|---|
| `header` | Contenido extra de cabecera |
| `title` | Sobrescribe el título |
| `default` | Sobrescribe la descripción |
| `footer` | Contenido extra de pie |
## Eventos

| Evento | Payload | Descripción |
|---|---|---|
| `hover` | `void` | Se emite al entrar el puntero (`mouseenter`); el consumidor decide el comportamiento |
## CSS Custom Properties


<div class="table-wrapper">

| Token | Por defecto | Descripción |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Stack monoespaciado para contenido tipo código (etiquetas, logs, chips). |
| `--accent` | desde el tema (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color de acento, mapeado desde el color semántico activo. |
| `--bg` | desde el tema (`--ctp-latte-base` / `--ctp-mocha-base`) | Fondo base de la superficie. |
| `--bg-alt` | desde el tema (`--ctp-latte-mantle` / `--ctp-mocha-mantle`) | Fondo alternativo (la capa por debajo del fondo base). |
| `--border` | desde el tema (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Color de contorno y divisor de superficies. |
| `--text` | desde el tema (`--ctp-latte-text` / `--ctp-mocha-text`) | Color de texto principal dentro del componente. |
| `--text-muted` | desde el tema (`--ctp-latte-subtext1` / `--ctp-mocha-subtext1`) | Texto secundario para pistas, anotaciones y estado deshabilitado. |
| `--cp-ease` | `cubic-bezier(.4, 0, .2, 1)` | Curva de easing por defecto para transiciones. |
| `--shadow` | `none` on TUIX, elevated on rubik | Sombra de elevación para superficies elevadas. |
| `--shadow-hover` | `var(--shadow-hover, var(--shadow))` | Sombra en estado hover/active. |

</div>

Ver [Theming](../theming.md) para la convención completa.
