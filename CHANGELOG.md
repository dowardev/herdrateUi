# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## Where things go

Three changelogs, no duplication:

- Package changelogs (`packages/vue/CHANGELOG.md`, `docs/CHANGELOG.md`) hold the
  technical detail — files, APIs, props, internals. Each package versions
  independently.
- This root file holds the user-facing, cross-package summary of each delivery
  in plain language — never file paths or code internals.

## [Unreleased]

### Added

- Accordion panels can now be opened and closed from your own controls, and can start with panels already open
- Buttons and button groups can now be disabled

### Changed

- Component pages now keep every interactive example in the Demo section, and the API sections are pure reference tables
- Component documentation is now more realistic: every component page shows demos grouped by prop/functionality with the same content in TUIX and Rubik, so both design lines can be compared side-by-side
- Component pages now read at a glance: clearer section divisions, descriptive one-line summaries for every example, and per-prop signature tables (Type / Default / Required) instead of invented type names
- Every component page now ends with a CSS Custom Properties table that lists the tokens the component actually uses, their default values, and a short description, plus a link to the new Theming page that explains the layer taxonomy (base / panel / border / text / accent / etc.)
- Token names in the Custom Properties tables no longer break mid-word on narrow viewports; the tables themselves scroll horizontally when needed

### Fixed

- Button and Spinner docs no longer bundle multiple unrelated props into the same example; each demo now demonstrates one prop at a time
- Slot headings in Card, Modal, and StatusBar docs use a name that describes what makes the slot unique (rich title, footer actions, rich content) instead of repeating the prop name

### Fixed

- Component examples no longer stop working after their first element, and three pages that showed stray markup as text now render their design-line switcher correctly
- The accordion indicator color now actually changes with the `color` prop
- Live examples no longer share state with each other, so every color variant is visibly different
- Theme control labels (reset/copy) now show correctly in both languages, and Spanish component pages no longer show English mixed into headings or API tables
- Accordion documentation no longer references a non-existent `v-model:opened` binding or `#default` slot

### Fixed

- English documentation source now fully in English: all component property labels, descriptions, and placeholders translated from Spanish, making the English locale the true source of truth for the i18n system

### Fixed

- Spanish documentation: every component page now shows its design comparison
  tabs and section headings in Spanish, and an automated check prevents future
  English/Spanish drift between the two versions of each page

### Changed

- **Docs follow a single i18n convention (LBDS-282)**: navbar/sidebar labels, app title, and URL paths stay English regardless of locale; everything else (prose, table cells, demo headings) translates. Documented at `/i18n-conventions` (and `/es/i18n-conventions`) so future contributors don't relitigate

### Fixed

- **ES pages no longer mix English and Spanish in the same table (LBDS-282)**: the `Default` column reads `Por defecto`, the `from theme (...)` cells read `desde el tema (...)`, and remaining English-leaked table headers are translated. EN pages had several Spanish-leaked `###` headings that now read in English (`Basic` instead of `Básico`, `Content` instead of `Contenido`, `Current step` instead of `Paso actual`, etc.)
- **The Theming page in English is now actually in English (LBDS-282)**: it had been left fully in Spanish by an earlier translation step

## [0.3.0] - 2026-09-11

### Added

- Second design line **Rubik** for the Vue component library: nine components
  (Select, ScrollView, SnakeLoader, Stepper, Table, Tabs, TipBox, Tooltip,
  TreeNode) gained a HUD-style presentation next to the default TUIX look,
  switchable per component or globally, with live comparison demos in the docs
- Numbered index column for tables, available in both design lines
- Documentation site: missing Spanish Card page, new Design lines concept
  pages in both languages, and a sidebar that keeps its header fixed while
  only the component list scrolls

### Fixed

- Component demos and API tables corrected and completed across the docs
