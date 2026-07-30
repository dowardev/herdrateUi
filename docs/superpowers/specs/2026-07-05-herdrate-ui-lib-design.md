# 2026-07-05 — `@dowardev/herdrate-vue` UI Library Design

## Resumen

Librería Vue 3 (headless-friendly) que ofrece componentes con estética terminal/CLI
inspirados en la UI de Hermes/OpenCode. Construida sobre Ark UI Vue, con Catppuccin
(Latte/Mocha) como única paleta, tipografía monoespaciada, y un sistema visual coherente
con paneles divisor `│`, loader snake, carets `›` y dots `•`.

## Goals

- Proveer un set v1 de ~16 componentes con calidad producción.
- Abstraer la lógica de interacción vía Ark UI Vue; el consumidor aplica estilos via tokens CSS.
- Look-and-feel coherente con terminales CLI modernos (Hermes, OpenCode).
- Documentación estática en VitePress, sin playground editable en v1.
- Publicable a npm con cambios versionados (changesets).

## Non-Goals (v1)

- Playground interactivo en docs.
- Mobile responsive.
- i18n.
- Animaciones avanzadas (solo keyframes CSS simples).
- Generador de temas custom; solo Latte y Mocha.
- Componentes compuestos de datos (DataTable, Calendar, Charts).

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Vue 3.4+, `<script setup>`, TS estricto |
| Headless | `@ark-ui/vue` |
| Build librería | Vite en library mode (ESM + CJS + `.d.ts`) |
| Estilos | CSS plano + CSS custom properties (sin Tailwind) |
| Linter/format | Biome (config única en `biome.json`) |
| Tests | Vitest + `@vue/test-utils` + `@axe-core/playwright` |
| Docs | VitePress |
| Monorepo | pnpm workspaces + Turborepo |
| Release | Changesets + GitHub Actions |

## Estructura del repo

```
ui-lib/
├── package.json              # root, turbo + pnpm scripts
├── pnpm-workspace.yaml
├── turbo.json
├── biome.json
├── packages/
│   ├── vue/                  # @dowardev/herdrate-vue (la librería)
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── panel/        # Panel, PanelHeader, PanelBody, PanelFooter
│   │   │   │   ├── chat/         # ChatBubble, MessageList, ToolCall, ThinkingBlock
│   │   │   │   ├── code/         # CodeBlock (Shiki)
│   │   │   │   ├── tip/          # TipBox
│   │   │   │   ├── selection/    # SelectionList, SelectionItem
│   │   │   │   ├── loader/       # SnakeLoader
│   │   │   │   ├── badge/
│   │   │   │   ├── divider/
│   │   │   │   └── primitives/   # Input, Dialog, Tabs, Switch, Checkbox (Ark-wrapped)
│   │   │   ├── styles/
│   │   │   │   ├── tokens.css
│   │   │   │   ├── reset.css
│   │   │   │   └── theme.css
│   │   │   └── index.ts
│   │   └── vite.config.ts        # lib mode config
│   └── docs/                # VitePress
│       ├── .vitepress/config.ts
│       ├── components/      # páginas por componente
│       └── index.md
└── examples/
    └── playground/          # dev app para validar componentes manualmente
```

## Sistema visual — Catppuccin

### Temas
- **Mocha** (dark) — default; usado cuando `prefers-color-scheme: dark` o no se sobreescribe.
- **Latte** (light) — default cuando `prefers-color-scheme: light`.
- Override manual con clases `theme-dark` / `theme-light` en `<html>` o cualquier ancestro.

### Variables CSS base

Tokens "raw" Catppuccin:

```
--ctp-base, --ctp-mantle, --ctp-crust,
--ctp-surface0, --ctp-surface1, --ctp-surface2,
--ctp-overlay0, --ctp-overlay1, --ctp-overlay2,
--ctp-text, --ctp-subtext0, --ctp-subtext1, --ctp-subtext2,
--ctp-rosewater, --ctp-flamingo, --ctp-pink,
--ctp-mauve, --ctp-red, --ctp-maroon,
--ctp-peach, --ctp-yellow, --ctp-green,
--ctp-teal, --ctp-blue, --ctp-sapphire, --ctp-lavender
```

Tokens semánticos:

```
--bg:           var(--ctp-base)
--bg-panel:     var(--ctp-mantle)
--bg-elevated:  var(--ctp-surface0)
--border:       var(--ctp-surface1)
--border-soft:  var(--ctp-surface2)
--text:         var(--ctp-text)
--text-muted:   var(--ctp-subtext0)
--text-dim:     var(--ctp-overlay0)
--accent:       var(--ctp-blue)
--accent-mauve: var(--ctp-mauve)   # para highlight secundario
--caret:        var(--ctp-peach)   # caret ›
--dot:          var(--ctp-overlay0)  # dot •
--success:      var(--ctp-green)
--warn:         var(--ctp-yellow)
--error:        var(--ctp-red)
```

### Tipografía
- `--font-mono`: `'JetBrains Mono', 'Berkeley Mono', ui-monospace, monospace`
- `--font-sans`: `system-ui, -apple-system, sans-serif` (fallback, no se usa por default)

### Detalles de UI
- **Panel divisor `│`**: `::before` con `content: "│"`, color `var(--border)`.
- **SnakeLoader**: dash `▄▄▄` con animación CSS keyframes (~700ms loop), color `var(--accent)`.
- **SelectionList**:
  - Item activo: caret `›` en `var(--caret)` + texto blanco/claro.
  - Item hover (no activo): dot `•` en `var(--dot)`.
  - Inactivo: sin marcador.
- **CodeBlock**: Shiki con temas `catppuccin-mocha` / `catppuccin-latte`. Botón "copy" en esquina superior derecha con Badge estilo CLI.
- **TipBox**: ícono + título + body. Íconos `ⓘ` (azul), `⚠` (amarillo), `✖` (rojo).

## Componentes v1 (set detallado)

### Chat
| Componente | API | Notas |
|---|---|---|
| `ChatBubble` | `variant: 'user' \| 'assistant' \| 'tool' \| 'system'`, slots `avatar`, `header`, `default`, `footer` | Borde izquierdo tintado por variant |
| `MessageList` | `messages`, `autoScroll: boolean` | Scroll virtual NO en v1 |
| `ToolCall` | `name`, `args`, `result`, `state: 'pending' \| 'ok' \| 'error'` | Ark Collapsible |
| `ThinkingBlock` | `duration`, slot default | Ark Collapsible, caret rotatorio |
| `CodeBlock` | `code`, `lang`, `theme: 'auto' \| 'mocha' \| 'latte'` | Shiki |

### CLI primitives
| Componente | API | Notas |
|---|---|---|
| `Panel` | slots `header`, `default`, `footer`, prop `divider: boolean` | Borde + bg-panel |
| `SnakeLoader` | prop `speed`, slots default | CSS keyframes |
| `SelectionList` | `items`, `modelValue`, slot `item` | v-model |
| `SelectionItem` | `active`, `selected`, `disabled`, slot default | Caret/dot rendering interno |
| `Badge` | `variant: 'default' \| 'success' \| 'warn' \| 'error' \| 'accent'` | Pill pequeño |
| `Divider` | `orientation: 'horizontal' \| 'vertical'` | Caracteres unicode `│`/`──` |

### Primitives Ark-wrapped
| Componente | Headless base | Notas |
|---|---|---|
| `Input` | HTML + composable `useFieldId` | Floating label CLI style |
| `Dialog` | `@ark-ui/vue` `Dialog` | Overlay con backdrop Catppuccin |
| `Tabs` | `@ark-ui/vue` `Tabs` | Underline accent en lugar de box |
| `Switch` | `@ark-ui/vue` `Switch` | Track con ctp-surface0, thumb ctp-accent |
| `Checkbox` | `@ark-ui/vue` `Checkbox` | Check `×` font-mono |

### Composables
- `useTerminalSize()` — devuelve `{ cols, rows }` reajustado por ResizeObserver
- `useColorScheme()` — devuelve `'mocha' | 'latte'`, reactivo a `prefers-color-scheme` o clase manual

## Testing

- Vitest unitario para lógica (composables, Slots/Props).
- Snapshot de markup para componentes estables.
- `@vue/test-utils` para mount + interacción (open dialog, switch toggles, etc.).
- A11y: `@axe-core/playwright` para ChatBubble, Dialog, Tabs, SelectionList, ToolCall.
- Cobertura objetivo: ≥ 80% en `packages/vue/src`.

## Documentación (VitePress)

- Página por componente con:
  - Demo renderizado (ejemplo hardcoded, sin edición).
  - Tabla de props.
  - Tabla de slots.
  - Tabla de eventos.
  - Sección de a11y.
- `index.md`: intro + screenshot.
- No hay playground editable en v1.

## Release & CI

- Changesets para versionado.
- Commits convencionales (`feat`, `fix`, `chore`, `docs`, `refactor`).
- GitHub Actions:
  - `lint` job: `biome ci .`
  - `typecheck` job: `vue-tsc -b`
  - `test` job: `vitest run`
  - `build` job: `pnpm -r build` + publica cambios a npm (con secrets `NPM_TOKEN`).
- `main` protegido: requiere CI verde.

## Riesgos & mitigación

| Riesgo | Mitigación |
|---|---|
| Ark UI Vue aún en desarrollo activo | Pin versión, evaluar alternativa (`reka-ui`) si bloqueo |
| Shiki añade peso (>300KB) | Code en lazy load, separar build `chat-extra` opcional |
| Catppuccin cambia de tono con pocos grados entre surface0/1 | Tests visuales con Chromatic o snapshots |
| Overlap entre SelectionList y futuras libs (cmdk, etc.) | API minimal compatible con v-model; escapatoria clara |

## Criterios de éxito (v1)

1. `pnpm install && pnpm dev` levanta playground con todos los componentes visibles.
2. `pnpm -F @dowardev/herdrate-vue build` produce bundle ESM/CJS/d.ts sin warnings.
3. Tests pasan con cobertura ≥80%.
4. `pnpm -F docs dev` muestra todas las páginas de componentes.
5. Publicable a npm: `pnpm changeset version` genera versionado correcto.
6. Demo visual: visualmente coherente con la imagen de referencia (CLI Hermes/OpenCode + paleta Catppuccin).
