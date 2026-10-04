# Convenciones de i18n

Esta librería está localizada al inglés (`/`) y al español (`/es/`). Para no
tener que relitigar la decisión página por página, la regla de abajo es la
**única fuente de verdad**.

## La regla

Solo dos cosas quedan en inglés en **ambas** localizaciones:

1. **Links** — paths de URL (`/components/...`, `/es/components/...`) y labels de
   navbar/sidebar.
2. **Título de la app y marca** — `<title>` de cada página y la marca
   `Herdrate Vue UI Library`.

**Todo lo demás se traduce** al idioma de la página: prose, celdas de tablas,
headings `###`/`####` de demos, texto de demos, descripciones, captions,
comentarios dentro de bloques de código.

## Mapeo por superficie

| Superficie | Regla |
| --- | --- |
| `<title>` y marca `Herdrate Vue UI Library` | Inglés en ambas localizaciones |
| Labels de navbar/sidebar (`Home`, `Components`, `Colors`, `Theming`, `Color system`, `Design lines`, nombres de componentes) | Inglés en ambas localizaciones |
| Paths de URL (`/components/accordion`, `/es/components/accordion`, `/design-lines`, `/es/design-lines`) | Inglés en ambas localizaciones |
| Prose de la página, párrafos introductorios, callouts | Traducir |
| Headings de sección/demo dentro de páginas (`### Demo`, `#### Apertura simple (default)`, `### Contenido rico (...)`) | Traducir |
| Celdas de la tabla CSS Custom Properties (`--bg`, `--text`, descripciones, la celda "del tema (...)") | Traducir |
| Términos definidos por specs como headings (ej. `## CSS Custom Properties`) | Inglés en ambas — matchea Ionic, Vuetify, Material |
| Nombres de términos W3C / framework dentro de código (`--ctp-latte-mauve`, `font-family`, etc.) | Inglés en ambas — son identifiers, no prose |

## Por qué existe esta regla

- **Las URLs quedan en inglés** para que un path sea inequívoco sin importar la
  localización; si no, un usuario hispanohablante que linkea a
  `/es/components/accordion` bloquearía a un angloparlante de escribir el mismo
  path.
- **El título de la app / marca queda en inglés** para que la identidad del
  producto no se bifurque por localización.
- **Todo lo demás se traduce** para que un lector hispanohablante no se encuentre
  fragmentos en inglés en medio del prose.
- La convención es conservadora en las *excepciones* (CSS Custom Properties,
  términos identifier-like) para que los contributors no relitiguen cada heading.

## Decisiones baked in en esta regla

- Los labels del navbar son inglés en ambas localizaciones: `Home`, `Colors`,
  `Components`, `Design lines`.
- Los labels de grupo del sidebar son inglés en ambas localizaciones: `Theming`,
  `Color system`, `Components`.
- Los nombres de componentes (`Accordion`, `Card`, `ButtonTui`, …) son inglés en
  ambas.
- `## CSS Custom Properties` es inglés en ambas — es el término del spec (CSS
  Custom Properties for Cascading Variables Module) y matchea Ionic/Vuetify/Material.
- La config de VitePress mantiene tanto `locales.root.title` como
  `locales.es.title` con el valor `Herdrate Vue UI Library`.

## Cómo aplicar esto

Cuando creás o editás una página:

1. La página vive en `/<name>.md` (inglés) y `/es/<name>.md` (español).
2. Headings, párrafo y celdas de tablas se traducen libremente.
3. Cualquier cosa que sea un **link** (URL o label de un item del navbar/sidebar)
   queda en inglés.
4. El string de marca `Herdrate Vue UI Library` queda en inglés en ambas.
5. Valores identifier-like dentro de bloques de código (`--cp-cut`, `--font-mono`,
   `font-family`, `aria-label`) quedan en inglés en ambas.

Cuando no estés seguro si un string es "término del spec" o "prose", preguntá en
el PR — no dejes prose en inglés silenciosamente.