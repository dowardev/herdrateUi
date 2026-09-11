# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Added

- **Rubik v2 HUD morphology**: real second-line variants for Select (indexed dropdown with diamond markers), ScrollView (borderless bracket viewport with inner scroll frame), SnakeLoader (segmented chase meter), Stepper (HUD phase readout), Table (borderless ledger), Tabs (segmented channel switcher), TipBox (signal strip), Tooltip (instrument readout) and TreeNode (diamond state markers)
- **Table**: new opt-in `indexed` prop rendering a numbered index column in both design lines (off by default)
- **Tabs**: child components inherit `design` from a parent `<Tabs>` via provide/inject, including dynamic updates
- **ButtonTui**: `click` event now carries the native `MouseEvent`; `ButtonTuiItem.onClick` typed `(e: MouseEvent) => void`
- **Todo**: exposes `role="checkbox"` and `aria-checked` in both lines

### Fixed

- **Spinner**: Remove orphaned `loader/Spinner.vue` duplicate that broke `vue-tsc` typechecking (`TS2339: Property 'frame' does not exist`). The component lives at `spinner/Spinner.vue` and is unchanged.

## [0.1.1] - 2026-08-17

### Added

- Initial public release of `@dowardev/herdrate-vue`.

[0.1.1]: https://gitlab.com/dowardev/herdrateUi/-/tree/v0.1.1
