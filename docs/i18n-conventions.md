# i18n conventions

This library is localized to English (`/`) and Spanish (`/es/`). To avoid having to
relitigate per-page decisions, the i18n rule below is the **single source of truth**.

## The rule

**Identifiers stay English in both locales. Everything a reader reads translates.**

1. **Identifiers** — URL paths (`/components/...`, `/es/components/...`), component
   names (`Accordion`, `Card`, `Button`, …), spec-defined terms used as headings
   (`## CSS Custom Properties`), and identifier-like values inside code blocks
   (`--cp-cut`, `--font-family`, `aria-label`).
2. **Everything else translates** to the page's locale: the app title, navbar and
   sidebar labels, prose, table bodies, demo `###`/`####` headings, demo text,
   descriptions, captions, and comments inside code blocks.

Component names are identifiers, not prose: they are the same byte-identical
strings in both locales, so a Spanish-speaking reader can search the docs, quote a
snippet, or file an issue naming a component without ambiguity.

## Per-surface mapping

| Surface | Rule |
| --- | --- |
| `<title>` / app title (`Herdrate Vue UI Library` in EN, `Librería de UI Vue de Herdrate` in ES) | Translate per locale |
| Navbar item labels (`Home`/`Inicio`, `Colors`/`Colores`, `Components`/`Componentes`, `Design lines`/`Líneas de diseño`) | Translate per locale |
| Sidebar group labels (`Theming`/`Tematización`, `Color system`/`Sistema de color`, `Components`/`Componentes`) | Translate per locale |
| Component names (`Accordion`, `Card`, `Button`, …) | English in both locales — identifiers, and the parity spec requires them byte-identical |
| URL paths (`/components/accordion`, `/es/components/accordion`, `/design-lines`, `/es/design-lines`) | English in both locales |
| Page prose, intro paragraphs, callouts | Translate |
| Section / demo headings inside pages (`### Demo`, `#### Basic (default)`, `### Rich content (...)`) | Translate |
| CSS Custom Properties table cells (`--bg`, `--text`, descriptions, the "from theme (...)" cell) | Translate |
| Spec-defined terms as headings (e.g. `## CSS Custom Properties`) | English in both — matches Ionic, Vuetify, Material |
| W3C / framework term names in code (`--ctp-latte-mauve`, `font-family`, etc.) | English in both — these are identifiers, not prose |

## Why this rule exists

- **URLs stay English** so a path is unambiguous regardless of locale; otherwise a
  Spanish-speaking user linking to `/es/components/accordion` would block a
  English-speaking user from typing the same path.
- **Component names stay English** so the API surface has one name everywhere —
  the docs, the source, the npm package, and every issue tracker. A translated
  component name would fork the API vocabulary per locale.
- **Chrome translates** (app title, navbar, sidebar) so a Spanish-speaking reader
  does not hit English fragments in the navigation they use to move around.
- **Everything else translates** so a Spanish-speaking reader does not hit English
  fragments mid-prose.
- The convention is conservative on the *exceptions* (CSS Custom Properties,
  identifier-like terms) so contributors do not relitigate every heading.

## Decisions baked in this rule

- The app title is localized: `Herdrate Vue UI Library` in EN,
  `Librería de UI Vue de Herdrate` in ES.
- Navbar labels translate: `Home`, `Colors`, `Components`, `Design lines` in EN;
  `Inicio`, `Colores`, `Componentes`, `Líneas de diseño` in ES.
- Sidebar group labels translate: `Theming`, `Color system`, `Components` in EN;
  `Tematización`, `Sistema de color`, `Componentes` in ES.
- Component names (`Accordion`, `Card`, `Button`, …) are English in both.
- `## CSS Custom Properties` is English in both — it is the spec term (CSS
  Custom Properties for Cascading Variables Module) and matches Ionic/Vuetify/Material.
- The VitePress config sets `locales.root.title` and `locales.es.title` per locale.

## How to apply this

When you create or edit a page:

1. The page lives at `/<name>.md` (English) and `/es/<name>.md` (Spanish).
2. Headings, prose, and table bodies translate freely.
3. Component names, URL paths, and identifier-like values inside code blocks
   (`--cp-cut`, `--font-mono`, `font-family`, `aria-label`) stay English in both.
4. If you change a navbar, sidebar, or app-title string, change it in both
   locales in the same commit — `docs/.vitepress/config.ts` holds both.

When you are unsure whether a string is a "spec term" or "prose", ask in the PR —
do not silently keep English prose.
