# TipBox

Componente de notificación con icono, título y mensaje.

## Demo

<TipBox color="primary" title="Información" message="Operación completada exitosamente." />

<TipBox color="warning" title="Advertencia" message="Revisa los permisos antes de continuar." />

<TipBox color="danger" title="Error crítico" message="No se pudo conectar al servidor." />

## Código

```vue
<TipBox color="primary" title="Info" message="Mensaje informativo." />
<TipBox color="warning" title="Advertencia" message="Revisa esto." />
<TipBox color="danger" title="Error" message="Algo salió mal." />
```

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|---|
| `color` | [`Color`](/color) | `'primary'` | Color semántico del borde e icono |
| `title` | `string` | `''` | Título opcional |
| `message` | `string` | `''` | Mensaje opcional |

## Slots

| Slot | Descripción |
|---|---|
| `default` | Contenido personalizado (reemplaza title/message) |

## Tokens usados

`--color-{name}`, `--bg-elevated`, `--bg`, `--text`, `--border`, `--font-mono`

## Demo Interactiva

<ComponentPlayground :meta="tipBoxMeta" />

<script setup>
import { tipBoxMeta } from './meta/tipbox'
</script>
