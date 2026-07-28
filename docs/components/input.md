<script setup lang="ts">
import { ref } from 'vue'
import { inputMeta } from './meta/input'
const text = ref('')
const password = ref('')
const multiline = ref('Línea 1\nLínea 2\nLínea 3')
</script>

# Input

Input de texto estilo terminal, con soporte para textarea, password y readonly.

<PlayHost :meta="inputMeta" />

## Demo

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.75rem;">
    <div><label style="font-size:0.8rem;color:var(--text-muted)">Texto</label><Input v-model="text" placeholder="Escribe algo..." /></div>
    <div><label style="font-size:0.8rem;color:var(--text-muted)">Password</label><Input v-model="password" type="password" placeholder="Contraseña" /></div>
    <div><label style="font-size:0.8rem;color:var(--text-muted)">Multiline</label><Input v-model="multiline" :rows="3" /></div>
  </div>
</ClientOnly>

```vue
<Input v-model="text" placeholder="Escribe algo..." />

<Input v-model="password" type="password" placeholder="Contraseña" />

<Input v-model="multiline" :rows="3" />
```

## Props

### placeholder

Texto temporal dentro del input mientras está vacío.

<div style="display:flex;flex-direction:column;gap:0.5rem;">
  <Input placeholder="Escribe algo..." />
  <Input placeholder="ej: usuario@correo.com" />
</div>

```vue
<Input placeholder="Escribe algo..." />
<Input placeholder="ej: usuario@correo.com" />
```

### color

Color de foco y borde activo del input.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Input v-model="text" color="primary" placeholder="Primary" />
    <Input v-model="text" color="success" placeholder="Success" />
    <Input v-model="text" color="danger" placeholder="Danger" />
  </div>
</ClientOnly>

```vue
<Input v-model="text" color="primary" placeholder="Primary" />
<Input v-model="text" color="success" placeholder="Success" />
<Input v-model="text" color="danger" placeholder="Danger" />
```

### disabled

Deshabilita la interacción con el input.

<Input placeholder="No puedes escribir aquí" disabled />

```vue
<Input placeholder="Deshabilitado" disabled />
```

### readonly

Input de solo lectura, visible pero no editable.

<ClientOnly>
  <Input v-model="text" placeholder="Solo lectura" readonly />
</ClientOnly>

```vue
<Input v-model="text" readonly />
```

### type

Tipo de input: `text`, `password` o `number`.

<ClientOnly>
  <div style="display:flex;flex-direction:column;gap:0.5rem;">
    <Input v-model="text" type="text" placeholder="Texto" />
    <Input v-model="password" type="password" placeholder="Contraseña" />
  </div>
</ClientOnly>

```vue
<Input v-model="text" type="text" placeholder="Texto" />
<Input v-model="password" type="password" placeholder="Contraseña" />
```

### rows

Número de filas. Cuando es mayor a 1 se comporta como textarea.

<ClientOnly>
  <Input v-model="multiline" :rows="4" placeholder="Textarea..." />
</ClientOnly>

```vue
<Input v-model="text" :rows="4" />
```

## Events

| Evento | Payload | Descripción |
|---|---|---|
| `update:modelValue` | `string` | Se emite al escribir en el input |

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `modelValue` | `string` | `''` | Valor del input (v-model) |
| `placeholder` | `string` | `''` | Texto placeholder |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color de foco |
| `disabled` | `boolean` | `false` | Deshabilitado |
| `readonly` | `boolean` | `false` | Solo lectura |
| `type` | `'text' \\| 'password' \\| 'number'` | `'text'` | Tipo de input |
| `rows` | `number` | `1` | Número de filas (>1 = textarea) |

## Tokens usados

`--font-mono`, `--bg`, `--border`, `--text`, `--color-*`
