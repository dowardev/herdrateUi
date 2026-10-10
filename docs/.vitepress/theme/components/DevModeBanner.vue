<!--
SPDX-FileCopyrightText: 2026 DowarDev

SPDX-License-Identifier: AGPL-3.0-only
-->

<template>
  <div
    v-if="show"
    class="dev-footer"
    role="status"
    aria-live="polite"
    data-testid="dev-mode-banner"
  >
    <span class="dev-footer__text">{{ label }}</span>

    <button
      type="button"
      class="dev-footer__close"
      :aria-label="closeLabel"
      data-testid="dev-mode-banner__close"
      @click="dismiss"
    >
      <span aria-hidden="true">×</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';
import { computed, ref, watch } from 'vue';
import changelogRaw from '../../../CHANGELOG.md?raw';
import { useDocsI18n } from '../useDocsI18n';
import { DISMISS_KEY } from './devModeBanner.constants';

const { localeIndex } = useData();
const { t: tTheme } = useDocsI18n();

const show = ref(true);

// Read the version eagerly so the first paint already has the right label
// (and SSR + tests don't have to wait for `onMounted`). The CHANGELOG is
// bundled at build time via Vite's `?raw` so this is synchronous and
// instant. (Adapted from OneSpend's `99c414d` — there `onMounted` defers
// the read; we don't need to here.)
const currentVersion = ref<string | null>(readCurrentVersion());

function readCurrentVersion(): string | null {
  // `docs/CHANGELOG.md` follows `## [X.Y.Z] - YYYY-MM-DD`. Skip the
  // `[Unreleased]` heading and take the first released version. The
  // optional `(?:-[\w.]+)?` lets pre-release tags (e.g. `1.0.0-beta.1`)
  // round-trip too, on top of the strict semver OneSpend also matches.
  const match = changelogRaw.match(/^##\s+\[(\d+\.\d+\.\d+(?:-[\w.]+)?)\]/m);
  return match ? match[1] : null;
}

function isMajorAtLeast(version: string, target: number): boolean {
  const major = Number(version.split('.')[0]);
  return Number.isFinite(major) && major >= target;
}

const closeLabel = computed(() => tTheme('close'));

const label = computed(() => {
  const v = currentVersion.value;
  if (!v) return tTheme('devBannerUnknown');
  if (isMajorAtLeast(v, 1)) return tTheme('devBannerStable', { version: v });
  return tTheme('devBannerDevelopment', { version: v });
});

function syncShow() {
  const v = currentVersion.value;
  if (!v) {
    // Could not parse a version: show the banner so the user is not misled.
    show.value = true;
    return;
  }
  try {
    show.value = localStorage.getItem(DISMISS_KEY) !== v;
  } catch (_e) {
    // localStorage unavailable (SSR, private mode): default to showing.
    show.value = true;
  }
}

// Eagerly decide initial visibility. In the browser this reads
// localStorage; in SSR the try/catch inside `syncShow` falls back to
// showing.
syncShow();

// Re-evaluate when the resolved version changes (handy for HMR).
watch(currentVersion, syncShow);

function dismiss() {
  if (currentVersion.value) {
    try {
      localStorage.setItem(DISMISS_KEY, currentVersion.value);
    } catch (_e) {
      // localStorage unavailable: just hide without persisting.
    }
  }
  show.value = false;
}
</script>

<!-- No non-scoped style here: the layout-reservation padding is applied
     directly on `<body>` from `index.ts` via `enhanceApp`, so it doesn't
     depend on VitePress's internal `.Layout` class. See the comment in
     `index.ts` for the rationale. -->
<!-- eslint-disable-next-line vue/component-name-in-template-casing -->
<style scoped>
.dev-footer {
  /* 1:1 with OneSpend's `DevModeBanner.vue` (LBDS-291 reference). */
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 26px;
  padding: 4px 16px;
  background: var(--vp-c-warning-soft, rgba(255, 193, 7, 0.18));
  color: var(--vp-c-warning-1, #5e4500);
  font-size: 12px;
  font-weight: 500;
  border-top: 1px solid var(--vp-c-warning-2, #ffc107);
  backdrop-filter: saturate(180%) blur(4px);
  -webkit-backdrop-filter: saturate(180%) blur(4px);
  box-sizing: border-box;
}

@media (prefers-color-scheme: dark) {
  .dev-footer {
    color: var(--vp-c-warning-1, #ffe082);
  }
}

.dev-footer__text {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
}

.dev-footer__close {
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 2px 6px;
  font-size: 14px;
  line-height: 1;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.15s ease;
}

.dev-footer__close:hover,
.dev-footer__close:focus-visible {
  background: rgba(0, 0, 0, 0.08);
}
</style>
