# Design lines: tuix vs rubik

Two presentations, one component API. Live demos below follow the global
sidebar switch (they remount on change); the printed snippets pin one line
so they stand alone. Every component accepts `design?: 'tuix' | 'rubik'`
(or inherits from the nearest `[data-design]` / global `setDesign()`). Default: `tuix`.

## tuix (original)

Flat terminal look: sharp corners, `border-radius: 0`, mono font, subtle border,
no elevation (`--shadow: none`), minimal motion.

## rubik (new — from HomeTemplate3)

Squared-futuristic HUD translated from `portafolio` template3 into pure tokens.
Rubik is morphology + motion + hierarchy, NEVER palette (colors stay consumer-owned).

1. **Geometry (v2 — minimal-futurist):** sharp base (`border-radius: 0`) with a
   SINGLE angular cut top-right via `clip-path` (`--cp-cut: 12px` containers,
   `8px` buttons, `6px` chips). No brackets, no neon. Reference: sci-fi button
   sheets + HUD panels, restrained to one cut per surface.
2. **HUD micro-ticks:** tiny `+`/tick markers in border color at low emphasis
   (panel corners, section labels). Decorative, never glowing.
3. **Rail:** thin accent rail (`2–3px`, `var(--cp-rail)`, NO glow) marking
   headers, actives and rails. Grows or appears on hover/interaction.
4. **Type:** labels/headers mono uppercase (`letter-spacing: .07–.16em`); rubik card title
   in display font (`--font-display`), body in sans; tuix stays full mono.
5. **Elevation:** tuix flat; rubik lifts softly (`--shadow` / `--shadow-hover`,
   neutral only), hover `translateY(-1px~-2px)`. No colored shadows.
6. **Motion:** `--cp-ease` standard; `120ms` press, `~200ms` hover.
   Honor `prefers-reduced-motion`.
7. **No glow, no neon:** rubik stays inside the consumer palette (monochrome-
   leaning). Accent marks state (rails, actives, focus outline) but never
   emits light: no `box-shadow` with accent color, no gradients-for-glow.
   Focus = flat `2px` outline, offset `2px`.
8. **Numbers:** mono index prefix (`// 01`) on cards/steps, muted → accent on rubik.
9. **CSS home (Fase 2 rule):** the scoped `.x--rubik` variant is the source of
   truth — it must carry the FULL visible delta, because `[data-design="rubik"] .x`
   global selectors do NOT match when class + attribute sit on the SAME element
   (prop-only usage: `<ButtonTui design="rubik">`). `src/themes/rubik.css` keeps
   only tokens, keyframes, and ancestor-scoped enhancements. Never touch tuix.
10. **Contract per component:** `design` prop + `useDesign()` + `card--rubik`-style class and/or
    `data-design="rubik"` attr + spec asserting the class + docs demo inside `[data-design="rubik"]`.
11. **Teleport limitation:** teleported content (`Modal`, `CommandPalette`) escapes
    the `[data-design]` ancestor subtree — pass `design` explicitly instead of
    relying on ancestor inheritance there.
