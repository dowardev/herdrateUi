<script setup>
import { tipBoxMeta } from './meta/tipbox'
</script>

# TipBox

Componente de notificación con icono, título y mensaje.

<PlayHost :meta="tipBoxMeta" />

## Demo

<TipBox color="primary" title="Información" message="Operación completada exitosamente." />

<TipBox color="warning" title="Advertencia" message="Revisa los permisos antes de continuar." />

<TipBox color="danger" title="Error crítico" message="No se pudo conectar al servidor." />

```vue
<TipBox color="primary" title="Información" message="Operación completada exitosamente." />
<TipBox color="warning" title="Advertencia" message="Revisa los permisos antes de continuar." />
<TipBox color="danger" title="Error crítico" message="No se pudo conectar al servidor." />
```

## Props

### color

Color semántico del borde e icono.

<div style="display: flex; flex-direction: column; gap: 0.5rem;">
  <TipBox color="primary" title="Info" message="Mensaje informativo" />
  <TipBox color="success" title="Éxito" message="Operación exitosa" />
  <TipBox color="warning" title="Aviso" message="Revisa esto" />
  <TipBox color="danger" title="Error" message="Algo salió mal" />
</div>

```vue
<TipBox color="primary" title="Info" message="Mensaje informativo" />
<TipBox color="success" title="Éxito" message="Operación exitosa" />
<TipBox color="warning" title="Aviso" message="Revisa esto" />
<TipBox color="danger" title="Error" message="Algo salió mal" />
```

### title

Título opcional en negrita.

```vue
<TipBox title="Importante" message="Lee esto" />
```

### message

Mensaje descriptivo opcional.

```vue
<TipBox title="Info" message="Este es el mensaje" />
```

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color semántico del borde e icono |
| `title` | `string` | `''` | Título opcional |
| `message` | `string` | `''` | Mensaje opcional |

## Slots

| Slot | Descripción |
|---|---|
| `default` | Contenido personalizado (reemplaza title/message) |

## Tokens usados

`--color-{name}`, `--bg-elevated`, `--bg`, `--text`, `--border`, `--font-mono`
