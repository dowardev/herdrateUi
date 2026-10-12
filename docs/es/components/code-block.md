<script setup>
import { codeBlockMeta } from './meta/code-block'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# CodeBlock

A terminal-style code block with syntax-friendly display, line numbers, a copy button, and horizontal scroll for long lines.

<PlayHost :meta="codeBlockMeta" />

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
    <CodeBlock code="const x = 1;" language="ts" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <CodeBlock code="const x = 1;" language="ts" design="rubik" />
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
    <CodeBlock code="const x = 1;" language="ts" design="tuix" />
  </TabPanel>
  <TabPanel value="rubik">
    <CodeBlock code="const x = 1;" language="ts" design="rubik" />
  </TabPanel>
</Tabs>
```


## Demo

### Básico (`code` / `language`)

Uso mínimo: se pasa `code` y `language`, con `color` opcional.

<CodeBlock code="const x = 1;" language="typescript" />
<CodeBlock :code="'function greet(name: string) {\n  return `Hello ${name}`;\n}'" language="typescript" color="success" />
<CodeBlock code="docker compose up -d" language="bash" color="secondary" :showLines="false" />

```vue
<CodeBlock code="const x = 1;" language="typescript" />
<CodeBlock :code="'function greet(name: string) {\n  return `Hello ${name}`;\n}'" language="typescript" color="success" />
<CodeBlock code="docker compose up -d" language="bash" color="secondary" :showLines="false" />
```

### Lenguaje (`language`)

La etiqueta `language` renderizada para JavaScript y bash.

<CodeBlock code='console.log("hi")' language="javascript" />
<CodeBlock code="npm run dev" language="bash" />

```vue
<CodeBlock code='console.log("hi")' language="javascript" />
<CodeBlock code="npm run dev" language="bash" />
```

### Color (`color`)

Tres valores de `color` para el acento del borde.

<CodeBlock code="const x = 1;" language="ts" color="primary" />
<CodeBlock code="const x = 1;" language="ts" color="success" />
<CodeBlock code="const x = 1;" language="ts" color="danger" />

```vue
<CodeBlock code="const x = 1;" language="ts" color="primary" />
<CodeBlock code="const x = 1;" language="ts" color="success" />
<CodeBlock code="const x = 1;" language="ts" color="danger" />
```

### Borde (`border`)

El borde mostrado y oculto con `border`.

<CodeBlock code="const x = 1;" language="ts" border />
<CodeBlock code="const x = 1;" language="ts" :border="false" />

```vue
<CodeBlock code="const x = 1;" language="ts" border />
<CodeBlock code="const x = 1;" language="ts" :border="false" />
```

### Números de línea (`showLines`)

El salto de línea debe ser real: en atributo estático `code="...\n..."` la secuencia `\n` llega literal y todo colapsa en una línea. Usá `:code` bindeado para que `\n` sea un salto de verdad.

<CodeBlock :code="'line 1\nline 2\nline 3'" language="ts" showLines />
<CodeBlock :code="'line 1\nline 2\nline 3'" language="ts" :showLines="false" />

```vue
<CodeBlock :code="'line 1\nline 2\nline 3'" language="ts" showLines />
<CodeBlock :code="'line 1\nline 2\nline 3'" language="ts" :showLines="false" />
```

### Altura máxima (`maxHeight`)

Un bloque largo que scrollea al superar `maxHeight`.

<ClientOnly>
  <CodeBlock :code="Array.from({ length: 30 }, (_, i) => `line ${i + 1}`).join('\n')" language="ts" maxHeight="200px" />
</ClientOnly>

```vue
<CodeBlock :code="Array.from({ length: 30 }, (_, i) => `line ${i + 1}`).join('\n')" language="ts" maxHeight="200px" />
```

### Preload (`preload`)

Saltea la llamada a `formatter` (y la carga asíncrona que dispara) poniendo `preload` en `false`. Útil para snippets cortos donde cargar `prettier/standalone` no vale la pena. Por defecto: `true`.

<CodeBlock code="const x = 1;" language="ts" :preload="false" />
<CodeBlock code="const x = 1;" language="ts" :preload="true" />

```vue
<CodeBlock code="const x = 1;" language="ts" :preload="false" />
<CodeBlock code="const x = 1;" language="ts" :preload="true" />
```

## Props

### code

Source code string to display.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `string` | `''` | ❌ |
### language

Language label shown as a tag in the header.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `string` | `''` | ❌ |
### color

Border accent color of the code block.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `DEFAULT_COLOR` | ❌ |
### border

Toggle the outer border. Defaults to `true`.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `boolean` | `true` | ❌ |
### showLines

Toggle line numbers on the left gutter.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `boolean` | `true` | ❌ |
### maxHeight

Max height before the block becomes scrollable.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `string` | `'none'` | ❌ |
### formatter

Optional function to format code before syntax highlighting. Useful for auto-formatting with Prettier.

| Tipo | Por defecto | Requerido |
|---|---|---|
| `(code: string, lang: string) => Promise\<string\> \| string` | — | ❌ |
### preload

Run `formatter` before highlighting. Defaults to `true`; set to `false` to skip the formatter entirely (no Prettier load).

| Tipo | Por defecto | Requerido |
|---|---|---|
| `boolean` | `true` | ❌ |
## Auto-formateo con usePrettierFormatter

`usePrettierFormatter()` retorna una función formateadora que usa Prettier para formatear código según el lenguaje.

Primero instala Prettier (opcional, necesario solo si usas el formateador):
```
npm i -D prettier
```

### Lenguajes soportados

Etiquetas de lenguaje aceptadas por `language`, cada una mapeada a un parser de Prettier.

| Lenguaje (`language`) | Parser Prettier | Plugin requerido | Built-in |
|---|---|---|---|
| `javascript` / `js` / `jsx` / `mjs` / `cjs` | `babel` | — | ✅ |
| `typescript` / `ts` / `tsx` / `mts` / `cts` | `typescript` | — | ✅ |
| `json` / `jsonc` / `json5` | `json` / `jsonc` / `json5` | — | ✅ |
| `css` / `scss` / `less` | `css` / `scss` / `less` | — | ✅ |
| `html` / `vue` / `angular` | `html` | — | ✅ |
| `markdown` / `md` / `mdx` | `markdown` | — | ✅ |
| `yaml` / `yml` | `yaml` | — | ✅ |
| `graphql` / `gql` | `graphql` | — | ✅ |
| `flow` | `flow` | — | ✅ |
| `sql` | — | `prettier-plugin-sql` | ❌ |
| `python` | — | `@prettier/plugin-python` | ❌ |
| `ruby` | — | `@prettier/plugin-ruby` | ❌ |
| `java` | — | `prettier-plugin-java` | ❌ |
| `rust` | — | `prettier-plugin-rust` | ❌ |
| `toml` | — | `prettier-plugin-toml` | ❌ |
| `bash` / `sh` / `shell` / `zsh` | — | `prettier-plugin-sh` | ❌ |
| `csharp` / `cs` | — | `prettier-plugin-csharp` | ❌ |
| `xml` | — | `@prettier/plugin-xml` | ❌ |

Los lenguajes marcados con ❌ requieren instalar el plugin Prettier correspondiente:
```
npm i -D prettier-plugin-sql prettier-plugin-java prettier-plugin-rust
```

El composable detecta automáticamente los plugins instalados. Si un parser no está disponible, devuelve el código original sin formatear.

## Slots

| Slot | Descripción |
|---|---|
| `default` | Alternative to `code` prop |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Por defecto | Descripción |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Stack monoespaciado para contenido tipo código (etiquetas, logs, chips). |
| `--accent` | desde el tema (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color de acento, mapeado desde el color semántico activo. |
| `--bg` | desde el tema (`--ctp-latte-base` / `--ctp-mocha-base`) | Fondo base de la superficie. |
| `--bg-panel` | desde el tema (`--ctp-latte-surface1` / `--ctp-mocha-surface1`) | Fondo de superficies tipo panel (cards, accordions). |
| `--border` | desde el tema (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Color de contorno y divisor de superficies. |
| `--text-muted` | desde el tema (`--ctp-latte-subtext1` / `--ctp-mocha-subtext1`) | Texto secundario para pistas, anotaciones y estado deshabilitado. |
| `--color-primary` | desde el tema (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Color semántico primario (mauve en Catppuccin). |
| `--color-secondary` | desde el tema (`--ctp-latte-lavender` / `--ctp-mocha-lavender`) | Color semántico secundario (lavender en Catppuccin). |
| `--color-tertiary` | desde el tema (`--ctp-latte-blue` / `--ctp-mocha-blue`) | Color semántico terciario (blue en Catppuccin). |
| `--color-success` | desde el tema (`--ctp-latte-green` / `--ctp-mocha-green`) | Color semántico de éxito (green en Catppuccin). |
| `--color-warning` | desde el tema (`--ctp-latte-yellow` / `--ctp-mocha-yellow`) | Color semántico de advertencia (yellow en Catppuccin). |
| `--color-danger` | desde el tema (`--ctp-latte-red` / `--ctp-mocha-red`) | Color semántico de peligro (red en Catppuccin). |
| `--color-light` | desde el tema (`--ctp-latte-surface1` / `--ctp-mocha-rosewater`) | Color semántico claro (tono de contraste más claro). |
| `--color-medium` | desde el tema (`--ctp-latte-overlay0` / `--ctp-mocha-overlay2`) | Color semántico medio (tono intermedio). |
| `--color-dark` | desde el tema (`--ctp-latte-text` / `--ctp-mocha-subtext1`) | Color semántico oscuro (texto de alto contraste). |
| `--shadow` | `none` on TUIX, elevated on rubik | Sombra de elevación para superficies elevadas. |

</div>

Ver [Theming](../theming.md) para la convención completa.
