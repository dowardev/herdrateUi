# Expansion de Componentes TUI — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:test-driven-development.

**Goal:** Add 21 new TUI components across 5 blocks (form, data, nav, overlay, presentation) plus docs for existing components.

**Architecture:** Each component is self-contained in `src/components/<kebab>/<PascalCase>.vue`, tested in `src/components/__tests__/<PascalCase>.spec.ts`, documented in `docs/components/<kebab>.md`. Color system from `src/types/color.ts`.

**Tech Stack:** Vue 3 `<script setup>`, Vitest + @vue/test-utils, CSS scoped with CSS variables, Biome lint, pnpm.

## Global Constraints

- Color prop uses `Color` type from `src/types/color.ts`, defaults to `DEFAULT_COLOR`
- Fill prop uses `Fill` type where applicable
- Style uses `<style scoped>` with `--color-{name}`, `--bg-*`, `--border`, `--font-mono`
- Components exported from `src/index.ts`
- Tests in `src/components/__tests__/<PascalCase>.spec.ts`
- Docs in `docs/components/<kebab>.md`
- All props typed, no `any` where possible
- TDD: spec first, impl second
- Run `pnpm test` after each component, then `pnpm lint && pnpm exec vue-tsc --noEmit`

---

### Task 1: Box component

**Files:**
- Create: `packages/vue/src/components/box/Box.vue`
- Create: `packages/vue/src/components/__tests__/Box.spec.ts`
- Modify: `packages/vue/src/index.ts` (add export)
- Create: `docs/components/box.md`

**Interfaces:**
- Consumes: `Color`, `DEFAULT_COLOR` from `../../types/color`
- Produces: `Box` component exported from `src/index.ts`

- [ ] **Step 1: Write failing test**

```ts
// Box.spec.ts
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Box from '../box/Box.vue';

describe('Box', () => {
  const variants = ['single', 'double', 'rounded', 'ascii', 'none'] as const;

  variants.forEach((variant) => {
    it(`renders variant: ${variant}`, () => {
      const wrapper = mount(Box, {
        props: { borderStyle: variant },
        slots: { default: 'Content' },
      });
      const box = wrapper.find('.box');
      expect(box.exists()).toBe(true);
      expect(box.classes()).toContain(`box-border-${variant}`);
    });
  });

  it('renders default content', () => {
    const wrapper = mount(Box, { slots: { default: 'Hello' } });
    expect(wrapper.text()).toContain('Hello');
  });

  it('renders header slot', () => {
    const wrapper = mount(Box, {
      slots: { header: 'Title' },
    });
    expect(wrapper.find('.box-header').text()).toBe('Title');
  });

  it('renders footer slot', () => {
    const wrapper = mount(Box, {
      slots: { footer: 'Footer' },
    });
    expect(wrapper.find('.box-footer').text()).toBe('Footer');
  });

  it('applies color class', () => {
    const wrapper = mount(Box, {
      props: { color: 'success' },
    });
    expect(wrapper.classes()).toContain('color-success');
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

```bash
pnpm test -- Box.spec.ts --reporter verbose
```
Expected: FAIL — module not found / component missing

- [ ] **Step 3: Write minimal Box implementation**

```vue
<template>
  <div :class="['box', `box-border-${borderStyle}`, `color-${color}`]">
    <div v-if="$slots.header" class="box-header">
      <slot name="header" />
    </div>
    <div class="box-body">
      <slot />
    </div>
    <div v-if="$slots.footer" class="box-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

withDefaults(
  defineProps<{
    borderStyle?: 'single' | 'double' | 'rounded' | 'ascii' | 'none';
    color?: Color;
  }>(),
  {
    borderStyle: 'single' as const,
    color: DEFAULT_COLOR,
  },
);
</script>

<style scoped>
.box {
  display: inline-block;
  font-family: var(--font-mono);
  padding: 0.5rem;
  border: 1px solid var(--border);
}

.box-border-single  { border-style: solid; }
.box-border-double   { border-style: double; }
.box-border-rounded { border-radius: 0.5rem; }
.box-border-ascii   { border-style: dashed; }
.box-border-none   { border: none; }

.box-header {
  margin-bottom: 0.25rem;
  opacity: 0.7;
}

.box-footer {
  margin-top: 0.25rem;
  opacity: 0.7;
}

.box-body {
  padding: 0.25rem 0;
}
</style>
```

- [ ] **Step 4: Run test to verify it passes**

```bash
pnpm test -- Box.spec.ts --reporter verbose
```
Expected: PASS

- [ ] **Step 5: Add export to index.ts**

Add to `packages/vue/src/index.ts`:
```ts
export { default as Box } from './components/box/Box.vue';
```

- [ ] **Step 6: Write doc page**

Create `docs/components/box.md` with Demo, Code, API sections.

- [ ] **Step 7: Commit**

```bash
git add packages/vue/src/components/box packages/vue/src/components/__tests__/Box.spec.ts packages/vue/src/index.ts docs/components/box.md
git commit -m "feat: add Box component with border style variants"
```

---

### Task 2: ProgressBar component

**Files:**
- Create: `packages/vue/src/components/progress-bar/ProgressBar.vue`
- Create: `packages/vue/src/components/__tests__/ProgressBar.spec.ts`
- Modify: `packages/vue/src/index.ts` (add export)
- Create: `docs/components/progress-bar.md`

**Interfaces:**
- Consumes: `Color`, `DEFAULT_COLOR` from `../../types/color`
- Produces: `ProgressBar` component exported from `src/index.ts`

- [ ] **Step 1: Write failing test**

```ts
// ProgressBar.spec.ts
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import ProgressBar from '../progress-bar/ProgressBar.vue';

describe('ProgressBar', () => {
  it('renders value and max', () => {
    const wrapper = mount(ProgressBar, {
      props: { value: 50, max: 100 },
    });
    expect(wrapper.text()).toContain('50%');
  });

  it('renders label when provided', () => {
    const wrapper = mount(ProgressBar, {
      props: { value: 30, max: 100, label: 'Loading' },
    });
    expect(wrapper.text()).toContain('Loading');
  });

  it('renders block variant with filled blocks', () => {
    const wrapper = mount(ProgressBar, {
      props: { value: 50, max: 100, variant: 'block' },
    });
    const bar = wrapper.find('.progress-fill').text();
    expect(bar).toMatch(/[█░]+/);
  });

  it('renders ascii variant', () => {
    const wrapper = mount(ProgressBar, {
      props: { value: 50, max: 100, variant: 'ascii' },
    });
    const bar = wrapper.find('.progress-fill').text();
    expect(bar).toMatch(/[#-]+/);
  });

  it('applies color class', () => {
    const wrapper = mount(ProgressBar, {
      props: { value: 75, max: 100, color: 'success' },
    });
    expect(wrapper.classes()).toContain('color-success');
  });

  it('clamps value to max', () => {
    const wrapper = mount(ProgressBar, {
      props: { value: 150, max: 100 },
    });
    expect(wrapper.text()).toContain('100%');
  });

  it('handles zero value', () => {
    const wrapper = mount(ProgressBar, {
      props: { value: 0, max: 100 },
    });
    expect(wrapper.text()).toContain('0%');
  });
});
```

- [ ] **Step 2: Run test**

```bash
pnpm test -- ProgressBar.spec.ts --reporter verbose
```
Expected: FAIL

- [ ] **Step 3: Write minimal implementation**

```vue
<template>
  <div :class="['progress-bar', `color-${color}`]">
    <span v-if="label" class="progress-label">{{ label }}</span>
    <span class="progress-bar-inner">
      <span class="progress-fill">{{ fill }}</span>
      <span class="progress-text">{{ clampedValue }}%</span>
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

const props = withDefaults(
  defineProps<{
    value: number;
    max?: number;
    color?: Color;
    label?: string;
    variant?: 'block' | 'thin' | 'ascii';
  }>(),
  {
    max: 100,
    color: DEFAULT_COLOR,
    variant: 'block' as const,
  },
);

const totalBars = 10;
const clampedValue = computed(() => Math.min(100, Math.round((props.value / props.max) * 100)));
const filled = computed(() => Math.round((clampedValue.value / 100) * totalBars));
const empty = computed(() => totalBars - filled.value);

const fillBlock = computed(() => {
  switch (props.variant) {
    case 'block': return '█';
    case 'thin': return '━';
    case 'ascii': return '#';
    default: return '█';
  }
});

const emptyBlock = computed(() => {
  switch (props.variant) {
    case 'block': return '░';
    case 'thin': return '─';
    case 'ascii': return '-';
    default: return '░';
  }
});

const fill = computed(() =>
  fillBlock.value.repeat(filled.value) + emptyBlock.value.repeat(empty.value)
);
</script>

<style scoped>
.progress-bar {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.85rem;
}

.progress-label {
  opacity: 0.7;
}

.progress-percent {
  opacity: 0.7;
  min-width: 3rem;
  text-align: right;
}
</style>
```

- [ ] **Step 4: Run test to verify it passes**

```bash
pnpm test -- ProgressBar.spec.ts --reporter verbose
```
Expected: PASS

- [ ] **Step 5: Add export to index.ts**

```ts
export { default as ProgressBar } from './components/progress-bar/ProgressBar.vue';
```

- [ ] **Step 6: Write doc page** `docs/components/progress-bar.md`

- [ ] **Step 7: Commit**

---

### Task 3: Spinner component

**Files:**
- Create: `packages/vue/src/components/loader/Spinner.vue`
- Create: `packages/vue/src/components/__tests__/Spinner.spec.ts`
- Modify: `packages/vue/src/index.ts` (add export)
- Create: `docs/components/spinner.md`

**Interfaces:**
- Consumes: `Color`, `DEFAULT_COLOR`
- Produces: `Spinner` component

- [ ] **Step 1: Write failing test**

```ts
// Spinner.spec.ts
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Spinner from '../loader/Spinner.vue';

describe('Spinner', () => {
  it('renders default dots variant', () => {
    const wrapper = mount(Spinner);
    expect(wrapper.find('.spinner').exists()).toBe(true);
  });

  it('renders bars variant', () => {
    const wrapper = mount(Spinner, { props: { variant: 'bars' } });
    expect(wrapper.find('.spinner').exists()).toBe(true);
  });

  it('renders earth variant', () => {
    const wrapper = mount(Spinner, { props: { variant: 'earth' } });
    expect(wrapper.text()).toMatch(/[🌍🌎🌏]/);
  });

  it('renders pulse variant', () => {
    const wrapper = mount(Spinner, { props: { variant: 'pulse' } });
    expect(wrapper.find('.spinner').exists()).toBe(true);
  });

  it('renders default slot text', () => {
    const wrapper = mount(Spinner, { slots: { default: 'Loading...' } });
    expect(wrapper.text()).toContain('Loading...');
  });

  it('applies color class', () => {
    const wrapper = mount(Spinner, { props: { color: 'warning' } });
    expect(wrapper.classes()).toContain('color-warning');
  });
});
```

- [ ] **Step 2: Run test**

```bash
pnpm test -- Spinner.spec.ts --reporter verbose
```
Expected: FAIL

- [ ] **Step 3: Write minimal Spinner implementation**

```vue
<template>
  <span :class="['spinner', `color-${color}`]" :style="{ animationDuration: speed }">
    <span class="spinner-char">{{ currentChar }}</span>
    <slot />
  </span>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

const props = withDefaults(
  defineProps<{
    variant?: 'dots' | 'bars' | 'earth' | 'pulse';
    speed?: string;
    color?: Color;
  }>(),
  {
    variant: 'dots' as const,
    speed: '1.2s',
    color: DEFAULT_COLOR,
  },
);

const frames: Record<string, string[]> = {
  dots: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'],
  bars: ['▁', '▃', '▄', '▅', '▆', '▇', '█', '▇', '▆', '▅', '▄', '▃'],
  earth: ['🌍', '🌎', '🌏'],
  pulse: ['█', '▓', '▒', '░', '▒', '▓'],
};

const currentChar = ref(frames[props.variant][0]);
let interval: ReturnType<typeof setInterval> | null = null;
let idx = 0;

onMounted(() => {
  const speedMs = parseFloat(props.speed) * 1000 / frames[props.variant].length;
  interval = setInterval(() => {
    idx = (idx + 1) % frames[props.variant].length;
    currentChar.value = frames[props.variant][idx];
  }, speedMs);
});

onUnmounted(() => {
  if (interval) clearInterval(interval);
});
</script>

<style scoped>
.spinner {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-mono);
  font-size: 0.85rem;
}

.spinner-char {
  display: inline-block;
  width: 1.2em;
  text-align: center;
}
</style>
```

- [ ] **Step 4: Run test to verify it passes**

```bash
pnpm test -- Spinner.spec.ts --reporter verbose
```
Expected: PASS

- [ ] **Step 5: Add export to index.ts**

```ts
export { default as Spinner } from './components/loader/Spinner.vue';
```

- [ ] **Step 6: Write doc page** `docs/components/spinner.md`

- [ ] **Step 7: Commit**

---

### Task 4: Kbd + KbdGroup components

**Files:**
- Create: `packages/vue/src/components/kbd/Kbd.vue`
- Create: `packages/vue/src/components/kbd/KbdGroup.vue`
- Create: `packages/vue/src/components/__tests__/Kbd.spec.ts`
- Create: `packages/vue/src/components/__tests__/KbdGroup.spec.ts`
- Modify: `packages/vue/src/index.ts` (add exports, keep KeyHint export)
- Create: `docs/components/kbd.md`

**Interfaces:**
- Consumes: nothing special
- Produces: `Kbd`, `KbdGroup` components

- [ ] **Step 1: Write failing test**

```ts
// Kbd.spec.ts
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Kbd from '../kbd/Kbd.vue';

describe('Kbd', () => {
  it('renders key text', () => {
    const wrapper = mount(Kbd, { slots: { default: 'Ctrl' } });
    expect(wrapper.text()).toBe('Ctrl');
  });

  it('renders sm size', () => {
    const wrapper = mount(Kbd, { props: { size: 'sm' }, slots: { default: 'Esc' } });
    expect(wrapper.classes()).toContain('kbd-sm');
  });

  it('renders md size by default', () => {
    const wrapper = mount(Kbd, { slots: { default: 'F1' } });
    expect(wrapper.classes()).toContain('kbd-md');
  });
});

// KbdGroup.spec.ts
import KbdGroup from '../kbd/KbdGroup.vue';

describe('KbdGroup', () => {
  it('renders keys separated by +', () => {
    const wrapper = mount(KbdGroup, {
      props: { keys: ['Ctrl', 'P'] },
    });
    expect(wrapper.text()).toContain('Ctrl+P');
  });

  it('uses custom separator', () => {
    const wrapper = mount(KbdGroup, {
      props: { keys: ['Cmd', 'Shift', 'F'], separator: ' + ' },
    });
    expect(wrapper.text()).toContain('Cmd + Shift + F');
  });
});
```

- [ ] **Step 2: Run test**

```bash
pnpm test -- Kbd KbdGroup --reporter verbose
```
Expected: FAIL

- [ ] **Step 3: Write minimal Kbd and KbdGroup**

```vue
<!-- Kbd.vue -->
<template>
  <span :class="['kbd', `kbd-${size}`]">
    <slot />
  </span>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: 'sm' | 'md';
  }>(),
  {
    size: 'md' as const,
  },
);
</script>

<style scoped>
.kbd {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-mono);
  border: 1px solid var(--border);
  background: var(--bg-panel);
  border-radius: 3px;
}

.kbd-sm {
  padding: 0 0.25rem;
  font-size: 0.7rem;
}

.kbd-md {
  padding: 0.1rem 0.35rem;
  font-size: 0.8rem;
}
</style>
```

```vue
<!-- KbdGroup.vue -->
<template>
  <span class="kbd-group">
    <Kbd v-for="(key, i) in keys" :key="i" :size="size">
      <template v-if="i > 0">{{ separator }}</template>
      {{ key }}
    </Kbd>
  </span>
</template>

<script setup lang="ts">
import Kbd from './Kbd.vue';

withDefaults(
  defineProps<{
    keys: string[];
    separator?: string;
    size?: 'sm' | 'md';
  }>(),
  {
    separator: '+',
    size: 'md' as const,
  },
);
</script>

<style scoped>
.kbd-group {
  display: inline-flex;
  align-items: center;
  gap: 0.1rem;
}
</style>
```

- [ ] **Step 4: Run test to verify it passes**

```bash
pnpm test -- Kbd KbdGroup --reporter verbose
```
Expected: PASS

- [ ] **Step 5: Add exports to index.ts**

```ts
export { default as Kbd } from './components/kbd/Kbd.vue';
export { default as KbdGroup } from './components/kbd/KbdGroup.vue';
```

- [ ] **Step 6: Write doc page** `docs/components/kbd.md`

- [ ] **Step 7: Commit**

---

### Task 5: Input component

**Files:**
- Create: `packages/vue/src/components/input/Input.vue`
- Create: `packages/vue/src/components/__tests__/Input.spec.ts`
- Modify: `packages/vue/src/index.ts` (add export)
- Create: `docs/components/input.md`

**Interfaces:**
- Consumes: `Color`, `DEFAULT_COLOR` from `../../types/color`
- Produces: `Input` component

- [ ] **Step 1: Write failing test**

```ts
// Input.spec.ts
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Input from '../input/Input.vue';

describe('Input', () => {
  it('renders input element', () => {
    const wrapper = mount(Input);
    expect(wrapper.find('input').exists()).toBe(true);
  });

  it('v-model updates value', async () => {
    const wrapper = mount(Input, { props: { modelValue: '', 'onUpdate:modelValue': (e: string) => wrapper.setProps({ modelValue: e }) } });
    const input = wrapper.find('input');
    await input.setValue('hello');
    expect(wrapper.props('modelValue')).toBe('hello');
  });

  it('renders prefix', () => {
    const wrapper = mount(Input, { slots: { prefix: '>' } });
    expect(wrapper.text()).toContain('>');
  });

  it('applies error class', () => {
    const wrapper = mount(Input, { props: { error: 'Required' } });
    expect(wrapper.classes()).toContain('input-error');
    expect(wrapper.text()).toContain('Required');
  });

  it('renders placeholder', () => {
    const wrapper = mount(Input, { props: { placeholder: 'Type here' } });
    expect(wrapper.find('input').attributes('placeholder')).toBe('Type here');
  });

  it('applies color class', () => {
    const wrapper = mount(Input, { props: { color: 'warning' } });
    expect(wrapper.classes()).toContain('color-warning');
  });

  it('emits focus and blur', async () => {
    const wrapper = mount(Input);
    const input = wrapper.find('input');
    await input.trigger('focus');
    expect(wrapper.emitted('focus')).toBeTruthy();
    await input.trigger('blur');
    expect(wrapper.emitted('blur')).toBeTruthy();
  });

  it('emits enter on Enter key', async () => {
    const wrapper = mount(Input);
    await wrapper.find('input').trigger('keydown.enter');
    expect(wrapper.emitted('enter')).toBeTruthy();
  });

  it('disabled prevents input', () => {
    const wrapper = mount(Input, { props: { disabled: true } });
    expect(wrapper.find('input').attributes('disabled')).toBeDefined();
  });
});
```

- [ ] **Step 2: Run test**

```bash
pnpm test -- Input.spec.ts --reporter verbose
```
Expected: FAIL

- [ ] **Step 3: Write minimal Input**

```vue
<template>
  <label :class="['input-wrapper', `color-${color}`, {
    'input-error': error,
    'input-disabled': disabled,
  }]">
    <span v-if="label" class="input-label">{{ label }}</span>
    <span class="input-field">
      <span v-if="$slots.prefix" class="input-prefix">
        <slot name="prefix" />
      </span>
      <input
        ref="inputRef"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        @input="onInput"
        @focus="emit('focus')"
        @blur="emit('blur')"
        @keydown.enter="emit('enter', (modelValue as string))"
        class="input-native"
      />
    </span>
    <span v-if="error" class="input-error-msg">{{ error }}</span>
  </label>
</template>

<script setup lang="ts">
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    label?: string;
    placeholder?: string;
    error?: string;
    disabled?: boolean;
    color?: Color;
  }>(),
  {
    modelValue: '',
    color: DEFAULT_COLOR,
  },
);

const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void;
  (e: 'focus'): void;
  (e: 'blur'): void;
  (e: 'enter', v: string): void;
}>();

function onInput(ev: Event) {
  const target = ev.target as HTMLInputElement;
  emit('update:modelValue', target.value);
}
</script>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-family: var(--font-mono);
  font-size: 0.85rem;
}

.input-label {
  opacity: 0.7;
  font-size: 0.75rem;
}

.input-field {
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--border);
  background: var(--bg);
  padding: 0.2rem 0.4rem;
}

.input-prefix {
  opacity: 0.5;
  margin-right: 0.25rem;
}

.input-native {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
}

.input-error-msg {
  font-size: 0.7rem;
  color: var(--color-danger);
}

.input-error .input-field {
  border-color: var(--color-danger);
}

.input-disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
```

- [ ] **Step 4: Run test to verify it passes**

```bash
pnpm test -- Input.spec.ts --reporter verbose
```
Expected: PASS

- [ ] **Step 5: Add export**

```ts
export { default as Input } from './components/input/Input.vue';
```

- [ ] **Step 6: Write doc page** `docs/components/input.md`

- [ ] **Step 7: Commit**

---

### Task 6: Checkbox + CheckboxGroup components

**Files:**
- Create: `packages/vue/src/components/checkbox/Checkbox.vue`
- Create: `packages/vue/src/components/checkbox/CheckboxGroup.vue`
- Create: `packages/vue/src/components/__tests__/Checkbox.spec.ts`
- Create: `packages/vue/src/components/__tests__/CheckboxGroup.spec.ts`
- Modify: `packages/vue/src/index.ts` (add exports)
- Create: `docs/components/checkbox.md`

**Interfaces:**
- Consumes: `Color`, `DEFAULT_COLOR`
- Produces: `Checkbox`, `CheckboxGroup`

- [ ] **Step 1: Write failing test**

```ts
// Checkbox.spec.ts
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Checkbox from '../checkbox/Checkbox.vue';

describe('Checkbox', () => {
  it('renders unchecked state', () => {
    const wrapper = mount(Checkbox);
    expect(wrapper.text()).toContain('[ ]');
  });

  it('renders checked state', () => {
    const wrapper = mount(Checkbox, { props: { modelValue: true } });
    expect(wrapper.text()).toContain('[x]');
  });

  it('toggles on click', async () => {
    const wrapper = mount(Checkbox, { props: { modelValue: false, 'onUpdate:modelValue': (v: boolean) => wrapper.setProps({ modelValue: v }) } });
    await wrapper.trigger('click');
    expect(wrapper.props('modelValue')).toBe(true);
    expect(wrapper.text()).toContain('[x]');
  });

  it('emits toggle event', async () => {
    const wrapper = mount(Checkbox);
    await wrapper.trigger('click');
    expect(wrapper.emitted('toggle')).toBeTruthy();
  });

  it('renders label', () => {
    const wrapper = mount(Checkbox, { slots: { default: 'Option A' } });
    expect(wrapper.text()).toContain('Option A');
  });

  it('does not toggle when disabled', async () => {
    const wrapper = mount(Checkbox, { props: { disabled: true } });
    await wrapper.trigger('click');
    expect(wrapper.text()).toContain('[ ]');
  });

  it('renders indeterminate state', () => {
    const wrapper = mount(Checkbox, { props: { indeterminate: true } });
    expect(wrapper.text()).toContain('[~]');
  });
});

// CheckboxGroup.spec.ts
import CheckboxGroup from '../checkbox/CheckboxGroup.vue';

describe('CheckboxGroup', () => {
  it('renders checkboxes from options', () => {
    const wrapper = mount(CheckboxGroup, {
      props: {
        options: [
          { value: 'a', label: 'A' },
          { value: 'b', label: 'B' },
        ],
        modelValue: [],
        'onUpdate:modelValue': () => {},
      },
    });
    expect(wrapper.findAllComponents({ name: 'Checkbox' }).length).toBe(2);
  });
});
```

- [ ] **Step 2: Run test**

```bash
pnpm test -- Checkbox CheckboxGroup --reporter verbose
```
Expected: FAIL

- [ ] **Step 3: Write minimal implementations**

```vue
<!-- Checkbox.vue -->
<template>
  <span
    :class="['checkbox', { 'checkbox-disabled': disabled }]"
    :tabindex="disabled ? -1 : 0"
    role="checkbox"
    :aria-checked="modelValue"
    @click="toggle"
    @keydown.enter="toggle"
    @keydown.space.prevent="toggle"
  >
    <span class="checkbox-box">{{ symbol }}</span>
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    modelValue?: boolean;
    disabled?: boolean;
    indeterminate?: boolean;
  }>(),
  {
    modelValue: false,
  },
);

const emit = defineEmits<{
  (e: 'update:modelValue', v: boolean): void;
  (e: 'toggle', v: boolean): void;
}>();

const symbol = computed(() => {
  if (props.indeterminate) return '[~]';
  return props.modelValue ? '[x]' : '[ ]';
});

function toggle() {
  if (props.disabled) return;
  const next = !props.modelValue;
  emit('update:modelValue', next);
  emit('toggle', next);
}
</script>

<script lang="ts">
export default { name: 'Checkbox' }
</script>

<style scoped>
.checkbox {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  cursor: pointer;
  font-family: var(--font-mono);
  font-size: 0.85rem;
}

.checkbox-disabled {
  opacity: 0.4;
  cursor: default;
}

.checkbox-box {
  min-width: 2em;
}
</style>
```

```vue
<!-- CheckboxGroup.vue -->
<template>
  <div class="checkbox-group">
    <Checkbox
      v-for="opt in options"
      :key="opt.value"
      :model-value="modelValue.includes(opt.value)"
      :disabled="opt.disabled"
      @update:model-value="onToggle(opt.value, $event)"
    >
      {{ opt.label }}
    </Checkbox>
  </div>
</template>

<script setup lang="ts">
import Checkbox from './Checkbox.vue';

const props = withDefaults(
  defineProps<{
    options: { value: string; label: string; disabled?: boolean }[];
    modelValue?: string[];
  }>(),
  { modelValue: () => [] },
);

const emit = defineEmits<{
  (e: 'update:modelValue', v: string[]): void;
  (e: 'change', v: string[]): void;
}>();

function onToggle(value: string, checked: boolean) {
  const next = checked
    ? [...props.modelValue, value]
    : props.modelValue.filter(v => v !== value);
  emit('update:modelValue', next);
  emit('change', next);
}
</script>

<style scoped>
.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
</style>
```

- [ ] **Step 4: Run test to verify it passes**

```bash
pnpm test -- Checkbox CheckboxGroup --reporter verbose
```
Expected: PASS

- [ ] **Step 5: Add exports to index.ts**

```ts
export { default as Checkbox } from './components/checkbox/Checkbox.vue';
export { default as CheckboxGroup } from './components/checkbox/CheckboxGroup.vue';
```

- [ ] **Step 6: Write doc page**

- [ ] **Step 7: Commit**

---

### Task 7: Radio + RadioGroup components

**Files:**
- Create: `packages/vue/src/components/radio/Radio.vue`
- Create: `packages/vue/src/components/radio/RadioGroup.vue`
- Create: `packages/vue/src/components/__tests__/Radio.spec.ts`
- Create: `packages/vue/src/components/__tests__/RadioGroup.spec.ts`
- Modify: `packages/vue/src/index.ts`
- Create: `docs/components/radio.md`

**Interfaces:**
- Produces: `Radio`, `RadioGroup`

- [ ] **Step 1: Write failing test**

```ts
// Radio.spec.ts
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Radio from '../radio/Radio.vue';

describe('Radio', () => {
  it('renders unchecked state', () => {
    const wrapper = mount(Radio);
    expect(wrapper.text()).toContain('( )');
  });

  it('renders checked state', () => {
    const wrapper = mount(Radio, { props: { checked: true } });
    expect(wrapper.text()).toContain('(●)');
  });

  it('renders label', () => {
    const wrapper = mount(Radio, { slots: { default: 'Option 1' } });
    expect(wrapper.text()).toContain('Option 1');
  });
});

// RadioGroup.spec.ts
import RadioGroup from '../radio/RadioGroup.vue';

describe('RadioGroup', () => {
  it('renders radio buttons from options', () => {
    const wrapper = mount(RadioGroup, {
      props: {
        options: [
          { value: 'a', label: 'A' },
          { value: 'b', label: 'B' },
        ],
        modelValue: 'a',
      },
    });
    expect(wrapper.findAllComponents({ name: 'Radio' }).length).toBe(2);
  });

  it('emits update:modelValue on selection', async () => {
    const wrapper = mount(RadioGroup, {
      props: {
        options: [{ value: 'a', label: 'A' }],
        modelValue: '',
        'onUpdate:modelValue': (v: string) => wrapper.setProps({ modelValue: v }),
      },
    });
    await wrapper.findComponent({ name: 'Radio' }).trigger('click');
    expect(wrapper.props('modelValue')).toBe('a');
  });
});
```

- [ ] **Step 3: Write minimal implementations**

```vue
<!-- Radio.vue -->
<template>
  <span class="radio" role="radio" :aria-checked="checked" @click="select">
    <span class="radio-dot">{{ checked ? '(●)' : '( )' }}</span>
    <slot />
  </span>
</template>

<script setup lang="ts">
defineProps<{
  checked?: boolean;
}>();

const emit = defineEmits<{
  (e: 'select'): void;
}>();

function select() {
  if (!checked) emit('select');
}
</script>

<script setup lang="ts">
defineOptions({ name: 'Radio' });
</script>

<style scoped>
.radio {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  cursor: pointer;
  font-family: var(--font-mono);
  font-size: 0.85rem;
}

.radio-dot {
  min-width: 2rem;
}
</style>
```

```vue
<!-- RadioGroup.vue -->
<template>
  <div class="radio-group-list">
    <Radio
      v-for="opt in options"
      :key="opt.value"
      :checked="modelValue === opt.value"
      @select="onSelect(opt.value)"
    >
      {{ opt.label }}
    </Radio>
  </div>
</template>

<script setup lang="ts">
import Radio from './Radio.vue';

defineProps<{
  options: { value: string; label: string }[];
  modelValue?: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void;
}>();

function onSelect(value: string) {
  emit('update:modelValue', value);
}
</script>

<style scoped>
.radio-group-list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
</style>
```

- [ ] **Step 4: Run tests**

```bash
pnpm test -- Radio RadioGroup --reporter verbose
```
Expected: PASS

- [ ] **Step 5: Exports + doc + commit**

---

### Task 8: Toggle component

**Files:**
- Create: `packages/vue/src/components/toggle/Toggle.vue`
- Create: `packages/vue/src/components/__tests__/Toggle.spec.ts`
- Modify: `packages/vue/src/index.ts`
- Create: `docs/components/toggle.md`

- [ ] **Step 1: Write failing test**

```ts
// Toggle.spec.ts
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Toggle from '../toggle/Toggle.vue';

describe('Toggle', () => {
  it('renders off state', () => {
    const wrapper = mount(Toggle);
    expect(wrapper.text()).toContain('OFF');
  });

  it('renders on state', () => {
    const wrapper = mount(Toggle, { props: { modelValue: true } });
    expect(wrapper.text()).toContain('ON');
  });

  it('toggles on click', async () => {
    const wrapper = mount(Toggle, { props: { modelValue: false, 'onUpdate:modelValue': (v: boolean) => wrapper.setProps({ modelValue: v }) } });
    await wrapper.trigger('click');
    expect(wrapper.props('modelValue')).toBe(true);
  });

  it('uses custom labels', () => {
    const wrapper = mount(Toggle, { props: { onLabel: 'YES', offLabel: 'NO' } });
    expect(wrapper.text()).toContain('NO');
  });

  it('applies color class', () => {
    const wrapper = mount(Toggle, { props: { color: 'success' } });
    expect(wrapper.classes()).toContain('color-success');
  });
});
```

- [ ] **Step 3: Write minimal implementation**

```vue
<template>
  <span
    :class="['toggle', `color-${modelValue ? color : DEFAULT_COLOR}`]"
    role="switch"
    :aria-checked="modelValue"
    tabindex="0"
    @click="toggle"
    @keydown.enter="toggle"
    @keydown.space.prevent="toggle"
  >
    <span class="toggle-track">
      <span class="toggle-knob">{{ modelValue ? onLabel : offLabel }}</span>
    </span>
  </span>
</template>

<script setup lang="ts">
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

const props = withDefaults(
  defineProps<{
    modelValue?: boolean;
    onLabel?: string;
    offLabel?: string;
    color?: Color;
  }>(),
  {
    modelValue: false,
    onLabel: 'ON',
    offLabel: 'OFF',
    color: DEFAULT_COLOR,
  },
);

const emit = defineEmits<{
  (e: 'update:modelValue', v: boolean): void;
  (e: 'toggle', v: boolean): void;
}>();

function toggle() {
  const next = !props.modelValue;
  emit('update:modelValue', next);
  emit('toggle', next);
}
</script>

<style scoped>
.toggle {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  user-select: none;
}

.toggle-track {
  display: flex;
  align-items: center;
  padding: 0.1rem 0.3rem;
  border: 1px solid var(--border);
  background: var(--bg-panel);
  transition: background 0.15s;
}

.toggle-knob {
  min-width: 2rem;
  text-align: center;
}
</style>
```

- [ ] **Step 4: Run tests → PASS**

- [ ] **Step 5: Exports + doc + commit**

---

### Task 9: Select component

**Files:**
- Create: `packages/vue/src/components/select/Select.vue`
- Create: `packages/vue/src/components/__tests__/Select.spec.ts`
- Modify: `packages/vue/src/index.ts`
- Create: `docs/components/select.md`

- [ ] **Step 1: Write test**

```ts
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Select from '../select/Select.vue';

describe('Select', () => {
  const options = [
    { value: 'a', label: 'Option A' },
    { value: 'b', label: 'Option B' },
    { value: 'c', label: 'Option C' },
  ];

  it('renders list of options', () => {
    const wrapper = mount(Select, { props: { options } });
    expect(wrapper.findAll('.select-item').length).toBe(3);
  });

  it('highlights selected option', () => {
    const wrapper = mount(Select, { props: { options, modelValue: 'b' } });
    expect(wrapper.find('.select-item.active').exists()).toBe(true);
  });

  it('emits update:modelValue on click', async () => {
    const wrapper = mount(Select, { props: { options, modelValue: 'a' } });
    await wrapper.findAll('.select-item')[1].trigger('click');
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['b']);
  });

  it('marks disabled options', () => {
    const opts = [
      { value: 'a', label: 'A' },
      { value: 'b', label: 'B', disabled: true },
    ];
    const wrapper = mount(Select, { props: { options: opts } });
    expect(wrapper.findAll('.select-item')[1].classes()).toContain('disabled');
  });
});
```

- [ ] **Step 3: Write implementation**

```vue
<template>
  <div class="select">
    <div
      v-for="opt in options"
      :key="opt.value"
      :class="['select-item', 'bd-color-' + color, {
        active: modelValue === opt.value,
        disabled: opt.disabled,
      }]"
      @click="select(opt)"
    >
      <span class="select-cursor">{{ modelValue === opt.value ? '›' : ' ' }}</span>
      <span>{{ opt.label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

const props = withDefaults(
  defineProps<{
    options: { value: string; label: string; disabled?: boolean }[];
    modelValue?: string;
    color?: Color;
  }>(),
  {
    modelValue: '',
    color: DEFAULT_COLOR,
  },
);

const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void;
}>();

function select(opt: { value: string; disabled?: boolean }) {
  if (opt.disabled) return;
  emit('update:modelValue', opt.value);
}
</script>

<style scoped>
.select {
  display: flex;
  flex-direction: column;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  gap: 0;
}

.select-item {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.15rem 0.3rem;
  cursor: pointer;
  border-left: 2px solid transparent;
}

.select-item.active {
  border-left-color: var(--color);
}

.select-item.disabled {
  opacity: 0.4;
  cursor: default;
}

.select-cursor {
  width: 1rem;
  text-align: center;
}
</style>
```

- [ ] **Step 4: Run tests → PASS**

- [ ] **Step 5: Exports + doc + commit**

---

### Task 10: Tag + TagInput components

**Files:**
- Create: `packages/vue/src/components/tag/Tag.vue`
- Create: `packages/vue/src/components/tag/TagInput.vue`
- Create: `packages/vue/src/components/__tests__/Tag.spec.ts`
- Create: `packages/vue/src/components/__tests__/TagInput.spec.ts`
- Modify: `packages/vue/src/index.ts`
- Create: `docs/components/tag.md`

- [ ] **Step 1: Write tests**

```ts
// Tag.spec.ts
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Tag from '../tag/Tag.vue';

describe('Tag', () => {
  it('renders label', () => {
    const wrapper = mount(Tag, { props: { label: 'vue' } });
    expect(wrapper.text()).toContain('vue');
  });

  it('emits remove on × click', async () => {
    const wrapper = mount(Tag, { props: { label: 'vue' } });
    await wrapper.find('.tag-close').trigger('click');
    expect(wrapper.emitted('remove')).toBeTruthy();
  });

  it('applies color', () => {
    const wrapper = mount(Tag, { props: { label: 'test', color: 'success' } });
    expect(wrapper.classes()).toContain('color-success');
  });
});

// TagInput.spec.ts
import TagInput from '../tag/TagInput.vue';

describe('TagInput', () => {
  it('renders existing tags', () => {
    const wrapper = mount(TagInput, { props: { modelValue: ['a', 'b'] } });
    expect(wrapper.findAllComponents({ name: 'Tag' }).length).toBe(2);
  });

  it('adds tag on comma', async () => {
    const wrapper = mount(TagInput, { props: { modelValue: [], 'onUpdate:modelValue': () => {} } });
    const input = wrapper.find('input');
    await input.setValue('newtag,');
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([['newtag']]);
  });

  it('removes last tag on backspace', async () => {
    const wrapper = mount(TagInput, { props: { modelValue: ['a', 'b'], 'onUpdate:modelValue': (v: string[]) => wrapper.setProps({ modelValue: v }) } });
    const input = wrapper.find('input');
    await input.trigger('keydown.backspace');
    expect(wrapper.props('modelValue')).toEqual(['a']);
  });
});
```

- [ ] **Step 3: Write implementations** (similar pattern to Checkbox/Radio)

- [ ] **Step 4: Run tests → PASS**

- [ ] **Step 5: Exports + doc + commit**

---

### Task 11: Table component

**Files:**
- Create: `packages/vue/src/components/table/Table.vue`
- Create: `packages/vue/src/components/__tests__/Table.spec.ts`
- Modify: `packages/vue/src/index.ts`
- Create: `docs/components/table.md`

- [ ] **Step 1: Write tests**

```ts
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Table from '../table/Table.vue';

describe('Table', () => {
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age', align: 'right' as const },
  ];
  const data = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
  ];

  it('renders all rows', () => {
    const wrapper = mount(Table, { props: { columns, data } });
    expect(wrapper.findAll('.table-row').length).toBe(2);
  });

  it('renders headers', () => {
    const wrapper = mount(Table, { props: { columns, data } });
    expect(wrapper.text()).toContain('Name');
    expect(wrapper.text()).toContain('Age');
  });

  it('renders ASCII borders', () => {
    const wrapper = mount(Table, { props: { columns, data } });
    const text = wrapper.text();
    expect(text).toMatch(/─+/);
  });

  it('emits select on row click', async () => {
    const wrapper = mount(Table, { props: { columns, data, selectable: true } });
    await wrapper.find('.table-row').trigger('click');
    expect(wrapper.emitted('select')).toBeTruthy();
  });
});
```

- [ ] **Step 3: Write implementation**

```vue
<template>
  <div class="table" :style="{ '--color': `var(--color-${color})` }">
    <div class="table-border-top">
      ┌{{ columns.map(() => '─'.repeat(12)).join('┬') }}┐
    </div>
    <div class="table-row">
      <span v-for="col in columns" :key="col.key" :class="['table-header', `align-${col.align || 'left'}`]">
        {{ col.label }}
      </span>
    </div>
    <div class="table-border-sep">
      ├{{ columns.map(() => '─'.repeat(12)).join('┼') }}┤
    </div>
    <div
      v-for="(row, i) in data"
      :key="i"
      :class="['table-row', { 'table-row-selected': selectedIndex === i }]"
      @click="select(i)"
    >
      <span v-for="col in columns" :key="col.key" :class="['table-cell', `align-${col.align || 'left'}`]">
        {{ row[col.key] ?? '' }}
      </span>
    </div>
    <div class="table-border-bottom">
      └{{ columns.map(() => '─'.repeat(12)).join('┴') }}┘
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Color } from '../../types/color';
import { DEFAULT_COLOR } from '../../types/color';

withDefaults(
  defineProps<{
    columns: { key: string; label: string; align?: 'left' | 'right' | 'center' }[];
    data: Record<string, string | number>[];
    selectable?: boolean;
    color?: Color;
  }>(),
  { color: DEFAULT_COLOR },
);

const emit = defineEmits<{
  (e: 'select', row: Record<string, string | number>, index: number): void;
}>();

const selectedIndex = ref(-1);

function select(i: number) {
  selectedIndex.value = i;
  emit('select', data[i], i);
}
</script>

<style scoped>
.table {
  display: inline-flex;
  flex-direction: column;
  font-family: var(--font-mono);
  font-size: 0.8rem;
}

.table-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
  gap: 0;
}

.table-row-selected {
  background: var(--bg-panel);
}

.table-cell,
.table-header {
  padding: 0.1rem 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.align-left { text-align: left; }
.align-right { text-align: right; }
.align-center { text-align: center; }
</style>
```

- [ ] **Step 4: Run tests → PASS**

- [ ] **Step 5: Exports + doc + commit**

---

### Task 12: LogLines component

**Files:**
- Create: `packages/vue/src/components/log-lines/LogLines.vue`
- Create: `packages/vue/src/components/__tests__/LogLines.spec.ts`
- Modify: `packages/vue/src/index.ts`
- Create: `docs/components/log-lines.md`

- [ ] **Step 1: Write tests**

```ts
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import LogLines from '../log-lines/LogLines.vue';

describe('LogLines', () => {
  const lines = [
    { level: 'info', message: 'Server started' },
    { level: 'warn', message: 'High memory' },
    { level: 'error', message: 'Connection failed' },
    { level: 'debug', message: 'x = 42' },
  ];

  it('renders all lines', () => {
    const wrapper = mount(LogLines, { props: { lines } });
    expect(wrapper.findAll('.log-line').length).toBe(4);
  });

  it('renders level prefix', () => {
    const wrapper = mount(LogLines, { props: { lines } });
    expect(wrapper.text()).toContain('[info]');
    expect(wrapper.text()).toContain('[warn]');
    expect(wrapper.text()).toContain('[error]');
  });

  it('applies level class for coloring', () => {
    const wrapper = mount(LogLines, { props: { lines } });
    expect(wrapper.find('.log-level-info').exists()).toBe(true);
    expect(wrapper.find('.log-level-error').exists()).toBe(true);
  });

  it('renders timestamp when present', () => {
    const linesWithTime = [
      { level: 'info' as const, message: 'done', time: '12:00:01' },
    ];
    const wrapper = mount(LogLines, { props: { lines: linesWithTime } });
    expect(wrapper.text()).toContain('12:00:01');
  });
});
```

- [ ] **Step 3: Write implementation**

```vue
<template>
  <div ref="containerRef" class="log-lines">
    <div v-for="(line, i) in lines" :key="i" :class="['log-line', `log-level-${line.level}`]">
      <span class="log-level">[{{ line.level }}]</span>
      <span v-if="line.time" class="log-time">{{ line.time }}</span>
      <span class="log-message">{{ line.message }}</span>
    </div>
    <div v-if="!lines.length" class="log-empty">No logs.</div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue';

const props = withDefaults(
  defineProps<{
    lines: { level: 'info' | 'warn' | 'error' | 'debug'; message: string; time?: string }[];
    autoScroll?: boolean;
  }>(),
  { autoScroll: true },
);

const containerRef = ref<HTMLElement | null>(null);

watch(() => props.lines.length, async () => {
  if (props.autoScroll && containerRef.value) {
    await nextTick();
    containerRef.value.scrollTop = containerRef.value.scrollHeight;
  }
});
</script>

<style scoped>
.log-lines {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  line-height: 1.4;
  max-height: 20rem;
  overflow-y: auto;
  background: var(--bg);
  padding: 0.25rem;
}

.log-line {
  display: flex;
  gap: 0.5rem;
  white-space: pre-wrap;
  word-break: break-all;
}

.log-level {
  min-width: 5rem;
  text-transform: uppercase;
  opacity: 0.7;
}

.log-time {
  opacity: 0.5;
  min-width: 5rem;
}

.log-level-info .log-level {}
.log-level-warn .log-level { color: var(--color-warning); }
.log-level-error .log-level { color: var(--color-danger); }
.log-level-debug .log-level { color: var(--color-medium); }

.log-empty {
  opacity: 0.4;
  font-style: italic;
}
</style>
```

- [ ] **Step 4: Run tests → PASS**

- [ ] **Step 5: Exports + doc + commit**

---

### Task 13: StatusBar component

**Files:**
- Create: `packages/vue/src/components/status-bar/StatusBar.vue`
- Create: `packages/vue/src/components/__tests__/StatusBar.spec.ts`
- Modify: `packages/vue/src/index.ts`
- Create: `docs/components/status-bar.md`

- [ ] **Step 1: Write tests**

```ts
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import StatusBar from '../status-bar/StatusBar.vue';

describe('StatusBar', () => {
  it('renders left slot', () => {
    const wrapper = mount(StatusBar, { slots: { left: 'NORMAL' } });
    expect(wrapper.text()).toContain('NORMAL');
  });

  it('renders right slot', () => {
    const wrapper = mount(StatusBar, { slots: { right: '100%' } });
    expect(wrapper.text()).toContain('100%');
  });

  it('renders center slot', () => {
    const wrapper = mount(StatusBar, { slots: { center: 'main.ts' } });
    expect(wrapper.text()).toContain('main.ts');
  });

  it('renders separator between slots', () => {
    const wrapper = mount(StatusBar, { slots: { left: 'A', right: 'B' } });
    expect(wrapper.text()).toContain('│');
  });
});
```

- [ ] **Step 3: Write implementation**

```vue
<template>
  <div class="status-bar">
    <div class="status-left">
      <slot name="left" />
    </div>
    <div v-if="$slots.left && $slots.center" class="status-sep">│</div>
    <div class="status-center">
      <slot name="center" />
    </div>
    <div v-if="$slots.center && $slots.right" class="status-sep">│</div>
    <div v-if="$slots.right && !$slots.center && $slots.left" class="status-sep">│</div>
    <div class="status-right">
      <slot name="right" />
    </div>
  </div>
</template>

<style scoped>
.status-bar {
  display: flex;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  background: var(--bg-panel);
  border: 1px solid var(--border);
  padding: 0.15rem 0.5rem;
}

.status-left,
.status-center,
.status-right {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.status-center {
  flex: 1;
  justify-content: center;
}

.status-sep {
  opacity: 0.4;
  margin: 0 0.3rem;
}
</style>
```

- [ ] **Step 4: Run tests → PASS**

- [ ] **Step 5: Exports + doc + commit**

---

### Task 14: CodeBlock + CodeLine components

**Files:**
- Create: `packages/vue/src/components/code-block/CodeBlock.vue`
- Create: `packages/vue/src/components/code-block/CodeLine.vue`
- Create: `packages/vue/src/components/__tests__/CodeBlock.spec.ts`
- Modify: `packages/vue/src/index.ts`
- Create: `docs/components/code-block.md`

- [ ] **Step 1: Write tests**

```ts
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import CodeBlock from '../code-block/CodeBlock.vue';

describe('CodeBlock', () => {
  it('renders code text', () => {
    const wrapper = mount(CodeBlock, { props: { code: 'const x = 1' } });
    expect(wrapper.text()).toContain('const x = 1');
  });

  it('renders prompt per line', () => {
    const wrapper = mount(CodeBlock, { props: { code: 'ls\npwd', prompt: '$' } });
    expect(wrapper.findAll('.code-line').length).toBe(2);
  });

  it('renders language badge', () => {
    const wrapper = mount(CodeBlock, { props: { code: 'test', language: 'bash' } });
    expect(wrapper.text()).toContain('bash');
  });
});
```

- [ ] **Step 3: Write implementation**

```vue
<!-- CodeBlock.vue -->
<template>
  <div class="code-block">
    <span v-if="language" class="code-lang">[{{ language }}]</span>
    <CodeLine v-for="(line, i) : lines" :key="i" :prompt="prompt">
      {{ line }}
    </CodeLine>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import CodeLine from './CodeLine.vue';

const props = withDefaults(
  defineProps<{
    code: string;
    language?: string;
    prompt?: string;
  }>(),
  { prompt: '' },
);

const lines = computed(() => props.code.split('\n'));
</script>

<style scoped>
.code-block {
  display: flex;
  flex-direction: column;
}

.code-lang {
  font-size: 0.7rem;
  opacity: 0.5;
  margin-bottom: 0.25rem;
}
</style>
```

```vue
<!-- CodeLine.vue -->
<template>
  <div class="code-line">
    <span v-if="prompt" class="code-prompt">{{ prompt }}</span>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  prompt?: string;
}>();
</script>

<style scoped>
.code-line {
  display: flex;
  gap: 0.5rem;
  white-space: pre;
}

.code-prompt {
  opacity: 0.4;
}
</style>
```

- [ ] **Step 4: Run tests → PASS**

- [ ] **Step 5: Exports + doc + commit**

---

### Task 15: Gutter component

**Files:**
- Create: `packages/vue/src/components/gutter/Gutter.vue`
- Create: `packages/vue/src/components/__tests__/Gutter.spec.ts`
- Modify: `packages/vue/src/index.ts`
- Create: `docs/components/gutter.md`

- [ ] **Step 1: Write tests**

```ts
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Gutter from '../gutter/Gutter.vue';

describe('Gutter', () => {
  it('renders line numbers', () => {
    const wrapper = mount(Gutter, { props: { lines: 10 } });
    expect(wrapper.findAll('.gutter-line').length).toBe(10);
  });

  it('first line is 1', () => {
    const wrapper = mount(Gutter, { props: { lines: 3 } });
    expect(wrapper.find('.gutter-line').text()).toContain('1');
  });

  it('applies width class', () => {
    const wrapper = mount(Gutter, { props: { lines: 5, width: 4 } });
    const text = wrapper.find('.gutter-line').text();
    expect(text).toMatch(/^\s{0,3}[0-9]/);
  });
});
```

- [ ] **Step 3: Write implementation**

```vue
<template>
  <div class="gutter">
    <div v-for="n in lines" :key="n" class="gutter-line">
      <span class="gutter-bracket">[</span>
      {{ String(n).padStart(width, ' ') }}
      <span class="gutter-bracket">]</span>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    lines: number;
    width?: number;
  }>(),
  { width: 3 },
);
</script>

<style scoped>
.gutter {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  line-height: 1.4;
}

.gutter-line {
  display: flex;
  gap: 0.1rem;
}

.gutter-bracket {
  opacity: 0.3;
}
</style>
```

- [ ] **Step 4: Run tests → PASS**

- [ ] **Step 5: Exports + doc + commit**

---

### Task 16: ScrollView component

**Files:**
- Create: `packages/vue/src/components/scroll-view/ScrollView.vue`
- Create: `packages/vue/src/components/__tests__/ScrollView.spec.ts`
- Modify: `packages/vue/src/index.ts`
- Create: `docs/components/scroll-view.md`

- [ ] **Step 1: Write tests**

```ts
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import ScrollView from '../scroll-view/ScrollView.vue';

describe('ScrollView', () => {
  it('renders slot content', () => {
    const wrapper = mount(ScrollView, { slots: { default: '<div class="content">Hello</div>' } });
    expect(wrapper.text()).toContain('Hello');
  });

  it('renders scrollbar indicators', () => {
    const wrapper = mount(ScrollView, { slots: { default: '<div style="height: 500px">Tall</div>' } });
    expect(wrapper.find('.scroll-bar').exists()).toBe(true);
  });
});
```

- [ ] **Step 3: Write implementation**

```vue
<template>
  <div class="scroll-view">
    <div ref="viewportRef" class="scroll-viewport" @scroll="onScroll">
      <slot />
    </div>
    <div v-if="scrollPercent > 0" class="scroll-bar">
      <span class="scroll-track">║</span>
      <span class="scroll-position" :style="{ width: scrollPercent + '%' }">█</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const props = withDefaults(
  defineProps<{
    maxHeight?: string;
  }>(),
  { maxHeight: '20rem' },
);

const viewportRef = ref<HTMLElement | null>(null);
const scrollPercent = ref(0);

function onScroll() {
  if (!viewportRef.value) return;
  const { scrollTop, scrollHeight, clientHeight } = viewportRef.value;
  scrollPercent.value = (scrollTop / (scrollHeight - clientHeight)) * 100;
}
</script>

<style scoped>
.scroll-view {
  display: flex;
  flex-direction: column;
  font-family: var(--font-mono);
}

.scroll-viewport {
  overflow-y: auto;
  max-height: v-bind('maxHeight + "px"');
}

.scroll-bar {
  display: flex;
  align-items: center;
  gap: 0;
  font-size: 0.7rem;
}

.scroll-track {
  opacity: 0.2;
}

.scroll-thumb {
  opacity: 0.5;
}
</style>
```

- [ ] **Step 4: Run tests → PASS**

- [ ] **Step 5: Exports + doc + commit**

---

### Task 17: Breadcrumbs component

**Files:**
- Create: `packages/vue/src/components/breadcrumbs/Breadcrumbs.vue`
- Create: `packages/vue/src/components/__tests__/Breadcrumbs.spec.ts`
- Modify: `packages/vue/src/index.ts`
- Create: `docs/components/breadcrumbs.md`

- [ ] **Step 1: Write tests**

```ts
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs.vue';

describe('Breadcrumbs', () => {
  const items = [
    { label: 'Home' },
    { label: 'Docs' },
    { label: 'Components' },
  ];

  it('renders all items', () => {
    const wrapper = mount(Breadcrumbs, { props: { items } });
    expect(wrapper.findAll('.crumb').length).toBe(3);
  });

  it('renders separators', () => {
    const wrapper = mount(Breadcrumbs, { props: { items } });
    expect(wrapper.text()).toContain('›');
  });

  it('last item has active class', () => {
    const wrapper = mount(Breadcrumbs, { props: { items } });
    expect(wrapper.find('.crumb.active').text()).toContain('Components');
  });

  it('uses custom separator', () => {
    const wrapper = mount(Breadcrumbs, { props: { items, separator: '/' } });
    expect(wrapper.text()).toContain('/');
  });
});
```

- [ ] **Step 3: Write implementation**

```vue
<template>
  <div class="breadcrumbs">
    <span v-for="(item, i) in items" :key="i" :class="['crumb', { active: i === items.length - 1 }]">
      <template v-if="i > 0" class="crumb-sep">{{ separator }}</template>
      <span>{{ item.label }}</span>
    </span>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    items: { label: string }[];
    separator?: string;
  }>(),
  { separator: '›' },
);
</script>

<style scoped>
.breadcrumbs {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-family: var(--font-mono);
  font-size: 0.85rem;
}

.crumb {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.crumb.active {
  color: var(--color-primary);
}

.crumb-sep {
  opacity: 0.4;
}
</style>
```

- [ ] **Step 4: Run tests → PASS**

- [ ] **Step 5: Exports + doc + commit**

---

### Task 18: Stepper component

**Files:**
- Create: `packages/vue/src/components/stepper/Stepper.vue`
- Create: `packages/vue/src/components/__tests__/Stepper.spec.ts`
- Modify: `packages/vue/src/index.ts`
- Create: `docs/components/stepper.md`

- [ ] **Step 1: Write tests**

```ts
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Stepper from '../stepper/Stepper.vue';

describe('Stepper', () => {
  const steps = [
    { label: 'Setup', status: 'done' as const },
    { label: 'Build', status: 'active' as const },
    { label: 'Deploy', status: 'pending' as const },
  ];

  it('renders all steps', () => {
    const wrapper = mount(Stepper, { props: { steps } });
    expect(wrapper.findAll('.step').length).toBe(3);
  });

  it('renders step numbers', () => {
    const wrapper = mount(Stepper, { props: { steps } });
    expect(wrapper.findAll('.step-index').length).toBe(3);
  });

  it('applies status class', () => {
    const wrapper = mount(Stepper, { props: { steps } });
    expect(wrapper.find('.step-done').exists()).toBe(true);
    expect(wrapper.find('.step-active').exists()).toBe(true);
    expect(wrapper.find('.step-pending').exists()).toBe(true);
  });
});
```

- [ ] **Step 3: Write implementation**

```vue
<template>
  <div class="stepper">
    <template v-for="(step, i) in steps" :key="i">
      <span :class="['step', `step-${step.status}`]">
        <span class="step-number">[{{ i + 1 }}]</span>
        <span class="step-label">{{ step.label }}</span>
      </span>
      <span v-if="i < steps.length - 1" class="step-arrow">─→</span>
    </template>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  steps: { label: string; status: 'done' | 'active' | 'pending' }[];
}>();
</script>

<style scoped>
.stepper {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-family: var(--font-mono);
  font-size: 0.85rem;
}

.step {
  display: flex;
  align-items: center;
  gap: 0.2rem;
}

.step-done .step-number {
  color: var(--color-success);
}

.step-active .step-number {
  color: var(--color-primary);
}

.step-pending .step-number {
  opacity: 0.4;
}

.step-pending .step-label {
  opacity: 0.5;
}

.step-arrow {
  opacity: 0.3;
}
</style>
```

- [ ] **Step 4: Run tests → PASS**

- [ ] **Step 5: Exports + doc + commit**

---

### Task 19: Accordion component

**Files:**
- Create: `packages/vue/src/components/accordion/Accordion.vue`
- Create: `packages/vue/src/components/accordion/AccordionItem.vue`
- Create: `packages/vue/src/components/__tests__/Accordion.spec.ts`
- Modify: `packages/vue/src/index.ts`
- Create: `docs/components/accordion.md`

- [ ] **Step 1: Write tests**

```ts
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Accordion from '../accordion/Accordion.vue';
import AccordionItem from '../accordion/AccordionItem.vue';

describe('Accordion', () => {
  it('renders items', () => {
    const wrapper = mount(Accordion, {
      slots: {
        default: [
          h(AccordionItem, { title: 'Step 1' }, 'Content 1'),
          h(AccordionItem, { title: 'Step 2' }, 'Content 2'),
        ],
      },
    });
    expect(wrapper.text()).toContain('Step 1');
    expect(wrapper.text()).toContain('Step 2');
  });
});

describe('AccordionItem', () => {
  it('renders title', () => {
    const wrapper = mount(AccordionItem, {
      props: { title: 'Settings' },
      slots: { default: 'Content' },
    });
    expect(wrapper.text()).toContain('Settings');
  });

  it('collapses body on click', async () => {
    const wrapper = mount(AccordionItem, {
      props: { title: 'Test' },
      slots: { default: 'Body' },
    });
    await wrapper.trigger('click');
    // After click, body should be hidden
    expect(wrapper.find('.accordion-body').exists()).toBe(true);
  });

  it('shows correct arrow', async () => {
    const wrapper = mount(AccordionItem, {
      props: { title: 'Test', open: true },
      slots: { default: 'Body' },
    });
    expect(wrapper.text()).toContain('▼');
  });
});
```

- [ ] **Step 3: Write implementation**

```vue
<!-- Accordion.vue -->
<template>
  <div class="accordion">
    <slot />
  </div>
</template>

<style scoped>
.accordion {
  display: flex;
  flex-direction: column;
  font-family: var(--font-mono);
}
</style>
```

```vue
<!-- AccordionItem.vue -->
<template>
  <div class="accordion-item">
    <div class="accordion-header" @click="toggle">
      <span class="accordion-arrow">{{ open ? '▼' : '▶' }}</span>
      <span class="accordion-title">{{ title }}</span>
    </div>
    <div v-show="open" class="accordion-body">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(
  defineProps<{
    title: string;
    open?: boolean;
  }>(),
  { open: true },
);

const open = ref(props.open);

function toggle() {
  open.value = !open.value;
}
</script>

<style scoped>
.accordion-item {
  border: 1px solid var(--border);
  margin-bottom: 1px;
}

.accordion-header {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.2rem 0.4rem;
  cursor: pointer;
  background: var(--bg-panel);
}

.accordion-arrow {
  min-width: 1rem;
  text-align: center;
}

.accordion-body {
  padding: 0.4rem;
  border-top: 1px solid var(--border);
}
</style>
```

- [ ] **Step 4: Run tests → PASS**

- [ ] **Step 5: Exports + doc + commit**

---

### Task 20: Menu + MenuItem + MenuSeparator components

**Files:**
- Create: `packages/vue/src/components/menu/Menu.vue`
- Create: `packages/vue/src/components/menu/MenuItem.vue`
- Create: `packages/vue/src/components/menu/MenuSeparator.vue`
- Create: `packages/vue/src/components/__tests__/Menu.spec.ts`
- Modify: `packages/vue/src/index.ts`
- Create: `docs/components/menu.md`

- [ ] **Step 1: Write tests**

```ts
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Menu from '../menu/Menu.vue';
import MenuItem from '../menu/MenuItem.vue';
import MenuSeparator from '../menu/MenuSeparator.vue';

describe('Menu', () => {
  it('renders items via slot', () => {
    const wrapper = mount(Menu, {
      slots: {
        default: [
          h(MenuItem, null, 'File'),
          h(MenuItem, null, 'Edit'),
        ],
      },
    });
    expect(wrapper.text()).toContain('File');
    expect(wrapper.text()).toContain('Edit');
  });
});

describe('MenuItem', () => {
  it('renders label', () => {
    const wrapper = mount(MenuItem, { slots: { default: 'Open' } });
    expect(wrapper.text()).toBe('Open');
  });

  it('emits click', async () => {
    const wrapper = mount(MenuItem, { slots: { default: 'Open' } });
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });
});

describe('MenuSeparator', () => {
  it('renders separator line', () => {
    const wrapper = mount(MenuSeparator);
    expect(wrapper.text()).toContain('─');
  });
});
```

- [ ] **Step 3: Write implementations**

```vue
<!-- Menu.vue -->
<template>
  <div class="menu">
    <slot />
  </div>
</template>

<style scoped>
.menu {
  display: inline-flex;
  flex-direction: column;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  border: 1px solid var(--border);
  background: var(--bg-panel);
}
</style>
```

```vue
<!-- MenuItem.vue -->
<template>
  <div class="menu-item" @click="$emit('click')">
    <slot />
  </div>
</template>

<style scoped>
.menu-item {
  padding: 0.2rem 0.5rem;
  cursor: pointer;
}

.menu-item:hover {
  background: var(--bg);
}
</style>
```

```vue
<!-- MenuSeparator.vue -->
<template>
  <div class="menu-separator">────────────────────</div>
</template>

<style scoped>
.menu-separator {
  opacity: 0.3;
  padding: 0 0.5rem;
  font-size: 0.7rem;
}
</style>
```

- [ ] **Step 4: Run tests → PASS**

- [ ] **Step 5: Exports + doc + commit**

---

### Task 21: Tooltip component

**Files:**
- Create: `packages/vue/src/components/tooltip/Tooltip.vue`
- Create: `packages/vue/src/components/__tests__/Tooltip.spec.ts`
- Modify: `packages/vue/src/index.ts`
- Create: `docs/components/tooltip.md`

- [ ] **Step 1: Write tests**

```ts
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Tooltip from '../tooltip/Tooltip.vue';

describe('Tooltip', () => {
  it('shows tooltip on hover', async () => {
    const wrapper = mount(Tooltip, {
      props: { text: 'Help text' },
      slots: { default: 'Hover me' },
    });
    await wrapper.trigger('mouseenter');
    expect(wrapper.find('.tooltip-content').exists()).toBe(true);
  });

  it('hides tooltip on mouseleave', async () => {
    const wrapper = mount(Tooltip, {
      props: { text: 'Help text' },
      slots: { default: 'Hover me' },
    });
    await wrapper.trigger('mouseenter');
    await wrapper.trigger('mouseleave');
    expect(wrapper.find('.tooltip-content').exists()).toBe(false);
  });

  it('renders content text when shown', async () => {
    const wrapper = mount(Tooltip, {
      props: { content: 'Info' },
      slots: { default: 'Hover' },
    });
    await wrapper.trigger('mouseenter');
    expect(wrapper.text()).toContain('Info');
  });
});
```

- [ ] **Step 3: Write implementation**

```vue
<template>
  <span class="tooltip-wrapper" @mouseenter="show = true" @mouseleave="show = false" @focusin="show = true" @focusout="show = false">
    <slot />
    <span v-if="show" :class="['tooltip-content', `tooltip-${position}`]">
      {{ content }}
    </span>
  </span>
</template>

<script setup lang="ts">
import { ref } from 'vue';

withDefaults(
  defineProps<{
    content: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
  }>(),
  { position: 'top' as const },
);

const show = ref(false);
</script>

<style scoped>
.tooltip-wrapper {
  position: relative;
  display: inline-flex;
}

.tooltip-content {
  position: absolute;
  white-space: nowrap;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  background: var(--bg-panel);
  border: 1px solid var(--border);
  padding: 0.15rem 0.4rem;
  z-index: 10;
}

.tooltip-top {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 4px;
}

.tooltip-bottom {
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 4px;
}

.tooltip-left {
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-right: 4px;
}

.tooltip-right {
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 4px;
}
</style>
```

- [ ] **Step 4: Run tests → PASS**

- [ ] **Step 5: Exports + doc + commit**

---

### Task 22: Modal component

**Files:**
- Create: `packages/vue/src/components/modal/Modal.vue`
- Create: `packages/vue/src/components/modal/ModalBody.vue`
- Create: `packages/vue/src/components/modal/ModalFooter.vue`
- Create: `packages/vue/src/components/modal/ModalHeader.vue`
- Create: `packages/vue/src/components/__tests__/Modal.spec.ts`
- Modify: `packages/vue/src/index.ts`
- Create: `docs/components/modal.md`

**Interfaces:**
- Consumes: nothing special
- Produces: `Modal`, `ModalHeader`, `ModalBody`, `ModalFooter`

- [ ] **Step 1: Write tests**

```ts
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Modal from '../modal/Modal.vue';

describe('Modal', () => {
  it('renders header body footer', () => {
    const wrapper = mount(Modal, {
      props: { open: true },
      slots: {
        header: 'Title',
        default: 'Body content',
        footer: 'Actions',
      },
    });
    expect(wrapper.text()).toContain('Title');
    expect(wrapper.text()).toContain('Body content');
    expect(wrapper.text()).toContain('Actions');
  });

  it('emits close on escape', async () => {
    const wrapper = mount(Modal, {
      props: { open: true },
    });
    await wrapper.find('.modal-overlay').trigger('keydown.escape');
    expect(wrapper.emitted('close')).toBeTruthy();
  });

  it('renders double border', () => {
    const wrapper = mount(Modal, {
      props: { open: true },
    });
    expect(wrapper.text()).toMatch(/╔═╝?/);
  });
});
```

- [ ] **Step 3: Write implementation**

```vue
<template>
  <Teleport to="body">
    <div v-if="open" class="modal-overlay" @keydown.escape="emit('close')" tabindex="-1">
      <div class="modal-box">
        <div class="modal-border-top">╔═══╗</div>
        <div class="modal-inner">
          <div v-if="$slots.header" class="modal-header">
            <slot name="header" />
          </div>
          <div class="modal-body">
            <slot />
          </div>
          <div v-if="$slots.footer" class="modal-footer">
            <slot name="footer" />
          </div>
        </div>
        <div class="modal-border-bottom">╚═══╝</div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue';

const props = withDefaults(
  defineProps<{
    open?: boolean;
  }>(),
  { open: false },
);

const emit = defineEmits<{
  (e: 'close'): void;
}>();

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && props.open) {
    emit('close');
  }
}

watch(() => props.open, (val) => {
  if (val) document.addEventListener('keydown', onKeydown);
  else document.removeEventListener('keydown', onKeydown);
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
}

.modal-box {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  background: var(--bg-panel);
  min-width: 20rem;
  max-width: 80vw;
}

.modal-border-top,
.modal-border-bottom {
  opacity: 0.3;
  font-size: 0.7rem;
  line-height: 1;
}

.modal-inner {
  padding: 0.3rem 0.5rem;
}

.modal-header {
  font-weight: bold;
  margin-bottom: 0.3rem;
}

.modal-body {
  min-height: 2rem;
}

.modal-footer {
  margin-top: 0.5rem;
  display: flex;
  gap: 0.3rem;
  justify-content: flex-end;
}
</style>
```

- [ ] **Step 4: Run tests → PASS**

- [ ] **Step 5: Exports + doc + commit**

---

### Task 23: ComboBox component

**Files:**
- Create: `packages/vue/src/components/combo-box/ComboBox.vue`
- Create: `packages/vue/src/components/__tests__/ComboBox.spec.ts`
- Modify: `packages/vue/src/index.ts`
- Create: `docs/components/combo-box.md`

- [ ] **Step 1: Write tests**

```ts
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import ComboBox from '../combo-box/ComboBox.vue';

describe('ComboBox', () => {
  const items = [
    { value: 'a', label: 'Apple' },
    { value: 'b', label: 'Banana' },
    { value: 'c', label: 'Cherry' },
  ];

  it('renders input', () => {
    const wrapper = mount(ComboBox, { props: { items } });
    expect(wrapper.find('input').exists()).toBe(true);
  });

  it('filters items on input', async () => {
    const wrapper = mount(ComboBox, { props: { items } });
    await wrapper.find('input').setValue('ap');
    expect(wrapper.findAll('.combo-item').length).toBe(1); // Apple
  });

  it('selects item on click', async () => {
    const wrapper = mount(ComboBox, { props: { items, modelValue: '' } });
    await wrapper.find('input').setValue('');
    await wrapper.findAll('.combo-item')[0].trigger('click');
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
  });
});
```

- [ ] **Step 3: Write implementation**

```vue
<template>
  <div class="combo-box">
    <Input :model-value="query" @update:model-value="onInput" placeholder="Search..." />
    <div v-if="filtered.length" class="combo-list">
      <div
        v-for="(item, i) in filtered"
        :key="item.value"
        :class="['combo-item', { active: modelValue === item.value }]"
        @click="select(item.value)"
        @mouseenter="hoverIndex = i"
      >
        <span class="combo-cursor">{{ modelValue === item.value ? '›' : ' ' }}</span>
        {{ item.label }}
      </div>
    </div>
    <div v-if="!filtered.length && query" class="combo-empty">No matches.</div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Input from '../input/Input.vue';

const props = withDefaults(
  defineProps<{
    items: { value: string; label: string }[];
    modelValue?: string;
  }>(),
  { modelValue: '' },
);

const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void;
}>();

const query = ref('');
const hoverIndex = ref(-1);

const filtered = computed(() => {
  if (!query.value) return props.items;
  return props.items.filter(i =>
    i.label.toLowerCase().includes(query.value.toLowerCase()),
  );
});

function onInput(val: string) {
  query.value = val;
}

function select(value: string) {
  emit('update:modelValue', value);
  query.value = '';
}
</script>

<style scoped>
.combo-box {
  position: relative;
  font-family: var(--font-mono);
  font-size: 0.85rem;
}

.combo-list {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--bg-panel);
  border: 1px solid var(--border);
  max-height: 12rem;
  overflow-y: auto;
  z-index: 20;
}

.combo-item {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.15rem 0.3rem;
  cursor: pointer;
}

.combo-item:hover,
.combo-item.active {
  background: var(--bg);
}

.combo-empty {
  padding: 0.2rem 0.3rem;
  opacity: 0.4;
  font-style: italic;
}
</style>
```

- [ ] **Step 4: Run tests → PASS**

- [ ] **Step 5: Exports + doc + commit**

---

### Task 24: CommandPalette component

**Files:**
- Create: `packages/vue/src/components/command-palette/CommandPalette.vue`
- Create: `packages/vue/src/components/__tests__/CommandPalette.spec.ts`
- Modify: `packages/vue/src/index.ts`
- Create: `docs/components/command-palette.md`

**Interfaces:**
- Consumes: `Modal`, `Input`, `KbdGroup`
- Produces: `CommandPalette`

- [ ] **Step 1: Write tests**

```ts
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import CommandPalette from '../command-palette/CommandPalette.vue';

describe('CommandPalette', () => {
  const commands = [
    { id: '1', label: 'Open File', hint: 'Ctrl+P' },
    { id: '2', label: 'Search', hint: 'Ctrl+Shift+F' },
    { id: '3', label: 'Toggle Theme', hint: 'Ctrl+T' },
  ];

  it('renders input when open', () => {
    const wrapper = mount(CommandPalette, {
      props: { open: true, commands },
    });
    expect(wrapper.find('input').exists()).toBe(true);
  });

  it('filters commands on input', async () => {
    const wrapper = mount(CommandPalette, {
      props: { open: true, commands },
    });
    await wrapper.find('input').setValue('open');
    const items = wrapper.findAll('.palette-item');
    expect(items.length).toBe(1);
    expect(items[0].text()).toContain('Open File');
  });

  it('emits select on click', async () => {
    const wrapper = mount(CommandPalette, {
      props: { open: true, commands },
    });
    await wrapper.find('.palette-item').trigger('click');
    expect(wrapper.emitted('select')).toBeTruthy();
  });

  it('shows hint for each command', () => {
    const wrapper = mount(CommandPalette, {
      props: { open: true, commands },
    });
    expect(wrapper.text()).toContain('Ctrl+P');
  });
});
```

- [ ] **Step 3: Write implementation**

```vue
<template>
  <Modal :open="open" @close="$emit('close')">
    <template #header>Command Palette</template>
    <div class="palette">
      <Input
        v-model="query"
        placeholder="Type a command..."
        @keydown.enter="executeFirst"
      />
      <div v-if="filtered.length" class="palette-list">
        <div
          v-for="(cmd, i) in filtered"
          :key="cmd.id"
          :class="['palette-item', { active: i === 0 }]"
          @click="execute(cmd.id)"
        >
          <span class="palette-label">{{ cmd.label }}</span>
          <KbdGroup v-if="cmd.hint" :keys="cmd.hint.split('+').filter(Boolean)" size="sm" />
        </div>
      </div>
      <div v-if="!filtered.length && query" class="palette-empty">No commands match "{{ query }}"</div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Modal from '../modal/Modal.vue';
import Input from '../input/Input.vue';
import KbdGroup from '../kbd/KbdGroup.vue';

const props = withDefaults(
  defineProps<{
    open?: boolean;
    commands: { id: string; label: string; hint?: string }[];
  }>(),
  { open: false },
);

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'select', id: string): void;
}>();

const query = ref('');

const filtered = computed(() => {
  if (!query.value) return props.commands;
  const q = query.value.toLowerCase();
  return props.commands.filter(c => c.label.toLowerCase().includes(q));
});

function execute(id: string) {
  emit('select', id);
  emit('close');
  query.value = '';
}

function executeFirst() {
  if (filtered.value.length) execute(filtered.value[0].id);
}
</script>

<style scoped>
.palette {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  min-width: 28rem;
}

.palette-list {
  margin-top: 0.3rem;
  max-height: 20rem;
  overflow-y: auto;
}

.palette-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 0.4rem;
  cursor: pointer;
}

.palette-item.active,
.palette-item:hover {
  background: var(--bg);
}

.palette-empty {
  margin-top: 0.3rem;
  opacity: 0.4;
  font-style: italic;
}
</style>
```

- [ ] **Step 4: Run tests → PASS**

- [ ] **Step 5: Exports + doc + commit**

---

### Task 25: Doc pages for existing components (Badge, ButtonTui, Divider, KeyHint)

**Files:**
- Create: `docs/components/badge.md` (already exists? check)
- Create: `docs/components/buttontui.md` (already exists — verify)
- Create: `docs/components/divider.md`
- Create: `docs/components/keyhint.md`

**Note:** Check if these already exist. If they do, verify they match the expected format and update if needed. If they don't, create them following the pattern from `tipbox.md`.

Template for each:

```md
# {Component}

Brief description.

## Demo

<... demo HTML with the component ...>

## Código

```vue
<{Component} ... />
```

## API

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| ... | ... | ... | ... |
```

- [ ] **Step 1: Check existing docs**

```bash
ls docs/components/
```
Verify presence of `badge.md`, `buttontui.md`, `divider.md`, `keyhint.md`.

- [ ] **Step 2: Create/update each doc** following the TipBox format.

- [ ] **Step 3: Commit**

---

### Task 26: Update main docs/index.md

**Files:**
- Modify: `docs/index.md`

Add rows for all new components to the component table.

- [ ] **Step 1: Read current index.md**

- [ ] **Step 2: Add new component rows**

- [ ] **Step 3: Commit**

---

### Task 27: Final verification

- [ ] **Step 1: Run lint**

```bash
pnpm lint
```
Expected: no errors

- [ ] **Step 2: Run typecheck**

```bash
pnpm exec vue-tsc --noEmit
```
Expected: no errors

- [ ] **Step 3: Run tests**

```bash
pnpm test
```
Expected: all pass

- [ ] **Step 4: Build**

```bash
pnpm build
```
Expected: builds successfully

- [ ] **Step 5: Report and commit**

Write a summary report, do a final commit that encompasses any remaining
fixes.