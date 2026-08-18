<script setup>
import { panelMeta } from './meta/panel'
</script>

# Panel

Versatile container with header, body and footer, plus optional vertical divider.

<PlayHost :meta="panelMeta" />

## Demo

<Panel divider>
  <template #header>&#x1f4cb; Panel</template>
  Main panel content.
  <template #footer>&#x26a1; Footer with information</template>
</Panel>

<Panel>
  <template #header>&#x1f4cb; No divider</template>
  Panel without the vertical divider.
  <template #footer>Footer</template>
</Panel>

```vue
<Panel divider>
  <template #header>📋 Panel</template>
  Main panel content.
  <template #footer>⚡ Footer with information</template>
</Panel>

<Panel>
  <template #header>📋 No divider</template>
  Panel without the vertical divider.
  <template #footer>Footer</template>
</Panel>
```

## Props

### divider

Shows a vertical divider (`│`) to the left of the content.

<Panel divider>
  <template #header>With divider</template>
  Content with vertical line.
  <template #footer>Footer</template>
</Panel>

<Panel>
  <template #header>No divider</template>
  Content without vertical line.
  <template #footer>Footer</template>
</Panel>

```vue
<Panel divider>
<Panel>
```

## Slots

### header

Panel header.

```vue
<Panel>
  <template #header>Header</template>
  ...
</Panel>
```

### default

Main panel content.

### footer

Panel footer.

```vue
<Panel>
  ...
  <template #footer>Footer</template>
</Panel>
```

## API

| Prop | Type | Default | Description |
|---|---|---|---|
| `divider` | `boolean` | `false` | Show vertical divider (`│`) |

## Tokens used

`--bg-panel`, `--bg`, `--text`, `--border`, `--font-mono`