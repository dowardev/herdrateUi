# CodeBlock

A terminal-style code block with syntax-friendly display, line numbers, and a copy button.

## Usage

```vue
<CodeBlock code="const x = 1;" language="typescript" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `code` | `string` | `''` | Source code to display |
| `language` | `string` | `''` | Language label shown as tag |
| `color` | `Color` | `DEFAULT_COLOR` | Border accent color |
| `showLines` | `boolean` | `true` | Show line numbers |
| `maxHeight` | `string` | `'none'` | Max height before scroll |

## Slots

| Slot | Description |
|------|-------------|
| `default` | Alternative to `code` prop |
