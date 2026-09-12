# REGLA DURA — pregunta del usuario (máxima prioridad, leer primero)

Cuando el usuario haga una PREGUNTA:
1. Respondo SOLO la pregunta.
2. Paro.
3. Espero instrucción explícita.

PROHIBIDO actuar por cuenta propia ante una pregunta: no editar archivos, no
commitear, no crear tickets, no correr comandos con efectos. Esta regla está
POR ENCIMA de cualquier skill, flujo o impulso de "aprovechar" el turno.
Pregunta = responder y parar. Sin excepciones.

---
# Herdrate Vue TUI Library — Developer Rules

## Commands
```sh
pnpm test              # Run all vitest tests
pnpm lint              # Biome lint
pnpm check             # Biome format check
pnpm exec vue-tsc --noEmit  # TypeScript type check
pnpm build             # Build with turbo
pnpm format            # Auto-format with biome
```

## TDD Rules
1. Write spec first, impl second.
2. Run tests after every component: `pnpm test -- --reporter verbose`
3. Run `pnpm lint && pnpm exec vue-tsc --noEmit` before each commit.

## Structure per component
```
src/components/<kebab-case>/
  <PascalCase>.vue
src/components/__tests__/
  <PascalCase>.spec.ts
docs/components/
  <kebab-case>.md
```

## Conventions
- Use `<style scoped>` with CSS variables from `--color-{name}`, `--bg-*`, `--border`, `--font-mono`
- Export from `src/index.ts`
- All props typed, all events documented
- Color prop always uses `Color` type from `src/types/color.ts`, defaults to `DEFAULT_COLOR`
- Docs demos must use library components (ButtonTui, Modal, etc.) instead of native HTML elements for visual examples

## Branching
- No push without verification (lint + typecheck + test)

## Commit Policy

NEVER create git commits unless the user explicitly requests it. This overrides any skill or workflow that suggests committing as a final step.

## Ticket / Issue Policy

NEVER create or edit Linear tickets (or any external issue/ticket) without the user explicitly asking for it. Creating a ticket is a mutation an agent must never do on its own initiative — even when a finding, follow-up, or proposal seems obvious. If you think a ticket is warranted, propose it in the conversation and ask the user first; only create it after an explicit request. This also covers branch names derived from tickets: do not branch off a ticket that was not requested.

This rule exists because tickets (unlike code) are project-planning artifacts the user owns: content, priority, and even whether an item deserves a ticket are the user's decisions, not the agent's. The same applies to changelog/package edits that imply a release decision — propose, don't act.


## Pi lifecycle command guard (gentle-ai)

> **Histórico (gentle-pi v2.2.0):** este guard era un problema de la extensión
> gentle-pi v2.2.0 y fue eliminado en la v2.3.0. Con la versión actual los comandos
> compuestos (con `&&`, `;`, `|`, backtick o `$(`) ya no se bloquean. Esta sección
> se conserva como referencia histórica únicamente.

`git commit` / `git push` / `glab mr ...` desde el bash tool se bloquean si el
comando tiene `&&`, `;`, `|`, backtick o `$(` (reporte: "Compound or wrapped
lifecycle command ... must fail closed"). NO tiene que ver con RDD; RDD off no
bloquea. El guard es stateless: cada comando se evalúa de forma aislada, no queda
"trabado" tras un bloqueo.

Fix: un solo comando directo, sin `&&` ni `cd`, preferiblemente
`git -C <ruta-absoluta> <subcommand> -m "mensaje de una sola linea"`.
IMPORTANTE: el mensaje del `-m` debe ser UNA sola linea (sin saltos de linea);
un cuerpo multilinea introduce un `\n` sin comillar que dispara el mismo bloqueo.
Si un comando "simple" sigue bloqueando, no es estado persistido: tiene algun
control-char sin comillar (`;`, `|`, `&`, backtick, `$(` o `\n`) en la linea.

## Formato HTML / Vue / Ionic (legibilidad para review)

- Dejá UNA línea en blanco entre cada par de elementos hermanos, en TODOS los niveles de anidación (no solo primer nivel).
- No agregues línea en blanco justo después de la apertura ni justo antes del cierre, solo ENTRE hermanos.

Ejemplo correcto:

```vue
<ion-item>
  <ion-label>Título</ion-label>

  <ion-button>Guardar</ion-button>
</ion-item>
```

Ejemplo incorrecto (sin saltos):

```vue
<ion-item>
  <ion-label>Título</ion-label>
  <ion-button>Guardar</ion-button>
</ion-item>
```


## Changelog (regla de niveles)

Tres changelogs, sin duplicar: los de paquete (`packages/vue/CHANGELOG.md`, `docs/CHANGELOG.md`) llevan el detalle tecnico y versionan independiente; el raiz (`CHANGELOG.md`) lleva el resumen user-facing de cada delivery en lenguaje plano.
