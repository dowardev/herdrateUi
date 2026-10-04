<script setup>
import { codeBlockMeta } from './meta/code-block'
import { useDesign } from '@dowardev/herdrate-vue'

// Global design line (sidebar select) drives which tab loads.
const line = useDesign()
</script>

# CodeBlock

A terminal-style code block with syntax-friendly display, line numbers, a copy button, and horizontal scroll for long lines.

<PlayHost :meta="codeBlockMeta" />

## Design lines

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

### Basic (`code` / `language`)

Minimal usage: pass `code` and `language`, with optional `color`.

<CodeBlock code="const x = 1;" language="typescript" />
<CodeBlock :code="'function greet(name: string) {\n  return `Hello ${name}`;\n}'" language="typescript" color="success" />
<CodeBlock code="docker compose up -d" language="bash" color="secondary" :showLines="false" />

```vue
<CodeBlock code="const x = 1;" language="typescript" />
<CodeBlock :code="'function greet(name: string) {\n  return `Hello ${name}`;\n}'" language="typescript" color="success" />
<CodeBlock code="docker compose up -d" language="bash" color="secondary" :showLines="false" />
```

### Language (`language`)

The `language` tag rendered for JavaScript and bash.

<CodeBlock code='console.log("hi")' language="javascript" />
<CodeBlock code="npm run dev" language="bash" />

```vue
<CodeBlock code='console.log("hi")' language="javascript" />
<CodeBlock code="npm run dev" language="bash" />
```

### Color (`color`)

Three `color` values for the border accent.

<CodeBlock code="const x = 1;" language="ts" color="primary" />
<CodeBlock code="const x = 1;" language="ts" color="success" />
<CodeBlock code="const x = 1;" language="ts" color="danger" />

```vue
<CodeBlock code="const x = 1;" language="ts" color="primary" />
<CodeBlock code="const x = 1;" language="ts" color="success" />
<CodeBlock code="const x = 1;" language="ts" color="danger" />
```

### Border (`border`)

The border shown and hidden with `border`.

<CodeBlock code="const x = 1;" language="ts" border />
<CodeBlock code="const x = 1;" language="ts" :border="false" />

```vue
<CodeBlock code="const x = 1;" language="ts" border />
<CodeBlock code="const x = 1;" language="ts" :border="false" />
```

### Line numbers (`showLines`)

The newline must be real: with the static attribute `code="...\n..."` the `\n` sequence arrives literally and everything collapses into one line. Use a bound `:code` so `\n` is an actual line break.

<CodeBlock :code="'line 1\nline 2\nline 3'" language="ts" showLines />
<CodeBlock :code="'line 1\nline 2\nline 3'" language="ts" :showLines="false" />

```vue
<CodeBlock :code="'line 1\nline 2\nline 3'" language="ts" showLines />
<CodeBlock :code="'line 1\nline 2\nline 3'" language="ts" :showLines="false" />
```

### Max height (`maxHeight`)

A long block that scrolls past `maxHeight`.

<ClientOnly>
  <CodeBlock :code="Array.from({ length: 30 }, (_, i) => `line ${i + 1}`).join('\n')" language="ts" maxHeight="200px" />
</ClientOnly>

```vue
<CodeBlock :code="Array.from({ length: 30 }, (_, i) => `line ${i + 1}`).join('\n')" language="ts" maxHeight="200px" />
```

## Props

### code

Source code string to display.

| Type | Default | Required |
|---|---|---|
| `string` | `''` | ❌ |
### language

Language label shown as a tag in the header.

| Type | Default | Required |
|---|---|---|
| `string` | `''` | ❌ |
### color

Border accent color of the code block.

| Type | Default | Required |
|---|---|---|
| `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `DEFAULT_COLOR` | ❌ |
### border

Toggle the outer border. Defaults to `true`.

| Type | Default | Required |
|---|---|---|
| `boolean` | `true` | ❌ |
### showLines

Toggle line numbers on the left gutter.

| Type | Default | Required |
|---|---|---|
| `boolean` | `true` | ❌ |
### maxHeight

Max height before the block becomes scrollable.

| Type | Default | Required |
|---|---|---|
| `string` | `'none'` | ❌ |
### formatter

Optional function to format code before syntax highlighting. Useful for auto-formatting with Prettier.

| Type | Default | Required |
|---|---|---|
| `(code: string, lang: string) => Promise\<string\> \| string` | — | ❌ |
## Auto-formatting with usePrettierFormatter

`usePrettierFormatter()` returns a formatting function that uses Prettier to format code according to the language.

First install Prettier (optional, only needed if you use the formatter):
```
npm i -D prettier
```

### Supported languages

Language tags accepted by `language`, each mapped to a Prettier parser.

| Language (`language`) | Prettier parser | Required plugin | Built-in |
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

Languages marked with ❌ require installing the corresponding Prettier plugin:
```
npm i -D prettier-plugin-sql prettier-plugin-java prettier-plugin-rust
```

The composable automatically detects installed plugins. If a parser is unavailable, it returns the original code unformatted.

## Slots

| Slot | Description |
|---|---|
| `default` | Alternative to `code` prop |

## CSS Custom Properties


<div class="table-wrapper">

| Token | Default | Description |
|---|---|---|
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Monospace font stack for code-like content (key labels, log lines, chips). |
| `--accent` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Accent color, mapped from the active semantic color. |
| `--bg` | from theme (`--ctp-latte-base` / `--ctp-mocha-base`) | Base background of the surface. |
| `--bg-panel` | from theme (`--ctp-latte-surface1` / `--ctp-mocha-surface1`) | Background of panel-like raised surfaces (cards, accordions). |
| `--border` | from theme (`--ctp-latte-surface0` / `--ctp-mocha-surface0`) | Outline and divider color for surfaces. |
| `--text-muted` | from theme (`--ctp-latte-subtext1` / `--ctp-mocha-subtext1`) | Secondary text for hints, annotations and disabled state. |
| `--color-primary` | from theme (`--ctp-latte-mauve` / `--ctp-mocha-mauve`) | Primary semantic color (mauve in Catppuccin). |
| `--color-secondary` | from theme (`--ctp-latte-lavender` / `--ctp-mocha-lavender`) | Secondary semantic color (lavender in Catppuccin). |
| `--color-tertiary` | from theme (`--ctp-latte-blue` / `--ctp-mocha-blue`) | Tertiary semantic color (blue in Catppuccin). |
| `--color-success` | from theme (`--ctp-latte-green` / `--ctp-mocha-green`) | Success semantic color (green in Catppuccin). |
| `--color-warning` | from theme (`--ctp-latte-yellow` / `--ctp-mocha-yellow`) | Warning semantic color (yellow in Catppuccin). |
| `--color-danger` | from theme (`--ctp-latte-red` / `--ctp-mocha-red`) | Danger semantic color (red in Catppuccin). |
| `--color-light` | from theme (`--ctp-latte-surface1` / `--ctp-mocha-rosewater`) | Light semantic color (lighter contrast tone). |
| `--color-medium` | from theme (`--ctp-latte-overlay0` / `--ctp-mocha-overlay2`) | Medium semantic color (mid-tone). |
| `--color-dark` | from theme (`--ctp-latte-text` / `--ctp-mocha-subtext1`) | Dark semantic color (high contrast text). |
| `--shadow` | `none` on TUIX, elevated on rubik | Elevation shadow for raised surfaces. |

</div>

Ver [Theming](../theming.md) para la convención completa.
