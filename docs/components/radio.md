# Radio

Terminal-styled radio button with `(o)` / `( )` display.

## Usage

```vue
<Radio v-model="selected" value="a" label="Option A" />
<Radio v-model="selected" value="b" label="Option B" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string` | `''` | Currently selected value |
| `value` | `string` | — | This radio's value (required) |
| `color` | `Color` | `'primary'` | Selected indicator color |
| `disabled` | `boolean` | `false` | Disable interaction |
| `label` | `string` | `''` | Text shown after brackets |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `string` | Emitted with the radio's value on click |
