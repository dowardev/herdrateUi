<!-- SPDX-License-Identifier: GPL-3.0-or-later -->

<template>
  <article
    class="card"
    :class="{
      'card--rubik': design === 'rubik',
      'card--no-border': !border,
      'card--no-shadow': !shadow,
    }"
    :data-design="design === 'rubik' ? 'rubik' : undefined"
    @mouseenter="$emit('hover')"
  >
    <header
      v-if="number || category || header || $slots.header"
      class="card-head"
    >
      <span v-if="number" class="card-number">{{ number }}</span>
      <span v-if="category" class="card-category">{{ category }}</span>
      <slot name="header">{{ header }}</slot>
    </header>

    <h3 class="card-title">
      <slot name="title">{{ title }}</slot>
    </h3>

    <p v-if="description || $slots.default" class="card-desc">
      <slot>{{ description }}</slot>
    </p>

    <footer
      v-if="tags?.length || footer || $slots.footer || arrow"
      class="card-foot"
    >
      <div v-if="tags?.length" class="card-tags">
        <span v-for="tag in tags" :key="tag" class="card-tag">{{ tag }}</span>
      </div>
      <slot name="footer">{{ footer }}</slot>
      <button v-if="arrow" class="card-arrow" type="button" aria-label="Open">
        <span aria-hidden="true">→</span>
      </button>
    </footer>
  </article>
</template>

<script setup lang="ts">
import { computed, toRef } from 'vue';
import { type DesignLine, useDesign } from '../../composables/useDesign';

const props = withDefaults(
  defineProps<{
    /** Monospace index (e.g. `// 03`). */
    number?: string;
    /** Uppercase category label. */
    category?: string;
    /** Card title (required). */
    title: string;
    /** Body text. */
    description?: string;
    /** Plain-text header content shown before the title (overridden by the `header` slot). */
    header?: string;
    /** Plain-text footer content shown at the bottom (overridden by the `footer` slot). */
    footer?: string;
    /** Tech chips. */
    tags?: string[];
    /** Show the arrow affordance. */
    arrow?: boolean;
    /** Show the border outline. Default: `true`. */
    border?: boolean;
    /**
     * Apply elevation shadow (`var(--shadow)`). The value is owned by the
     * active design line: flat (`none`) on tuix, floating on rubik.
     * Default: `false`.
     */
    shadow?: boolean;
    /** Design line (or inherit from `data-design`). */
    design?: DesignLine;
  }>(),
  {
    arrow: true,
    border: true,
    shadow: false,
  },
);

const line = useDesign(toRef(props, 'design'));
const design = computed<DesignLine>(() => line.value);

defineEmits<{ hover: [] }>();
</script>

<style scoped>
/* =====================================================================
   Card — two-presentation component:
     - default = TERMINAL line (mono, sharp, flat, subtle border)
     - `.card--rubik` = RUBIK line (corner brackets, `// number`,
       uppercase category, bold display title, tech chips, sliding arrow,
       floating shadow)

   All props (`border`, `shadow`) work on both lines.
   Both consume consumer tokens (--bg/--text/--border/--font-*).
   ===================================================================== */
.card {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding: 1rem;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-mono);
  box-shadow: var(--shadow);
  cursor: pointer;
  transition:
    border-color 220ms ease,
    box-shadow 220ms ease,
    transform 220ms ease;
}
.card:hover {
  border-color: var(--accent);
  background: var(--bg-alt);
  box-shadow: var(--shadow-hover);
}

.card--no-border {
  border: none !important;
}
.card--no-shadow {
  box-shadow: none !important;
}

.card-head {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  min-height: 1em;
}
.card-number {
  font-family: var(--font-mono);
  color: var(--text-muted);
  font-size: 0.75rem;
}
.card-category {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.62rem;
  color: var(--text-muted);
}
.card-title {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  font-family: var(--font-mono);
  color: var(--fg);
}
.card-desc {
  margin: 0;
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.4;
}
.card-foot {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding-top: 0.75rem;
}
.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}
.card-tag {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  padding: 0.1rem 0.4rem;
  border: 1px solid var(--border);
  color: var(--text-muted);
}
.card-arrow {
  border: none;
  background: transparent;
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
  padding: 0.2rem;
  transition:
    color 220ms ease,
    transform 220ms ease;
}
.card:hover .card-arrow {
  color: var(--accent);
  transform: translateX(3px);
}

/* --------------------- RUBIK variant --------------------- */
.card--rubik {
  position: relative;
  font-family: var(--font-sans);
  border: 1px solid var(--border);
  border-radius: 0;
  background: var(--bg);
  padding: 1.25rem;
  clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%);
  transition:
    transform 200ms var(--cp-ease, ease),
    background 200ms ease,
    border-color 200ms ease;
}

.card--rubik:hover {
  background: var(--bg-alt);
  transform: translateY(-2px);
}

.card--rubik .card-number {
  font-family: var(--font-mono);
  color: var(--accent);
  font-size: 0.72rem;
}
.card--rubik .card-category {
  display: inline-block;
  font-family: var(--font-mono);
  letter-spacing: 0.14em;
  font-size: 0.62rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--bg);
  background: var(--text);
  padding: 0.15rem 0.5rem;
}
.card--rubik .card-title {
  font-family: "Archivo Black", "Arial Black", "Helvetica Neue", Arial, sans-serif;
  font-size: 1.4rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--fg);
  letter-spacing: 0.01em;
  line-height: 1.05;
}
.card--rubik .card-desc {
  font-family: var(--font-sans);
  color: var(--text-muted);
}
.card--rubik .card-tag {
  font-family: var(--font-mono);
  font-size: 0.66rem;
  font-weight: 600;
  padding: 0.15rem 0.5rem;
  border: 1px solid var(--border);
  border-radius: 0;
  clip-path: polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 0 100%);
  color: var(--text-muted);
}
.card--rubik .card-arrow {
  font-family: var(--font-sans);
  color: var(--text-muted);
}
.card--rubik:hover .card-arrow {
  color: var(--accent);
  transform: translateX(4px);
}

@media (prefers-reduced-motion: reduce) {
  .card,
  .card * {
    transition: none !important;
  }
}
</style>