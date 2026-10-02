# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Added

- **Accordion**: `opened` (controlled, `v-model:opened`) and `defaultOpened` props — an open panel can now be driven from parent state or start open. `opened` takes precedence over `defaultOpened`, which is initial-only and clamped to its last index in single-open mode
- **ButtonTui**: `disabled` prop — renders the native attribute and never emits `click`
- **ButtonTuiGroup**: group-level `disabled` plus a per-item `disabled` on `ButtonTuiItem`

### Fixed

- **Accordion**: the Rubik open indicator now follows the `color` prop instead of always using the accent color; the closed marker keeps its muted look
- **ButtonTui**: disabled buttons no longer paint hover styles

## [0.2.0] - 2026-09-11

### Added

- **Rubik v2 HUD morphology**: real second-line variants for Select (indexed dropdown with diamond markers), ScrollView (borderless bracket viewport with inner scroll frame), SnakeLoader (segmented chase meter), Stepper (HUD phase readout), Table (borderless ledger), Tabs (segmented channel switcher), TipBox (signal strip), Tooltip (instrument readout) and TreeNode (diamond state markers)
- **Table**: new opt-in `indexed` prop rendering a numbered index column in both design lines (off by default)
- **Tabs**: child components inherit `design` from a parent `<Tabs>` via provide/inject, including dynamic updates
- **ButtonTui**: `click` event now carries the native `MouseEvent`; `ButtonTuiItem.onClick` typed `(e: MouseEvent) => void`
- **Todo**: exposes `role="checkbox"` and `aria-checked` in both lines

### Fixed

- Tuix `box-shadow` fallback restored in Modal and CommandPalette
- Modal rubik header title legibility across semantic colors
- Tooltip rubik connector (was clipped away by `clip-path`)
- Table rubik row hover wash invisible on non-striped tables
- ButtonTuiGroup click handlers receiving `undefined` instead of the event
- Divider vertical rubik collapsing to zero height when standalone
- **Spinner**: Remove orphaned `loader/Spinner.vue` duplicate that broke `vue-tsc` typechecking (`TS2339: Property 'frame' does not exist`). The component lives at `spinner/Spinner.vue` and is unchanged.

## [0.1.1] - 2026-08-17

### Added

- Initial public release of `@dowardev/herdrate-vue`.

[0.1.1]: https://gitlab.com/dowardev/herdrateUi/-/tree/v0.1.1
