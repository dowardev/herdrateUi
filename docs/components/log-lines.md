# LogLines

Terminal log viewer with level-based coloring.

## Usage

```vue
<LogLines :lines="logLines" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `lines` | `Array<{text: string, level?: 'info' \| 'warn' \| 'error' \| 'debug'}>` | `[]` | Log lines to display |
| `max` | `number` | `100` | Max visible lines (truncates oldest) |
| `color` | `Color` | `'primary'` | Component color |
| `timestamps` | `boolean` | `false` | Prefix each line with `[HH:MM:SS]` |
