# ButtonTui

Botones con estilo terminal (TUI), minimales, diseñados para Catppuccin Mocha.

## Demo

<div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
  <ButtonTui icon="↖" fill="solid" color="primary">[ TL ]</ButtonTui>
  <ButtonTui icon="↗" fill="outline" color="success">[ TR ]</ButtonTui>
  <ButtonTui icon="↘" fill="clear" color="danger">[ BR ]</ButtonTui>
</div>

```vue
<ButtonTui icon="↖" fill="solid" color="primary">[ TL ]</ButtonTui>
<ButtonTui icon="↗" fill="outline" color="success">[ TR ]</ButtonTui>
<ButtonTui icon="↘" fill="clear" color="danger">[ BR ]</ButtonTui>
```

## Props

### icon

Icono o emoji opcional dentro del botón.

<div style="display: flex; gap: 0.75rem;">
  <ButtonTui icon="⌨" color="primary">Key</ButtonTui>
  <ButtonTui icon="⚙" color="success">Config</ButtonTui>
  <ButtonTui color="medium">Sin icono</ButtonTui>
</div>

```vue
<ButtonTui icon="⌨" color="primary">Key</ButtonTui>
<ButtonTui icon="⚙" color="success">Config</ButtonTui>
<ButtonTui color="medium">Sin icono</ButtonTui>
```

### fill

Modo de relleno del botón: `solid`, `outline` o `clear`.

<div style="display: flex; gap: 0.75rem;">
  <ButtonTui fill="solid" color="primary">solid</ButtonTui>
  <ButtonTui fill="outline" color="primary">outline</ButtonTui>
  <ButtonTui fill="clear" color="primary">clear</ButtonTui>
</div>

```vue
<ButtonTui fill="solid" color="primary">solid</ButtonTui>
<ButtonTui fill="outline" color="primary">outline</ButtonTui>
<ButtonTui fill="clear" color="primary">clear</ButtonTui>
```

### color

Color semántico del botón.

<div style="display: flex; gap: 0.75rem;">
  <ButtonTui color="primary">primary</ButtonTui>
  <ButtonTui color="success">success</ButtonTui>
  <ButtonTui color="warning">warning</ButtonTui>
  <ButtonTui color="danger">danger</ButtonTui>
</div>

```vue
<ButtonTui color="primary">primary</ButtonTui>
<ButtonTui color="success">success</ButtonTui>
<ButtonTui color="warning">warning</ButtonTui>
<ButtonTui color="danger">danger</ButtonTui>
```

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `icon` | `string` | — | Icono o emoji (opcional) |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'danger' \| 'light' \| 'medium' \| 'dark'` | `'primary'` | Color semántico |
| `fill` | `'solid' \| 'outline' \| 'clear'` | `'solid'` | Modo de relleno |

| Evento | Tipo | Descripción |
|---|---|---|
| `click` | — | Se dispara al hacer clic |

## Tokens usados

`--font-mono`, `--color-*`, `--fill-*`
