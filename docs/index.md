# Herdrate Vue UI Library

Librería de componentes Vue 3 con tema **Catppuccin** y estética CLI/terminal.

## Componentes

| Componente | Descripción |
|---|---|
| [Panel](./components/panel) | Contenedor con header, body, footer y divisor vertical |
| [Divider](./components/divider) | Divisor horizontal/vertical estilo terminal |
| [Badge](./components/badge) | Etiqueta con variantes de color |
| [TipBox](./components/tipbox) | Notificación con icono, título y mensaje |
| [SnakeLoader](./components/snakeloader) | Animación de carga tipo serpiente |

## Demo rápida

<Panel divider>
  <template #header>📦 Panel Demo</template>
  Este es un Panel renderizado en vivo desde el markdown.
  <template #footer>⚡ Footer</template>
</Panel>

<Divider orientation="horizontal" />

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
  <Badge variant="success">Success</Badge>
  <Badge variant="warn">Warning</Badge>
  <Badge variant="error">Error</Badge>
  <Badge variant="accent">Accent</Badge>
</div>

<Divider orientation="horizontal" />

<TipBox variant="info" title="Info" message="Componentes funcionando en vivo." />

<TipBox variant="warn" title="Advertencia" message="Revisa los tokens de color." />

<TipBox variant="error" title="Error" message="Esto es solo un demo." />

<Divider orientation="horizontal" />

<SnakeLoader speed="1.2s">Cargando...</SnakeLoader>
