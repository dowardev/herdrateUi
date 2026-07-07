# TipBox

Componente de notificación con icono, título y mensaje.

## Demo

<TipBox variant="info" title="Información" message="Operación completada exitosamente." />

<TipBox variant="warn" title="Advertencia" message="Revisa los permisos antes de continuar." />

<TipBox variant="error" title="Error crítico" message="No se pudo conectar al servidor." />

## Código

```vue
<TipBox variant="info" title="Info" message="Mensaje informativo." />
<TipBox variant="warn" title="Advertencia" message="Revisa esto." />
<TipBox variant="error" title="Error" message="Algo salió mal." />
```

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `variant` | `'info' \| 'warn' \| 'error'` | `'info'` | Tipo de notificación |
| `title` | `string` | `''` | Título opcional |
| `message` | `string` | `''` | Mensaje opcional |

## Slots

| Slot | Descripción |
|---|---|
| `default` | Contenido personalizado (reemplaza title/message) |

## Tokens usados

`--accent`, `--warn`, `--error`, `--bg-elevated`, `--bg`, `--text`, `--border`, `--font-mono`
