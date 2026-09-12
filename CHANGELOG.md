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

### Fixed

- Spanish documentation: every component page now shows its design comparison
  tabs and section headings in Spanish, and an automated check prevents future
  English/Spanish drift between the two versions of each page

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
