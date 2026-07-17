# CodeBlock

A terminal-style code block with syntax-friendly display, line numbers, and a copy button.

## Demo

<CodeBlock code="const x = 1;" language="typescript" />
<CodeBlock code="function greet(name: string) {\n  return `Hello ${name}`;\n}" language="typescript" color="success" />
<CodeBlock code="docker compose up -d" language="bash" color="secondary" :showLines="false" />

```vue
<CodeBlock code="const x = 1;" language="typescript" />
<CodeBlock code="function greet(name: string) {\n  return `Hello ${name}`;\n}" language="typescript" color="success" />
<CodeBlock code="docker compose up -d" language="bash" color="secondary" :showLines="false" />
```

## Props

### code

Source code string to display.

```vue
<CodeBlock code="const x = 1;" language="typescript" />
```

### language

Language label shown as a tag in the header.

<CodeBlock code='console.log("hi")' language="javascript" />
<CodeBlock code="npm run dev" language="bash" />

```vue
<CodeBlock code='console.log("hi")' language="javascript" />
<CodeBlock code="npm run dev" language="bash" />
```

### color

Border accent color of the code block.

<CodeBlock code="const x = 1;" language="ts" color="primary" />
<CodeBlock code="const x = 1;" language="ts" color="success" />
<CodeBlock code="const x = 1;" language="ts" color="danger" />

```vue
<CodeBlock code="const x = 1;" language="ts" color="primary" />
<CodeBlock code="const x = 1;" language="ts" color="success" />
<CodeBlock code="const x = 1;" language="ts" color="danger" />
```

### showLines

Toggle line numbers on the left gutter.

<CodeBlock code="line 1\nline 2\nline 3" language="ts" showLines />
<CodeBlock code="line 1\nline 2\nline 3" language="ts" :showLines="false" />

```vue
<CodeBlock code="line 1\nline 2\nline 3" language="ts" showLines />
<CodeBlock code="line 1\nline 2\nline 3" language="ts" :showLines="false" />
```

### maxHeight

Max height before the block becomes scrollable.

```vue
<CodeBlock code="..." language="ts" maxHeight="200px" />
```

### formatter

Optional function to format code before syntax highlighting. Useful for auto-formatting with Prettier.

```vue
<script setup>
import { usePrettierFormatter } from '@herdrate/vue'

const formatter = usePrettierFormatter()
</script>

<template>
  <CodeBlock code="const  x  =   1" language="typescript" :formatter="formatter" />
</template>
```

The `formatter` receives `(code: string, language: string)` and can return a `string` or `Promise<string>`.

## Auto-formateo con usePrettierFormatter

`usePrettierFormatter()` retorna una función formateadora que usa Prettier para formatear código según el lenguaje.

Primero instala Prettier (opcional, necesario solo si usas el formateador):
```
npm i -D prettier
```

### Lenguajes soportados

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

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `code` | `string` | `''` | Source code to display |
| `language` | `string` | `''` | Language label shown as tag |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `DEFAULT_COLOR` | Border accent color |
| `showLines` | `boolean` | `true` | Show line numbers |
| `maxHeight` | `string` | `'none'` | Max height before scroll |
| `formatter` | `(code: string, lang: string) => Promise\<string\> \| string` | — | Optional formatter function |

## Slots

| Slot | Description |
|---|---|
| `default` | Alternative to `code` prop |

## Tokens usados

`--font-mono`, `--bg`, `--bg-panel`, `--border`, `--text`, `--text-muted`, `--color-*`

## Demo Interactiva

<ComponentPlayground :meta="codeBlockMeta" />

<script setup>
import { codeBlockMeta } from './meta/code-block'
</script>
