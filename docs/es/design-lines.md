# Líneas de diseño: tuix vs rubik

Dos presentaciones, una sola API de componentes. Las demos vivas siguen el
selector global del sidebar (se remontan al cambiar); los snippets impresos
fijan una línea para que funcionen solos. Cada componente acepta `design?: 'tuix' | 'rubik'`
(o hereda del `[data-design]` más cercano / `setDesign()` global). Default: `tuix`.

## tuix (original)

Look terminal plano: esquinas afiladas, `border-radius: 0`, fuente mono, borde sutil,
sin elevación (`--shadow: none`), movimiento mínimo.

## rubik (nueva — de HomeTemplate3)

HUD cuadrado-futurista traducido de `portafolio` template3 a tokens puros.
Rubik es morfología + movimiento + jerarquía, NUNCA paleta (los colores son del consumidor).

1. **Geometría (v2 — minimal-futurista):** base afilada (`border-radius: 0`) con un
   ÚNICO corte angular arriba a la derecha vía `clip-path` (`--cp-cut: 12px` contenedores,
   `8px` botones, `6px` chips). Sin brackets, sin neón. Referencia: láminas de botones
   sci-fi + paneles HUD, limitados a un corte por superficie.
2. **Micro-ticks HUD:** pequeños marcadores `+`/tick en color de borde con bajo énfasis
   (esquinas de paneles, etiquetas de sección). Decorativos, nunca brillan.
3. **Riel:** riel accent fino (`2–3px`, `var(--cp-rail)`, SIN glow) marcando
   headers, activos y rieles. Crece o aparece en hover/interacción.
4. **Tipo:** labels/headers mono en mayúsculas (`letter-spacing: .07–.16em`); título de card
   rubik en fuente display (`--font-display`), cuerpo en sans; tuix queda full mono.
5. **Elevación:** tuix plano; rubik levanta suave (`--shadow` / `--shadow-hover`,
   solo neutros), hover `translateY(-1px~-2px)`. Sin sombras de color.
6. **Movimiento:** `--cp-ease` estándar; `120ms` press, `~200ms` hover.
   Respetar `prefers-reduced-motion`.
7. **Sin glow, sin neón:** rubik vive dentro de la paleta del consumidor (tendencia
   monocromo). El accent marca estado (rieles, activos, foco) pero nunca
   emite luz: sin `box-shadow` con accent, sin gradientes-glow.
   Foco = `outline` plano de `2px`, offset `2px`.
8. **Números:** prefijo índice mono (`// 01`) en cards/pasos, muted → accent en rubik.
9. **Casa del CSS (regla Fase 2):** la variante scoped `.x--rubik` es la fuente de
   verdad — debe llevar el delta visible COMPLETO, porque los selectores globales
   `[data-design="rubik"] .x` NO matchean cuando clase + atributo están en el MISMO
   elemento (uso solo-prop: `<ButtonTui design="rubik">`). `src/themes/rubik.css` guarda
   solo tokens, keyframes y mejoras de ancestro. Nunca tocar tuix.
10. **Contrato por componente:** prop `design` + `useDesign()` + clase estilo `card--rubik` y/o
    attr `data-design="rubik"` + spec que verifica la clase + demo en docs dentro de `[data-design="rubik"]`.
11. **Limitación Teleport:** el contenido teleportado (`Modal`, `CommandPalette`) escapa
    del subárbol ancestro `[data-design]` — pasar `design` explícito en vez de
    depender de la herencia del ancestro ahí.
