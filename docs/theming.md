# Theming

The library's CSS custom properties follow a **surface-layer taxonomy**. Each token points to a concrete visual layer, not to a specific component: if you override a layer, every component that uses it updates together.

## Layers

| Layer | Token | Visual role |
|------|-------|----------------|
| base | `--bg` | app background, empty inputs |
| intermediate | `--bg-alt` | hover / pressed |
| elevated | `--bg-elevated` | modals, dropdowns, popovers |
| panel | `--bg-panel` | cards, accordions, side panels |
| border | `--border` | surface outlines |
| text | `--text` / `--text-muted` | primary / secondary text |
| accent | `--accent` | hover and selection |
| palette | `--color-primary` …`--color-dark` | 9 semantic colors (Catppuccin) |
| typography | `--font-mono` | monospace stack |
| motion | `--cp-ease` / `--cp-ease-snap` | easing curves |

## Example — sepia theme

```css
.sepia-card {
  --bg-panel: #fffaf0;
  --border: #c9a87c;
  --text: #3a2a1a;
  --color-primary: #8b4513;
}
```

It works because the card uses `var(--bg-panel)` for its background, `var(--border)` for its border, `var(--text)` for the text color, and `var(--color-primary)` for its accents. All those `var()` calls live in the component's scoped CSS and receive the normal cascade.

## When to change one thing vs the whole theme

**Change one thing** when you want to adjust a specific detail:

```css
.my-section {
  --bg-elevated: #1e1e2e;   /* only changes modals */
}
```

That touches one variable. Only what uses it changes; the rest stays the same.

**Change the whole theme** when you want a new look from scratch (e.g. dark mode). Override the variables in `:root`:

```css
:root {
  --bg: #1e1e2e;
  --bg-alt: #2a2a3a;
  --bg-elevated: #333344;
  --bg-panel: #2d2d3d;
  --text: #e0e0e8;
  --text-muted: #a0a0b0;
  --border: #444455;
  --color-primary: #cba6f7;
  /* ... */
}
```

That replaces the whole theme of your app in one go.

## How it's applied per component

Each component page has its own `## CSS Custom Properties` section with the table of tokens that particular component uses, its actual default, and a short description. The layer is the same; the list is per component.

## API conventions (props and slots)

Each content area of a component follows one of three patterns, chosen by what makes semantic sense. The rule makes the API predictable: if you know the pattern, you know how to invoke the component.

### 1. Replaceable content (prop + slot, slot wins)

Areas like the title, description, header, or footer of a card that accept plain text as a default value and rich markup when needed.

```vue
<h3 class="card-title">
  <slot name="title">{{ title }}</slot>
</h3>
```

Use:

```vue
<Card title="Plain" />                                  <!-- prop only -->
<Card><template #title>★ <em>rich</em></template></Card> <!-- slot only -->
<Card title="Fell"><template #title>Rich</template></Card> <!-- slot overrides prop -->
```

**Rule**: the slot wins. The prop is the fallback rendered when the slot is empty.

**Components using this pattern**: `Card` (`title`, `description`, `header`, `footer`), `Modal` (`title`, `footer`), `Box` (`header`, `footer`), `Panel` (`header`, `footer`), `TreeNode` (`label`), `StatusBar` (`info`).

### 2. Optional content (slot only, conditional render)

Areas like a footer of actions or an extra header block that do not have a reasonable default value — if there is no slot, the block is not rendered.

```vue
<footer v-if="$slots.footer" class="card-foot">
  <slot name="footer" />
</footer>
```

Use:

```vue
<Card><template #footer><Button>OK</Button></template></Card>
<!-- without a slot, the block does not appear -->
```

**Components using this pattern**: none in the current version — every area that used to be slot-only migrated to pattern 1 in LBDS-285. If you add a new area in the future, use this pattern when there is no reasonable default.

### 3. Visual / styling (prop only)

Colors, shadows, borders, typography variants. Slots do not make sense here because you want to apply a scalar value (an enum, a boolean), not markup.

```vue
<button :class="`color-${color}`">Click</button>
```

Use:

```vue
<ButtonTui color="primary" fill="solid" :border="false" />
```

**Rule**: if the only sensible value is a scalar, it is prop-only. Do not add a slot.

**Components using this pattern**: every visual boolean/enum (`color`, `border`, `shadow`, `design`, `fill`, `icon`, `size`, etc.) on any component.

## How to choose between the three

- **Does a one-line default text value make sense?** → Pattern 1 (prop + slot).
- **No reasonable default and the area is purely "extra"?** → Pattern 2 (slot only).
- **Is it a scalar value that is not text?** → Pattern 3 (prop only).