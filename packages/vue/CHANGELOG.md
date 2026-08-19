# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Fixed

- **Spinner**: Remove orphaned `loader/Spinner.vue` duplicate that broke `vue-tsc` typechecking (`TS2339: Property 'frame' does not exist`). The component lives at `spinner/Spinner.vue` and is unchanged.

## [0.1.1] - 2026-08-17

### Added

- Initial public release of `@dowardev/herdrate-vue`.

[0.1.1]: https://gitlab.com/dowardev/herdrateUi/-/tree/v0.1.1
