# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

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
