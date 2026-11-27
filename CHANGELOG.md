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

### Changed
- The deploy verifies the SSH key against the server before anything is built: a missing, invalid or unauthorized key now fails in seconds with a message that says exactly what to fix, instead of failing at the end of the deploy.

## [0.4.2] - 2026-10-25

### Added
- The docs site now has a getting started page that explains how to install the library and import its components

## [0.4.1] - 2026-10-22

### Fixed

- **The library now ships TypeScript types**: TypeScript projects can import the components and get real prop and event types instead of a type error. The package had been advertising type definitions that were never included in the published files, so every consumer's editor treated the whole component API as `any`

## [0.4.0] - 2026-10-21

### Added
- Search field component with debounced search events and a clear button. Adapts to your data source — wire the filter yourself (LBDS-223)
- Every component page now documents its complete public API (props, events, slots) — a consumer can read the contract from the docs without opening the source
- The docs site now shows a persistent "in development" footer at the bottom of every page, mirroring the OneSpend app's dev banner — the same version-aware label, dismissal storage, and visual styling
- Accordion panels can now be opened and closed from your own controls, and can start with panels already open
- Buttons and button groups can now be disabled

### Changed
- **Docs code blocks now use the library `<CodeBlock>` everywhere** (LBDS-284): every code fence in the docs renders through the library's component with Prettier auto-formatting, so long single-line snippets wrap instead of overflowing, the `lang` tag and copy button show on every block, and the docs dogfood the `<CodeBlock>` API. Mermaid diagrams stay as before

- Component pages now keep every interactive example in the Demo section, and the API sections are pure reference tables

- Component documentation is now more realistic: every component page shows demos grouped by prop/functionality with the same content in TUIX and Rubik, so both design lines can be compared side-by-side

- Component pages now read at a glance: clearer section divisions, descriptive one-line summaries for every example, and per-prop signature tables (Type / Default / Required) instead of invented type names

- Every component page now ends with a CSS Custom Properties table that lists the tokens the component actually uses, their default values, and a short description, plus a link to the new Theming page that explains the layer taxonomy (base / panel / border / text / accent / etc.)

- Token names in the Custom Properties tables no longer break mid-word on narrow viewports; the tables themselves scroll horizontally when needed


- **Docs follow a single i18n convention (LBDS-282)**: identifiers stay English in both locales (component names, URL paths, spec-terms like `## CSS Custom Properties`), while the navbar, sidebar, app title, and everything else translate per locale. Documented at `/i18n-conventions` (and `/es/i18n-conventions`) so future contributors don't relitigate


- **Buttons drop the `Tui` suffix (LBDS-283)** — the two button components are now called `Button` and `ButtonGroup` (instead of `ButtonTui` and `ButtonTuiGroup`). This is a breaking change for any consumer that imports them today: update your imports and your templates before upgrading. The old names are removed, not aliased. See the Vue package changelog for the full migration.

### Fixed
- Button and Spinner docs no longer bundle multiple unrelated props into the same example; each demo now demonstrates one prop at a time

- Slot headings in Card, Modal, and StatusBar docs use a name that describes what makes the slot unique (rich title, footer actions, rich content) instead of repeating the prop name


- Component examples no longer stop working after their first element, and three pages that showed stray markup as text now render their design-line switcher correctly

- The accordion indicator color now actually changes with the `color` prop

- Live examples no longer share state with each other, so every color variant is visibly different

- Theme control labels (reset/copy) now show correctly in both languages, and Spanish component pages no longer show English mixed into headings or API tables

- Accordion documentation no longer references a non-existent `v-model:opened` binding or `#default` slot


- English documentation source now fully in English: all component property labels, descriptions, and placeholders translated from Spanish, making the English locale the true source of truth for the i18n system


- Spanish documentation: every component page now shows its design comparison
  tabs and section headings in Spanish, and an automated check prevents future
  English/Spanish drift between the two versions of each page


- **ES pages no longer mix English and Spanish in the same table (LBDS-282)**: the `Default` column reads `Por defecto`, the `from theme (...)` cells read `desde el tema (...)`, and remaining English-leaked table headers are translated. EN pages had several Spanish-leaked `###` headings that now read in English (`Basic` instead of `Básico`, `Content` instead of `Contenido`, `Current step` instead of `Paso actual`, etc.)

- **The Theming page in English is now actually in English (LBDS-282)**: it had been left fully in Spanish by an earlier translation step

- **Docs i18n convention now matches the site**: the navbar, sidebar, and app title translate in the Spanish locale, while identifiers (component names, URL paths, spec terms) stay English in both locales. `docs/i18n-conventions.md` and its Spanish mirror document the updated rule

- **Spanish docs now read consistently**: remaining pre-existing i18n drift in the docs site (sidebar group header, navigation, and one component page heading) is fixed, and the English source-of-truth for the Input component is restored. The i18n parity tests guard against regression.

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
