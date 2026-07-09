# Gutter

Terminal gutter/margin column for line numbers with optional breakpoint-style highlight markers.

## Usage

```vue
<Gutter :lines="20" :start="1" :highlight="[5, 10]" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `lines` | `number` | `1` | How many line numbers to show |
| `start` | `number` | `1` | Starting line number |
| `highlight` | `number[]` | `[]` | Line numbers to show `>` marker on |
| `color` | `Color` | `'primary'` | Marker color |
| `width` | `string` | `'3ch'` | Gutter width |