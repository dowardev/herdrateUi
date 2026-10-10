// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import DevModeBanner from '../components/DevModeBanner.vue';
import { DISMISS_KEY } from '../components/devModeBanner.constants';

const { localeIndex } = vi.hoisted(() => ({ localeIndex: { value: 'root' } }));

vi.mock('vitepress', () => ({
  useData: () => ({ localeIndex }),
}));

describe('DevModeBanner (LBDS-291, 1:1 with OneSpend)', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('renders the version-aware label, centered, with a close (×) button only (NO report-bug CTA)', () => {
    localeIndex.value = 'root';
    const wrapper = mount(DevModeBanner);
    const banner = wrapper.find('[data-testid="dev-mode-banner"]');
    expect(banner.exists()).toBe(true);
    // Banner centers its text (matches OneSpend's `justify-content: center`).
    expect(banner.classes()).toContain('dev-footer');
    // Label includes the version — OneSpend's pattern: "X.Y.Z — in active development".
    const text = banner.text();
    expect(text).toMatch(/v\d+\.\d+\.\d+/);
    // No CTA (this banner is the static, version-aware dev footer, not the
    // per-error CTA that lives in LBDS-288 for OneSpend).
    const cta = wrapper.find('[data-testid="dev-mode-banner__cta"]');
    expect(cta.exists()).toBe(false);
    expect(ctaLink(wrapper)).toBeNull();
    // Close button is present.
    expect(
      wrapper.find('[data-testid="dev-mode-banner__close"]').exists(),
    ).toBe(true);
  });

  it('renders the Spanish label under the es locale', () => {
    localeIndex.value = 'es';
    const wrapper = mount(DevModeBanner);
    const text = wrapper.find('[data-testid="dev-mode-banner"]').text();
    expect(text).toMatch(/v\d+\.\d+\.\d+/);
    expect(text).toMatch(/desarrollo|estable/);
    // The close aria-label flips to Spanish.
    const close = wrapper.find('[data-testid="dev-mode-banner__close"]');
    expect(close.attributes('aria-label')).toBe('Cerrar');
  });

  it('hides the banner when the close (×) control is clicked and persists dismissal in localStorage under the shared `DISMISS_KEY` for the current version', async () => {
    const wrapper = mount(DevModeBanner);
    expect(wrapper.find('[data-testid="dev-mode-banner"]').exists()).toBe(true);

    const close = wrapper.find('[data-testid="dev-mode-banner__close"]');
    await close.trigger('click');

    expect(wrapper.find('[data-testid="dev-mode-banner"]').exists()).toBe(
      false,
    );
    // The dismissal key is the one the component exports — drift-proof.
    const stored = localStorage.getItem(DISMISS_KEY);
    expect(stored).toMatch(/^\d+\.\d+\.\d+(?:-[\w.]+)?$/);
    // Same version on a fresh mount → still hidden.
    const second = mount(DevModeBanner);
    expect(second.find('[data-testid="dev-mode-banner"]').exists()).toBe(false);
  });
});

/** Looks for an anchor (`<a>`) anywhere inside the rendered banner;
 *  returns its `href`, or null if none. Guards against accidental
 *  re-introduction of the OneSpend-incompatible "Report an issue" CTA. */
function ctaLink(wrapper: ReturnType<typeof mount>): string | null {
  const a = wrapper.find('a');
  return a.exists() ? (a.attributes('href') ?? '') : null;
}
