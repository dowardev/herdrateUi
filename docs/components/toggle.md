# Toggle

Terminal-styled toggle switch with `[ON]` / `[OFF]` display.

## Usage

```vue
<Toggle v-model="enabled" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `boolean` | `false` | Toggle state |
| `color` | `Color` | `'primary'` | Toggle color |
| `disabled` | `boolean` | `false` | Disable interaction |
| `labels` | `{ on: string, off: string }` | `{ on: 'ON', off: 'OFF' }` | Custom labels |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `boolean` | Emitted on toggle |
