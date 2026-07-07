# Herdrate Vue Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Setup the monorepo infrastructure, build system, design tokens, and base CLI components for `@herdrate/vue`.

**Architecture:** PNPM Workspaces with Turborepo for task orchestration. Vite in Library Mode for the Vue package to support ESM/CJS. Design tokens based on Catppuccin Mocha/Latte.

**Tech Stack:** Vue 3, TypeScript, Vite, Ark UI Vue, Biome, PNPM, Turborepo.

## Global Constraints

- Framework: Vue 3.4+, `<script setup>`, TS strict.
- Linter/Format: Biome (single config in root `biome.json`).
- Styling: Plain CSS + Custom Properties (tokens), no Tailwind in core.
- Theme: Catppuccin Mocha (dark) and Latte (light) with `prefers-color-scheme` auto-detect.
- Build: Vite Library Mode producing ESM, CJS, and `.d.ts`.
- Repo: Monorepo structure (`packages/vue`, `packages/docs`, `examples/playground`).

---

### Task 1: Monorepo Scaffold & Tooling

**Files:**
- Create: `package.json` (root)
- Create: `pnpm-workspace.yaml`
- Create: `turbo.json`
- Create: `biome.json`
- Create: `packages/vue/package.json`
- Create: `packages/vue/vite.config.ts`
- Create: `packages/vue/tsconfig.json`

**Interfaces:**
- Produces: Root workspace capable of running `pnpm build` across packages.

- [ ] **Step 1: Initialize root package.json and pnpm-workspace.yaml**
- [ ] **Step 2: Configure turbo.json for build and lint pipelines**
- [ ] **Step 3: Setup biome.json with Vue and TS rules**
- [ ] **Step 4: Scaffold `packages/vue` with Vite library mode configuration**
- [ ] **Step 5: Verify monorepo structure by running `pnpm install` and `pnpm build`**
- [ ] **Step 6: Commit**

### Task 2: Catppuccin Design Tokens & Theme System

**Files:**
- Create: `packages/vue/src/styles/tokens.css`
- Create: `packages/vue/src/styles/reset.css`
- Create: `packages/vue/src/styles/theme.css`
- Create: `packages/vue/src/index.ts` (exporting CSS)

**Interfaces:**
- Produces: Global CSS variables mapped to Catppuccin Mocha/Latte.

- [ ] **Step 1: Implement `tokens.css` with raw Catppuccin Mocha and Latte palettes**
- [ ] **Step 2: Implement semantic mapping (e.g., `--bg`, `--accent`, `--caret`) in `theme.css`**
- [ ] **Step 3: Setup `prefers-color-scheme` and manual `.theme-light`/`.theme-dark` overrides**
- [ ] **Step 4: Create `reset.css` for terminal-like box-sizing and font-family defaults**
- [ ] **Step 5: Export styles in `index.ts` so consumers can import them**
- [ ] **Step 6: Commit**

### Task 3: Base Components (Panel, Divider, Badge, TipBox, SnakeLoader)

**Files:**
- Create: `packages/vue/src/components/panel/` (Panel.vue, PanelHeader.vue, PanelBody.vue, PanelFooter.vue)
- Create: `packages/vue/src/components/divider/Divider.vue`
- Create: `packages/vue/src/components/badge/Badge.vue`
- Create: `packages/vue/src/components/tip/TipBox.vue`
- Create: `packages/vue/src/components/loader/SnakeLoader.vue`
- Test: `packages/vue/src/components/**/*.spec.ts`

**Interfaces:**
- Consumes: Tokens from `theme.css`.
- Produces: First set of styled components.

- [ ] **Step 1: Implement `Panel` suite with `│` divisor logic**
- [ ] **Step 2: Implement `Divider` (horizontal/vertical unicode characters)**
- [ ] **Step 3: Implement `Badge` with variant support (success, warn, error, accent)**
- [ ] **Step 4: Implement `TipBox` with semantic icons and Catppuccin colors**
- [ ] **Step 5: Implement `SnakeLoader` with CSS keyframes for the retro "decoding" effect**
- [ ] **Step 6: Write Vitest tests for each component's basic rendering**
- [ ] **Step 7: Commit**

### Task 4: Documentation Scaffold (VitePress) & Playground app

**Files:**
- Create: `packages/docs/package.json`
- Create: `packages/docs/.vitepress/config.ts`
- Create: `packages/docs/index.md`
- Create: `examples/playground/package.json`
- Create: `examples/playground/src/App.vue`

**Interfaces:**
- Consumes: `@herdrate/vue` (local workspace link).
- Produces: Living documentation site and dev playground.

- [ ] **Step 1: Scaffold VitePress in `packages/docs`**
- [ ] **Step 2: Configure VitePress to import components from `@herdrate/vue`**
- [ ] **Step 3: Create a basic index page and one component page for `Panel`**
- [ ] **Step 4: Setup `examples/playground` as a Vite + Vue app**
- [ ] **Step 5: Implement a "Gallery" page in playground showing all base components**
- [ ] **Step 6: Verify that `pnpm dev` works for both docs and playground**
- [ ] **Step 7: Commit**
