# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

## [0.7.0] - 2026-10-21

### Added
- **SearchBar** docs page (`/components/search-bar`) with design-lines tabs, demos (local filter, async loading, adorners, color, placeholder, disabled, loading, clearable, Enter submit), props/events/slots/CSS-tokens API tables, and full Spanish mirror at `/es/components/search-bar` (LBDS-223)
- **Complete component API reference (LBDS-241)**: every component page now documents its full public contract (Props, Events, Slots) audited against `packages/vue/src/components/*/*.vue`. Mirrored in `docs/es/components/*.md`. Per-page additions:
  - `design?: 'tuix' | 'rubik'` prop added to 38 component pages (Card already had it)
  - `modelValue` prop added to Input and Radio docs
  - `value` prop added to Radio docs
  - `## Events` sections added: Button (`click: MouseEvent`), Modal (`update:open: boolean`, `close: void`), Tabs (`close: string`), CommandPalette (`select: string`), Menu (`select: number`), Tag (`remove: void`), Toast (`close: void`), Todo (`update:done: boolean`, `toggle: boolean`); Card already had `hover`
  - `## Slots` sections added: Badge, KeyHint, StatusBar, Tooltip, CodeBlock, Todo (each with `default`); Box (`header`, `default`, `footer`); Card (`header`, `title`, `default`, `footer`); Panel (`header`, `default`, `footer`); ScrollView (`default`); Breadcrumbs (`default`); Kbd (`default`); SnakeLoader (`default`); Tag (`default`); TipBox (`default`); Tabs / TabsList / Tab / TabPanel (each `default`); TreeNode (`label`, `default`)
  - Structural fixes: `status-bar.md` had `### default` (a slot description) misplaced under `## Props` — moved to `## Slots`; `snakeloader.md` `## Slot` (singular) normalized to `## Slots`
- **Docs in-development banner (LBDS-291)**: persistent footer at the bottom of every docs page in EN+ES, mirroring OneSpend's `front/src/components/DevModeBanner.vue` 1:1 (warning-tint background, `position: fixed; bottom: 0`, glass backdrop blur). The label switches between "vX.Y.Z — in active development" and "vX.Y.Z — stable" based on the version parsed from `docs/CHANGELOG.md`. A `×` control persists the dismissal in `localStorage` under the current version; any new release re-shows the banner. New file `docs/.vitepress/theme/components/DevModeBanner.vue` (no CTA; the per-error CTA lives in LBDS-288). Mounted globally in `docs/.vitepress/theme/index.ts`.
- **Docs fence renderer (LBDS-284)**: every markdown code fence now renders as the library `<CodeBlock>` via a new `<DocsCodeBlock>` wrapper in `docs/.vitepress/theme/components/DocsCodeBlock.vue`, with a single shared Prettier formatter provided once in `enhanceApp`. Authors keep writing ` ```vue ` fences; the rendered output is the dogfooded component. Mermaid fences (the only language on the deny-list) keep the default `<pre><code>` renderer
- **CodeBlock docs (EN+ES)**: documented the new `preload` prop with a demo and a `### preload` row in the Props table (LBDS-284)

- **Docs i18n EN content translation (LBDS-247)**: translated all display strings (`label`, `description`, `placeholder`) in 22 component meta files from Spanish to English, completing the EN source-of-truth for the single-source i18n model

- **i18n convention doc (LBDS-282)**: new `docs/i18n-conventions.md` (EN) and `docs/es/i18n-conventions.md` (ES mirror) document the single rule for docs i18n — identifiers stay English in both locales (component names, URL paths, spec-terms like `## CSS Custom Properties`), while the navbar, sidebar, app title, and everything else translate per locale

### Changed
- **Component docs structure (LBDS-262)**: moved every live example out of the `Props`/`Slots`/`Events`/`API` sections into `## Demo` across all 39 component pages in both locales, so the reference sections are pure tables and prose. Every prop that affects appearance now has its own focused demo, and prop-plus-slot demos were split one concept per example

- **Demo state isolation (LBDS-262)**: each example uses its own refs, and color demos start with their variant selected, so no interaction leaks into a neighbouring example and every variant is visually distinguishable

- **Component docs examples (LBDS-240)**: retitled every demo section from example-content titles to functionality/prop titles across all 39 component pages (EN+ES); rewrote weak demos with realistic, multi-row/multi-item content and made TUIX/Rubik tabs render identical content (only `design` differs) so both lines are comparable — LogLines/StatusBar/Table design-line demos now expose their Rubik variants

- **Visual density (LBDS-270)**: docs CSS now defines a real hierarchy — `h2` is the page section, `h3` carries a colored divider, `h4` carries the same color at a smaller weight, no second divider inside `h2`/`h3`, and fences get a left border. Every `###` and `####` carries a one-line factual description under the heading, Ionic-style

- **Per-prop signature tables (LBDS-270)**: dropped the invented type names that didn't exist in the source, inlined the type tables next to the prop that consumes them, and added a `| Type | Default | Required |` signature table after every prop's prose. `Required` is derived authoritatively from `vue/compiler-sfc`, not curated

- **Theming page (LBDS-270)**: new `/theming` page documents the nine CSS layers (`base / intermedia / elevada / panel / borde / texto / acento / paleta / tipografía / animación`) with a sepia card example, the override-one-thing-vs-override-all decision, and is cross-linked from every component's `## CSS Custom Properties` section

- **CSS Custom Properties tables (LBDS-270)**: replaced the previous token list with a `Token | Default | Description` table on every component page in both locales. Token-name cells use `nowrap` so `--font-mono` no longer breaks mid-name on narrow viewports, and each table is wrapped in a horizontal-scroll container

- **Slot naming (LBDS-270)**: titles like `Title prop`, `Título del prop`, `Slot header` and `Título personalizado` were code-gen artifacts — replaced with names that describe what makes each slot unique (e.g. `Rich title`, `Footer actions`, `Rich content`, `Título enriquecido`)


- **i18n chrome (LBDS-282)**: ES page-chrome `default` → `Por defecto` in `docs/.vitepress/locales/es.json`; table headers hard-coded in markdown translated to Spanish counterparts in 39 ES component pages (`| Por defecto |`, `| Descripción |`, `| Tipo |`)

- **CSS Custom Properties table cells in ES pages (LBDS-282)**: `from theme (\`--X\` / \`--Y\`)` → `desde el tema (\`--X\` / \`--Y\`)` across all 37 ES component pages

- **EN component pages `###` headings — round 1 (LBDS-282)**: fixed 22 Spanish-leaked headings (`### Básico` → `### Basic`, `### Contenido` → `### Content`, `### Color del header` → `### Header color`, `### Cerrar tabs` → `### Close tabs`, etc.) across 22 components

- **EN component pages `###` headings — round 2 (LBDS-282)**: caught 11 additional Spanish-leaked headings in the same components (`### Paso actual` → `### Current step`, `### Filas alternadas` → `### Striped rows`, `### Demo interactiva` → `### Interactive demo`, `### Combinado (todos los props)` → `### Combined (all props)`, etc.) that the first sed pass missed

- **VitePress config (`docs/.vitepress/config.ts`) (LBDS-282)**: both `locales.root.title` and `locales.es.title` set per locale (`Herdrate Vue UI Library` in EN, `Librería de UI Vue de Herdrate` in ES); navbar and sidebar labels translate per locale (`Home`/`Colors`/`Components`/`Design lines`/`Theming`/`Color system` in EN, `Inicio`/`Colores`/`Componentes`/`Líneas de diseño`/`Tematización`/`Sistema de colores` in ES); ES `description` kept in Spanish (per-locale SEO)

### Fixed
- **Live HTML blocks (LBDS-262)**: a blank line between sibling elements inside a live demo block truncates the HTML block, so only the first element rendered and the rest leaked as literal template text (e.g. the accordion state-control buttons beyond the first one). All live blocks now keep siblings contiguous; this also repaired three pages that already leaked on `main` (LogLines, StatusBar, Table), where a `<Tab>` markup leaked as text

- **`tipbox.md` (EN+ES)**: removed an orphan wrapper `<div>` whose missing end tag broke the Vue compile of the whole docs site (`Element is missing end tag`, HTTP 500 on the page and a failed `vitepress build`)

- **Accordion demos (LBDS-262)**: the state-control buttons now drive real controlled state through `opened` + `update:opened`, the indicator-color demo shows every color, and the rich-content demo renders inside the panels

- **Combobox / Select (LBDS-262)**: the primary example reserves vertical space for its dropdown

- **CodeBlock (LBDS-262)**: multi-line snippets use a bound `:code` so newlines render as real line breaks instead of collapsing into one line

- **Toggle / Radio fences (LBDS-262)**: code fences now match their live example (all four toggles; per-color radios)

- **Docs i18n parity spec (LBDS-262)**: the Card section-heading expectation now includes `Demo`/`API`/`Tokens used` in both locales

- **Accordion demos**: `Apertura múltiple` and `Control de estado` now use `@update:opened` (the component has no `opened` prop for `v-model:opened`); `Contenido rico` now uses `#item-content` (was `#default`, which does not exist — only `item-title`/`item-content`)

- **Theme i18n keys**: added `reset`/`resetToDefaults`/`copy`/`copied`/`copyCode` to `useDocsI18n` (EN+ES) — `PropControls` and `PlayPreview` buttons previously rendered `undefined`

- **Docs fence/content parity**: Tag heading `removible` → `removable`; Badge fences now list all 9 colors; Radio fences now use `selectedColor`; ProgressBar fences now use kebab `show-label`; ES `checkbox.md`/`progress-bar.md` API tables re-translated to Spanish


- **Docs i18n single-source foundation (LBDS-238)**: new `locales/en.json` + `es.json` page-chrome catalogs (12 keys, Spanish falls back to English per key) exposed via `usePageChromeI18n` in the theme

- **Spanish Design lines sections**: all 39 `es/components/*.md` pages now render their `Líneas de diseño` TUIX/Rubik tabs (ported verbatim from EN, heading translated)

- **Thin ES meta wrappers**: all 39 `es/components/meta/*.ts` inherit structure from their EN twin and override only translatable strings (`label`, `description`, `placeholder`)

- **Parity spec** (`.vitepress/__tests__/docs-i18n-parity.spec.ts`): 239 tests guarding locale key parity, section headings, residual English chrome, and meta shape across all 39 pages


- **ES Card/Modal drift**: translated `Design lines`/`Events` headings, `Both` cells, and `(none)` markers in Spanish pages

- **`es/components/meta/card.ts`**: fixed type import pointing at nonexistent `docs/es/.vitepress`

- **`es/components/toast.md`**: removed duplicated top-level `<script setup>` (build-breaking)


- **EN theming page (`docs/theming.md`) (LBDS-282)**: root-locale page was entirely Spanish (drift from earlier translation step); translated to natural English with the section headings the EN locale needs (`## Layers`, `## Example — sepia theme`, `## When to change one thing vs the whole theme`, `## How it's applied per component`, `## API conventions (props and slots)`, `## How to choose between the three`)

- **Docs i18n convention now matches the site**: the navbar, sidebar, and app title translate in the Spanish locale, while identifiers (component names, URL paths, spec terms) stay English in both locales. `docs/i18n-conventions.md` and its Spanish mirror document the updated rule

- **Docs i18n drift (issue #1, follow-up of LBDS-223 review)**: the ES sidebar group header is now `Componentes`, the ES nav items are now `Inicio / Colores / Componentes / Líneas de diseño`, the ES `button.md` `## Events` section is now `## Eventos`, and the EN `input.ts` source-of-truth meta is now in English with the Spanish strings in the ES wrapper as overrides. `config.spec.ts` and `docs-i18n-parity.spec.ts` now cover the contract for these surfaces.

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
