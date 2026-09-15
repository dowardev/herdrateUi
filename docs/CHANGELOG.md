# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Changed

- **Component docs examples (LBDS-240)**: retitled every demo section from example-content titles to functionality/prop titles across all 39 component pages (EN+ES); rewrote weak demos with realistic, multi-row/multi-item content and made TUIX/Rubik tabs render identical content (only `design` differs) so both lines are comparable — LogLines/StatusBar/Table design-line demos now expose their Rubik variants

### Fixed

- **Accordion demos**: `Apertura múltiple` and `Control de estado` now use `@update:opened` (the component has no `opened` prop for `v-model:opened`); `Contenido rico` now uses `#item-content` (was `#default`, which does not exist — only `item-title`/`item-content`)
- **Theme i18n keys**: added `reset`/`resetToDefaults`/`copy`/`copied`/`copyCode` to `useDocsI18n` (EN+ES) — `PropControls` and `PlayPreview` buttons previously rendered `undefined`
- **Docs fence/content parity**: Tag heading `removible` → `removable`; Badge fences now list all 9 colors; Radio fences now use `selectedColor`; ProgressBar fences now use kebab `show-label`; ES `checkbox.md`/`progress-bar.md` API tables re-translated to Spanish

### Added

- **Docs i18n EN content translation (LBDS-247)**: translated all display strings (`label`, `description`, `placeholder`) in 22 component meta files from Spanish to English, completing the EN source-of-truth for the single-source i18n model

### Fixed

- **Docs i18n single-source foundation (LBDS-238)**: new `locales/en.json` + `es.json` page-chrome catalogs (12 keys, Spanish falls back to English per key) exposed via `usePageChromeI18n` in the theme
- **Spanish Design lines sections**: all 39 `es/components/*.md` pages now render their `Líneas de diseño` TUIX/Rubik tabs (ported verbatim from EN, heading translated)
- **Thin ES meta wrappers**: all 39 `es/components/meta/*.ts` inherit structure from their EN twin and override only translatable strings (`label`, `description`, `placeholder`)
- **Parity spec** (`.vitepress/__tests__/docs-i18n-parity.spec.ts`): 239 tests guarding locale key parity, section headings, residual English chrome, and meta shape across all 39 pages

### Fixed

- **ES Card/Modal drift**: translated `Design lines`/`Events` headings, `Both` cells, and `(none)` markers in Spanish pages
- **`es/components/meta/card.ts`**: fixed type import pointing at nonexistent `docs/es/.vitepress`
- **`es/components/toast.md`**: removed duplicated top-level `<script setup>` (build-breaking)

## [0.3.0] - 2026-09-11

### Added

- **ES Card page** (`es/components/card.md` + `es/components/meta/card.ts`): fixes dead sidebar link to 404
- **Design lines pages**: new `design-lines.md` plus Spanish `es/design-lines.md`, both linked in the navbar
- **Sidebar layout** (`theme/sidebar.css`): header block stays fixed, only the Components group scrolls
- **Rubik v2 comparison demos**: live TUIX/Rubik tabs with identical content per line across the component pages
- **Modal Playground** (`PlayHost.vue`, `play/PlayPreview.vue`, `play/PlayControls.vue`, `play/PlayHeader.vue`, `play/PlayPropsDoc.vue`): New interactive modal-based component playground with live preview, code generation, and props documentation
- **Code Snippet Generator** (`PlayPreview.vue`): Automatic Vue SFC snippet generation from live prop/slot values with Prettier formatting
- **Prop Control Components**: `PropControlArray.vue` (array input), `PropControlSegmented.vue` (segmented enum control)
- **Demo Components**: `TabsDemo.vue` (interactive tabs), `ToastDemo.vue` (interactive toast notifications)
- **Cheatsheet Panel** (`CheatsheetPanel.vue`): Cheatsheet overlay for keyboard shortcuts and component reference
- **Tests**: New specs for `PlayHost`, `PlayControls`, `PlayHeader`, `PlayPreview`, `PlayPropsDoc`, `PropControls`, `PropControlSlot`

### Changed

- **Card demos**: TUIX/Rubik tabs now render identical content (only `design` differs); `category` documented as available in both lines
- **Snippets**: CommandPalette and Modal fences are self-contained with `<script setup>` state
- Removed dead `:deep()` selectors from component page styles (plain CSS cannot use SFC `:deep()`)
- **Modal.spec.ts**: Expanded test coverage from 4 to 14 tests — Escape handling, `closable: false`, close button, `update:open` payload, footer slot, `width` prop, `color` class, and keydown listener cleanup
- **AGENTS.md**: Added convention — docs demos must use library components (ButtonTui, Modal, etc.) instead of native HTML elements
- **docs/components/modal.md**: Updated all demos to use ButtonTui instead of native `<button>` elements
- **Playground Architecture**: Refactored monolithic `ComponentPlayground.vue` into modular components (`PlayHost`, `PlayPreview`, `PlayControls`, `PlayHeader`, `PlayPropsDoc`)
- **PropControls.vue**: Enhanced to support Array and Segmented control types, slot props, and improved slot editing
- **PropControlInput.vue**: Updated to handle placeholder and type-specific behavior
- **PropControlToggle.vue**: Updated styling and interaction patterns
- **PropControlSlot.vue**: Enhanced with slot reference assignment and scoped props display
- **Component Documentation**: Updated markdown and meta files across 30+ components to include playground metadata

### Removed

- `ComponentPlayground.vue` — Replaced by modular playground architecture
- `ComponentPlayground.spec.ts` — Old test file removed in favor of per-component specs
