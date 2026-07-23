# ScrollView

Terminal-themed scrollable container with custom scrollbar.

## Usage

```vue
<ScrollView maxHeight="200px">
  <p>Scrollable content here</p>
</ScrollView>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `Color` | `'primary'` | Scrollbar thumb hover color |
| `maxHeight` | `string` | `'300px'` | Maximum height before scrolling |
| `showBar` | `boolean` | `true` | Show custom styled scrollbar |

## Slots

| Slot | Description |
|------|-------------|
| `default` | Content to be scrolled |
