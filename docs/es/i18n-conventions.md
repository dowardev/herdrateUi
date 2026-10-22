# Convenciones de i18n

Esta librería está localizada al inglés (`/`) y al español (`/es/`). Para no
tener que relitigar la decisión página por página, la regla de abajo es la
**única fuente de verdad**.

## La regla

**Los identificadores quedan en inglés en ambas localizaciones. Todo lo que el
lector lee se traduce.**

1. **Identificadores** — paths de URL (`/components/...`, `/es/components/...`),
   nombres de componentes (`Accordion`, `Card`, `Button`, …), términos definidos
   por specs usados como headings (`## CSS Custom Properties`) y valores
   identifier-like dentro de bloques de código (`--cp-cut`, `--font-family`,
   `aria-label`).
2. **Todo lo demás se traduce** al idioma de la página: el título de la app, los
   labels de navbar y sidebar, el prose, las celdas de tablas, los headings
   `###`/`####` de demos, el texto de demos, descripciones, captions y
   comentarios dentro de bloques de código.

Los nombres de componentes son identificadores, no prose: son los mismos strings
byte-idénticos en ambas localizaciones, así un lector hispanohablante puede
buscar en la doc, citar un snippet o abrir un issue nombrando un componente sin
ambigüedad.

## Mapeo por superficie

| Superficie | Regla |
| --- | --- |
| `<title>` / título de la app (`Herdrate Vue UI Library` en EN, `Librería de UI Vue de Herdrate` en ES) | Traducir por locale |
| Labels de navbar (`Home`/`Inicio`, `Colors`/`Colores`, `Components`/`Componentes`, `Design lines`/`Líneas de diseño`) | Traducir por locale |
| Labels de grupo del sidebar (`Theming`/`Tematización`, `Color system`/`Sistema de colores`, `Components`/`Componentes`) | Traducir por locale |
| Título H1 de la página (el nombre propio de la página) | Traducir por locale, y coincidir con el label del sidebar que apunta a ella |
| Nombres de componentes (`Accordion`, `Card`, `Button`, …) | Inglés en ambas localizaciones — son identificadores, y el spec de paridad los exige byte-idénticos |
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
- **Los nombres de componentes quedan en inglés** para que la superficie de la API
  tenga un solo nombre en todos lados — la doc, el código, el paquete npm y
  cualquier tracker de issues. Un nombre de componente traducido bifurcaría el
  vocabulario de la API por localización.
- **El chrome se traduce** (título de la app, navbar, sidebar) para que un lector
  hispanohablante no se encuentre fragmentos en inglés en la navegación que usa
  para moverse.
- **Todo lo demás se traduce** para que un lector hispanohablante no se encuentre
  fragmentos en inglés en medio del prose.
- La convención es conservadora en las *excepciones* (CSS Custom Properties,
  términos identifier-like) para que los contributors no relitiguen cada heading.

## Decisiones baked in en esta regla

- El título de la app está localizado: `Herdrate Vue UI Library` en EN,
  `Librería de UI Vue de Herdrate` en ES.
- Los labels del navbar se traducen: `Home`, `Colors`, `Components`, `Design lines`
  en EN; `Inicio`, `Colores`, `Componentes`, `Líneas de diseño` en ES.
- Los labels de grupo del sidebar se traducen: `Theming`, `Color system`,
  `Components` en EN; `Tematización`, `Sistema de colores`, `Componentes` en ES.
- Un label de grupo del sidebar es el nombre de la página a la que apunta, en ese locale
  — coincide con el H1 de esa página. `/es/theming` es `# Tematización`,
  `/es/color` es `# Sistema de colores`.
- Los nombres de componentes (`Accordion`, `Card`, `Button`, …) son inglés en
  ambas.
- `## CSS Custom Properties` es inglés en ambas — es el término del spec (CSS
  Custom Properties for Cascading Variables Module) y matchea Ionic/Vuetify/Material.
- La config de VitePress setea `locales.root.title` y `locales.es.title` por locale.

## Cómo aplicar esto

Cuando creás o editás una página:

1. La página vive en `/<name>.md` (inglés) y `/es/<name>.md` (español).
2. Headings, párrafo y celdas de tablas se traducen libremente.
3. Los nombres de componentes, los paths de URL y los valores identifier-like
   dentro de bloques de código (`--cp-cut`, `--font-mono`, `font-family`,
   `aria-label`) quedan en inglés en ambas.
4. Si cambiás un string de navbar, sidebar o del título de la app, cambialo en
   ambas localizaciones en el mismo commit — `docs/.vitepress/config.ts` tiene
   las dos.
5. Un label de grupo del sidebar es el nombre de la página a la que linkea, en ese
   locale — mantenelo igual al H1 de esa página. Si traducís uno, traducí el otro.

Cuando no estés seguro si un string es "término del spec" o "prose", preguntá en
el PR — no dejes prose en inglés silenciosamente.
