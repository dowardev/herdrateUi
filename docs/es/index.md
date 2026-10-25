# Herdrate Vue UI Library

Librería de componentes Vue 3 con tema **Catppuccin** y estética CLI/terminal.

Incluye un [sistema de colores semántico](/es/color) estilo Ionic con 9 colores (`primary` → `dark`) y 3 modos de relleno (`solid`, `outline`, `clear`), todos adaptados automáticamente al tema oscuro/claro.

¿Primera vez con la librería? Sigue la guía de [primeros pasos](/es/getting-started) para instalar el paquete e importar los componentes.

## Componentes

| Componente | Descripción |
|---|---|
| [Panel](/es/components/panel) | Contenedor con header, body, footer y divisor vertical |
| [Divider](/es/components/divider) | Divisor horizontal/vertical estilo terminal |
| [Badge](/es/components/badge) | Etiqueta con variantes de color |
| [TipBox](/es/components/tipbox) | Notificación con icono, título y mensaje |
| [SnakeLoader](/es/components/snakeloader) | Animación de carga tipo serpiente |

## Demo rápida

<Panel divider>
  <template #header>📦 Panel Demo</template>
  Este es un Panel renderizado en vivo desde el markdown.
  <template #footer>⚡ Footer</template>
</Panel>

<Divider orientation="horizontal" />

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
  <Badge color="success">Success</Badge>
  <Badge color="warning">Warning</Badge>
  <Badge color="danger">Danger</Badge>
  <Badge color="primary">Primary</Badge>
</div>

<Divider orientation="horizontal" />

<TipBox color="primary" title="Info" message="Componentes funcionando en vivo." />

<TipBox color="warning" title="Advertencia" message="Revisa los tokens de color." />

<TipBox color="danger" title="Error" message="Esto es solo un demo." />

<Divider orientation="horizontal" />

<SnakeLoader speed="1.2s" color="primary">Cargando...</SnakeLoader>
