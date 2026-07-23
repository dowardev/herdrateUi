# Avatar

Avatar circular con inicial y color determinístico basado en hash FNV-1a del nombre.

## Demo

<div style="display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;">
  <Avatar name="Alice" />
  <Avatar name="Bob" size="lg" />
  <Avatar name="Charlie" size="sm" />
  <Avatar name="Diana" size="md" />
  <Avatar name="Eve" size="lg" />
</div>

## Código

```vue
<Avatar name="Alice" />
<Avatar name="Bob" size="lg" />
<Avatar name="Charlie" size="sm" />
```

## API

### Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `name` | `string` | — | Nombre para extraer inicial y hash |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Tamaño del avatar |

## Tokens usados

`--font-mono`, `--color-*`

## Demo Interactiva

<ComponentPlayground :meta="avatarMeta" />

<script setup>
import { avatarMeta } from './meta/avatar'
</script>
