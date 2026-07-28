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