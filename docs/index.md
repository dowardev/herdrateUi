# Herdrate Vue UI Library

A Vue 3 component library with a **Catppuccin** theme and CLI/terminal aesthetics.

It includes a [semantic color system](/color) in the style of Ionic with 9 colors (`primary` → `dark`) and 3 fill modes (`solid`, `outline`, `clear`), all automatically adapted to dark/light themes.

## Components

| Component | Description |
|---|---|
| [Panel](/components/panel) | Container with header, body, footer and vertical divider |
| [Divider](/components/divider) | Horizontal/vertical terminal-style divider |
| [Badge](/components/badge) | Label with color variants |
| [TipBox](/components/tipbox) | Notification with icon, title and message |
| [SnakeLoader](/components/snakeloader) | Snake-style loading animation |

## Quick demo

<Panel divider>
  <template #header>📦 Panel Demo</template>
  This is a Panel rendered live from markdown.
  <template #footer>⚡ Footer</template>
</Panel>

<Divider orientation="horizontal" />

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
  <Badge color="success">Success</Badge>
  <Badge color="warning">Warning</Badge>
  <Badge color="danger">Danger</Badge>
  <Badge color="primary">Primary</Badge>
</div>

<Divider orientation="horizontal" />

<TipBox color="primary" title="Info" message="Components working live." />

<TipBox color="warning" title="Warning" message="Check the color tokens." />

<TipBox color="danger" title="Error" message="This is just a demo." />

<Divider orientation="horizontal" />

<SnakeLoader speed="1.2s" color="primary">Loading...</SnakeLoader>