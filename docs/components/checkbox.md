# Checkbox

Terminal-styled checkbox with `[x]` / `[ ]` display.

## Usage

```vue
<Checkbox v-model="checked" label="Enable feature" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `boolean` | `false` | Checked state |
| `color` | `Color` | `'primary'` | Check/bracket color |
| `disabled` | `boolean` | `false` | Disable interaction |
| `label` | `string` | `''` | Text shown after brackets |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `boolean` | Emitted on toggle |
