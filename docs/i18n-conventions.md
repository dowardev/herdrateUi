# i18n conventions

This library is localized to English (`/`) and Spanish (`/es/`). To avoid having to
relitigate per-page decisions, the i18n rule below is the **single source of truth**.

## The rule

Only two things stay in English in **both** locales:

1. **Links** — URL paths (`/components/...`, `/es/components/...`) and navbar/sidebar
   item labels.
2. **App title and brand** — `<title>` of every page and the brand name
   `Herdrate Vue UI Library`.

**Everything else translates** to the page's locale: prose, table bodies, demo
`###`/`####` headings, demo text, descriptions, captions, comments inside code blocks.

## Per-surface mapping

| Surface | Rule |
| --- | --- |
| `<title>` and brand `Herdrate Vue UI Library` | English in both locales |
| Navbar / sidebar item labels (`Home`, `Components`, `Colors`, `Theming`, `Color system`, `Design lines`, component names) | English in both locales |
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
- **App title / brand stays English** so the product identity does not fork by locale.
- **Everything else translates** so a Spanish-speaking reader does not hit English
  fragments mid-prose.
- The convention is conservative on the *exceptions* (CSS Custom Properties,
  identifier-like terms) so contributors do not relitigate every heading.

## Decisions baked in this rule

- Navbar labels are English in both locales: `Home`, `Colors`, `Components`, `Design lines`.
- Sidebar group labels are English in both locales: `Theming`, `Color system`, `Components`.
- Component names (`Accordion`, `Card`, `Button`, …) are English in both.
- `## CSS Custom Properties` is English in both — it is the spec term (CSS Custom
  Properties for Cascading Variables Module) and matches Ionic/Vuetify/Material.
- The VitePress config keeps both `locales.root.title` and `locales.es.title` set
  to `Herdrate Vue UI Library`.

## How to apply this

When you create or edit a page:

1. The page lives at `/<name>.md` (English) and `/es/<name>.md` (Spanish).
2. Headings, prose, and table bodies translate freely.
3. Anything that is a **link** (URL or label of a navbar/sidebar item) stays English.
4. The brand string `Herdrate Vue UI Library` stays English in both.
5. Identifier-like values inside code blocks (`--cp-cut`, `--font-mono`, `font-family`,
   `aria-label`) stay English in both.

When you are unsure whether a string is a "spec term" or "prose", ask in the PR —
do not silently keep English prose.