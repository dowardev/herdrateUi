# Task 2: Catppuccin Design Tokens & Theme System

## Goal
Implement a complete theme system based on Catppuccin Mocha and Latte, including raw tokens, semantic mapping, and a theme override system.

## Phases
- [ ] Phase 1: Raw Tokens (`tokens.css`)
  - Implement Catppuccin Mocha (Dark) and Latte (Light) palettes.
- [ ] Phase 2: Semantic Mapping (`theme.css`)
  - Map raw tokens to semantic variables (`--bg`, `--accent`, etc.).
  - Implement theme switching logic (`prefers-color-scheme`, `.theme-light`, `.theme-dark`).
- [ ] Phase 3: Reset Styles (`reset.css`)
  - Setup terminal-like box-sizing and font-family defaults.
- [ ] Phase 4: Integration (`index.ts`)
  - Export all styles for consumers.
- [ ] Phase 5: Verification & Linting
  - Run Biome lint/format.
  - Verify theme switching.
- [ ] Phase 6: Final Report & Commit
  - Write report to `/home/dowardev/Documentos/programacion/ui-lib/.git/sdd/task-2-report.md`.
  - Commit changes.

## Decisions
- Use CSS variables for all tokens.
- Follow Catppuccin Mocha/Latte specifications.
