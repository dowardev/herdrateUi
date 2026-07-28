# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Added

- **Modal Playground** (`PlayHost.vue`, `play/PlayPreview.vue`, `play/PlayControls.vue`, `play/PlayHeader.vue`, `play/PlayPropsDoc.vue`): New interactive modal-based component playground with live preview, code generation, and props documentation
- **Code Snippet Generator** (`PlayPreview.vue`): Automatic Vue SFC snippet generation from live prop/slot values with Prettier formatting
- **Prop Control Components**: `PropControlArray.vue` (array input), `PropControlSegmented.vue` (segmented enum control)
- **Demo Components**: `TabsDemo.vue` (interactive tabs), `ToastDemo.vue` (interactive toast notifications)
- **Cheatsheet Panel** (`CheatsheetPanel.vue`): Cheatsheet overlay for keyboard shortcuts and component reference
- **Tests**: New specs for `PlayHost`, `PlayControls`, `PlayHeader`, `PlayPreview`, `PlayPropsDoc`, `PropControls`, `PropControlSlot`

### Changed

- **Playground Architecture**: Refactored monolithic `ComponentPlayground.vue` into modular components (`PlayHost`, `PlayPreview`, `PlayControls`, `PlayHeader`, `PlayPropsDoc`)
- **PropControls.vue**: Enhanced to support Array and Segmented control types, slot props, and improved slot editing
- **PropControlInput.vue**: Updated to handle placeholder and type-specific behavior
- **PropControlToggle.vue**: Updated styling and interaction patterns
- **PropControlSlot.vue**: Enhanced with slot reference assignment and scoped props display
- **Component Documentation**: Updated markdown and meta files across 30+ components to include playground metadata

### Removed

- `ComponentPlayground.vue` — Replaced by modular playground architecture
- `ComponentPlayground.spec.ts` — Old test file removed in favor of per-component specs
