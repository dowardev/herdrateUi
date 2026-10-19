# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Added

- **SearchBar** component with instance-owned debounce and typed emit set (`update:modelValue`, `search`, `clear`, `focus`, `blur`, `enter`); debounce default 250 ms (`0` = no debounce); leading and trailing adorner slots; debounce timer cancels on unmount. No built-in data source — emits events, the consumer wires the search logic (LBDS-223)
- **CodeBlock**: `preload?: boolean` prop (default `true`) — when `false`, skips the `formatter` call entirely (no Prettier async load). Useful for short snippets where loading `prettier/standalone` isn't worth it (LBDS-284)
- **Accordion**: `opened` (controlled, `v-model:opened`) and `defaultOpened` props — an open panel can now be driven from parent state or start open. `opened` takes precedence over `defaultOpened`, which is initial-only and clamped to its last index in single-open mode
- **Button**: `disabled` prop — renders the native attribute and never emits `click`
- **ButtonGroup**: group-level `disabled` plus a per-item `disabled` on `ButtonItem`
- **Card**: `header?: string` and `footer?: string` props alongside the existing `header` and `footer` slots — plain-text header/footer content via prop, slot wins when both are provided (LBDS-285)
- **Modal**: `title` slot overrides the `title` prop in the header, plus `footer?: string` prop for plain-text footer content alongside the existing `footer` slot (LBDS-285)
- **Box**: `header?: string` and `footer?: string` props alongside the existing `header` and `footer` slots (LBDS-285)
- **Panel**: `header?: string` and `footer?: string` props alongside the existing `header` and `footer` slots (LBDS-285)
- **TreeNode**: `label?: string` prop alongside the existing `label` slot (LBDS-285)
- **Docs**: new "Convenciones de la API (props y slots)" section in `theming.md` documenting the three content patterns (replaceable content / optional content / visual & style)

### Fixed

- **Accordion**: the Rubik open indicator now follows the `color` prop instead of always using the accent color; the closed marker keeps its muted look
- **Button**: disabled buttons no longer paint hover styles
- **SearchBar**: programmatic `modelValue` changes (e.g. a "reset filters" button) now reset the search-dedup tracker so the user re-typing the same value re-emits `search`; the reset is also reactive and covers force-sync to the same value. Negative `debounce` values emit a dev-only `console.warn` so consumers notice the mismatch between the doc controls (min=0) and runtime behavior.

### Changed

- **BREAKING: rename `ButtonTui` → `Button` and `ButtonTuiGroup` → `ButtonGroup` (LBDS-283)** — the `Tui` suffix referenced internal design-line nomenclature and was leaking into consumer imports. Old exports are gone, no deprecation aliases. Shipped in the next `0.x` release; consumers must update their imports and templates manually. Migration:
  - Source-level imports: `import { ButtonTui } from '@dowardev/herdrate-vue'` → `import { Button } from '@dowardev/herdrate-vue'`. Same for `ButtonTuiGroup` → `ButtonGroup` and `ButtonTuiItem` → `ButtonItem` (the per-button object type re-exported from `ButtonGroup`).
  - Templates: `<ButtonTui ...>` → `<Button ...>`, `<ButtonTuiGroup ...>` → `<ButtonGroup ...>`.
  - Files (kebab path): `packages/vue/src/components/button-tui/ButtonTui.vue` → `button/Button.vue`, and the same for the group. Meta registry files are renamed too: `docs/components/meta/buttontui.ts` → `meta/button.ts`, etc.
  - CSS hooks: `.btn-tui` and `.btn-tui-group` (and the `-rubik`/BEM variants like `.btn-tui--rubik`, `.btn-tui-group--rubik`, `.btn-tui__icon`, `.btn-tui__label`) are now `.btn`, `.btn-group`, `.btn--rubik`, `.btn-group--rubik`, `.btn__icon`, `.btn__label`. The library's global `color.css` was updated to match.

## [0.2.0] - 2026-09-11

### Added

- **Rubik v2 HUD morphology**: real second-line variants for Select (indexed dropdown with diamond markers), ScrollView (borderless bracket viewport with inner scroll frame), SnakeLoader (segmented chase meter), Stepper (HUD phase readout), Table (borderless ledger), Tabs (segmented channel switcher), TipBox (signal strip), Tooltip (instrument readout) and TreeNode (diamond state markers)
- **Table**: new opt-in `indexed` prop rendering a numbered index column in both design lines (off by default)
- **Tabs**: child components inherit `design` from a parent `<Tabs>` via provide/inject, including dynamic updates
- **Button**: `click` event now carries the native `MouseEvent`; `ButtonItem.onClick` typed `(e: MouseEvent) => void`
- **Todo**: exposes `role="checkbox"` and `aria-checked` in both lines

### Fixed

- Tuix `box-shadow` fallback restored in Modal and CommandPalette
- Modal rubik header title legibility across semantic colors
- Tooltip rubik connector (was clipped away by `clip-path`)
- Table rubik row hover wash invisible on non-striped tables
- ButtonGroup click handlers receiving `undefined` instead of the event
- Divider vertical rubik collapsing to zero height when standalone
- **Spinner**: Remove orphaned `loader/Spinner.vue` duplicate that broke `vue-tsc` typechecking (`TS2339: Property 'frame' does not exist`). The component lives at `spinner/Spinner.vue` and is unchanged.

## [0.1.1] - 2026-08-17

### Added

- Initial public release of `@dowardev/herdrate-vue`.

[0.1.1]: https://gitlab.com/dowardev/herdrateUi/-/tree/v0.1.1
