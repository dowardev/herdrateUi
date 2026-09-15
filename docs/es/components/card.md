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

## Props

### title

Título de la tarjeta (requerido).

<Card title="Perfil de usuario" description="Gestiona la configuración y preferencias de tu cuenta." />

```vue
<Card title="Perfil de usuario" description="Gestiona la configuración y preferencias de tu cuenta." />
```

### number

Índice en monospace (p. ej. `// 03`).

<Card number="// 03" title="Configuración" description="Configura el comportamiento de la aplicación." />

```vue
<Card number="// 03" title="Configuración" description="Configura el comportamiento de la aplicación." />
```

### category

Etiqueta en mayúsculas para categorización.

<Card category="API" title="Endpoints" description="Documentación de endpoints REST y GraphQL." />

```vue
<Card category="API" title="Endpoints" description="Documentación de endpoints REST y GraphQL." />
```

### tags

Chips de tecnologías mostrados debajo de la descripción.

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

### design

La línea de diseño: `tuix` (esquinas afiladas, plano) o `rubik` (esquinas recortadas, restricción HUD).

<Card title="Tarjeta TUIX" description="Esquinas afiladas, monospace, superficies planas." design="tuix" />
<Card title="Tarjeta Rubik" description="Esquinas recortadas, barras de tinta, restricción HUD." design="rubik" />

```vue
<Card title="Tarjeta TUIX" description="Esquinas afiladas, monospace, superficies planas." design="tuix" />
<Card title="Tarjeta Rubik" description="Esquinas recortadas, barras de tinta, restricción HUD." design="rubik" />
```

### border

Muestra u oculta el borde.

<Card title="Con borde" description="El borde es visible por defecto." border />
<Card title="Sin borde" description="Tarjeta limpia sin contorno." :border="false" />

```vue
<Card title="Con borde" description="El borde es visible por defecto." border />
<Card title="Sin borde" description="Tarjeta limpia sin contorno." :border="false" />
```

### shadow

Sombra de elevación — plana (`none`) en tuix, flotante en rubik.

<Card title="Sin sombra" description="Apariencia plana (tuix por defecto)." design="tuix" />
<Card title="Con sombra" description="Apariencia elevada en rubik." design="rubik" shadow />

```vue
<Card title="Sin sombra" description="Apariencia plana (tuix por defecto)." design="tuix" />
<Card title="Con sombra" description="Apariencia elevada en rubik." design="rubik" shadow />
```

### arrow

Muestra el indicador de flecha en el lado derecho.

<Card title="Con flecha" description="El indicador de flecha se muestra por defecto." arrow />
<Card title="Sin flecha" description="Borde derecho limpio." :arrow="false" />

```vue
<Card title="Con flecha" description="El indicador de flecha se muestra por defecto." arrow />
<Card title="Sin flecha" description="Borde derecho limpio." :arrow="false" />
```

## Slots

### header

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

### title

Sobrescribe el título con contenido personalizado.

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

### default

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

### footer

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

## Eventos

### hover

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

## API

| Prop | Tipo | Default | Descripción | Diseños |
|---|---|---|---|---|
| `arrow` | `boolean` | `true` | muestra el indicador de flecha | Ambos |
| `border` | `boolean` | `true` | muestra/oculta el borde | Ambos |
| `category` | `string` | — | etiqueta en mayúsculas | Ambos |
| `description` | `string` | — | texto del cuerpo | Ambos |
| `design` | `'tuix' \| 'rubik'` | inherit | la línea de diseño | Ambos |
| `number` | `string` | — | índice monospace (p. ej. `// 03`) | Ambos |
| `shadow` | `boolean` | `false` | sombra de elevación — plana (`none`) en tuix, flotante en rubik | Ambos |
| `tags` | `string[]` | — | chips de tecnologías | Ambos |
| `title` | `string` | — | título de la tarjeta (requerido) | Ambos |

| Evento | Descripción |
|---|---|
| `hover` | Se emite al entrar el puntero (`mouseenter`). El consumidor maneja el comportamiento al hover. |

| Slot | Descripción |
|---|---|
| `header` | Contenido extra del header |
| `title` | Reemplaza el título |
| `default` | Reemplaza la descripción |
| `footer` | Contenido extra del footer |

## Tokens usados

`--font-mono`, `--color-*`, `--bg`, `--border`, `--fill-*`