// SPDX-License-Identifier: GPL-3.0-or-later

import type { ComputedRef, Ref } from 'vue';
import {
  computed,
  getCurrentInstance,
  inject,
  onBeforeUnmount,
  onMounted,
  ref,
} from 'vue';

/**
 * Design lines available to the library.
 *
 * - `tuix`: the default current look (sharp corners, flat, mono).
 * - `rubik`: an alternate design — real form/animation/structure, not a
 *   color scheme (see LBDS-214).
 */
export type DesignLine = 'tuix' | 'rubik';

export const DESIGN_LINE_KEY = Symbol('herdrate-design-line');

export const DESIGN_LINES: readonly DesignLine[] = ['tuix', 'rubik'];

const GLOBAL_DESIGN = ref<DesignLine>('tuix');
const subscribers = new Set<() => void>();

function isDesignLine(value: string | null | undefined): value is DesignLine {
  return value === 'tuix' || value === 'rubik';
}

/**
 * Set the design line for the whole app, live. Applies `data-design` on the
 * document root (styling hook used by the rubik stylesheet) and updates
 * the reactive store so every component subscribing to `useDesign()` updates
 * immediately.
 */
export function setDesign(line: DesignLine): void {
  if (typeof document !== 'undefined') {
    if (line === 'rubik') {
      document.documentElement.setAttribute('data-design', 'rubik');
    } else {
      document.documentElement.removeAttribute('data-design');
    }
  }
  GLOBAL_DESIGN.value = line;
  for (const fn of subscribers) fn();
}

/** Read the current global design line (non-reactive). */
export function getDesign(): DesignLine {
  return GLOBAL_DESIGN.value;
}

/**
 * Resolve a component's active design line with precedence:
 *   1. local `design` prop (if set),
 *   2. injected line from a provider ancestor (e.g. `<Tabs>`),
 *   3. the nearest ancestor `[data-design]`,
 *   4. the global line (`<html data-design>` via `setDesign()`),
 *   5. `'tuix'` default.
 */
export function useDesign(
  propDesign?: Ref<DesignLine | undefined>,
): ComputedRef<DesignLine> {
  const instance = getCurrentInstance();
  const ancestor = ref<DesignLine | undefined>(undefined);
  const injected = inject<Ref<DesignLine | undefined> | undefined>(
    DESIGN_LINE_KEY,
    undefined,
  );

  const scanAncestors = (): void => {
    const el = instance?.proxy?.$el as Element | null;
    if (!el) return;
    let node: Element | null = el.parentElement;
    while (node) {
      const value = node.getAttribute('data-design');
      if (isDesignLine(value)) {
        ancestor.value = value;
        return;
      }
      node = node.parentElement;
    }
    const rootValue =
      typeof document !== 'undefined'
        ? document.documentElement.getAttribute('data-design')
        : null;
    ancestor.value = isDesignLine(rootValue) ? rootValue : undefined;
  };

  onMounted(() => {
    scanAncestors();
    subscribers.add(scanAncestors);
  });
  onBeforeUnmount(() => {
    subscribers.delete(scanAncestors);
  });

  return computed<DesignLine>(
    () =>
      propDesign?.value ??
      injected?.value ??
      ancestor.value ??
      GLOBAL_DESIGN.value ??
      'tuix',
  );
}
