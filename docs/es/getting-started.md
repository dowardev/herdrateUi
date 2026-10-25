# Primeros pasos

Instala el paquete, importa los componentes que necesites y listo — los estilos vienen con la librería.

## Instalación

```bash
pnpm add @dowardev/herdrate-vue
```

O con npm:

```bash
npm install @dowardev/herdrate-vue
```

Vue es una **peer dependency**: la librería requiere `vue ^3.4` y no lo empaqueta, así que asegura que tu proyecto ya tenga Vue 3.4 o superior instalado.

`prettier ^3` es una segunda peer dependency **opcional**: instala `prettier` (junto con los plugins de los lenguajes que uses) si quieres que `<CodeBlock>` formatee el código que muestra.

## Importación

Todos los componentes se exportan desde la raíz del paquete:

```ts
import { Button, Panel } from '@dowardev/herdrate-vue';
```

Los composables y los tipos vienen del mismo punto de entrada:

```ts
import { useDesign, useToast, DEFAULT_COLOR } from '@dowardev/herdrate-vue';
import type { Color, Fill, DesignLine } from '@dowardev/herdrate-vue';
```

El paquete expone una única export raíz (`.`). **No hay subpaths por componente**, así que `@dowardev/herdrate-vue/button` no existe — importa siempre desde `@dowardev/herdrate-vue`.

El paquete es **solo ESM**: publica la condición `import` y no una condición `require`, así que `require()` desde CommonJS no resuelve. Usa un build ESM, o un `import()` dinámico desde CommonJS.

## Estilos

El CSS se **inyecta automáticamente** apenas importas un componente. No hay que importar ninguna hoja de estilos ni configurar ningún archivo CSS: con importar un componente alcanza.

## Uso

```vue
<script setup lang="ts">
import { Button, Panel } from '@dowardev/herdrate-vue';
</script>

<template>
  <Panel divider>
    <template #header>Demo de panel</template>
    <Button color="primary" @click="handleClick">Click me</Button>
    <template #footer>Footer del panel</template>
  </Panel>
</template>
```

## Ejemplo en vivo

El mismo markup, renderizado por este sitio:

<Panel divider>
  <template #header>📦 Demo de panel</template>
  Este panel se renderiza en vivo desde el markdown de esta página.
  <template #footer>⚡ Footer del panel</template>
</Panel>

<Divider orientation="horizontal" />

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
  <Badge color="primary">Primary</Badge>
  <Badge color="success">Success</Badge>
  <Badge color="warning">Warning</Badge>
  <Badge color="danger">Danger</Badge>
</div>

## Próximos pasos

- Recorre los [componentes](/es/components/panel) y sus props, slots y eventos.
- Conoce el [sistema de colores](/es/color) y los tokens semánticos detrás de la prop `color`.
- Personaliza el aspecto con la [tematización](/es/theming).
- Compara las [líneas de diseño](/es/design-lines) disponibles.
