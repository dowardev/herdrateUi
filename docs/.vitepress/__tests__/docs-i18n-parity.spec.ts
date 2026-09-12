// SPDX-License-Identifier: GPL-3.0-or-later

// LBDS-238 (units 1+2): parity between the EN source of truth and the ES locale
// for all 39 component pages. Fails on drift, passes after the catalog/meta/md
// fixes.
import { readdirSync, readFileSync } from 'node:fs';
import { basename, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { cardMeta as cardMetaEn } from '../../components/meta/card';
import { cardMeta as cardMetaEs } from '../../es/components/meta/card';
import enCatalog from '../locales/en.json';
import esCatalog from '../locales/es.json';
import type { ComponentMeta } from '../theme/PropControls.vue';

const enCardMd = resolve(process.cwd(), 'docs/components/card.md');
const esCardMd = resolve(process.cwd(), 'docs/es/components/card.md');

function headingsOf(md: string): string[] {
  return md
    .split('\n')
    .filter((line) => line.startsWith('## '))
    .map((line) => line.slice(3).trim());
}

// LBDS-238 unit 2: every component page, driven by the EN meta directory (the
// single source of truth). Each entry maps the file base to its EN/ES meta and
// markdown sources.
const enMetaModules = import.meta.glob<{ [key: string]: ComponentMeta }>(
  '../../components/meta/*.ts',
  { eager: true },
);
const esMetaModules = import.meta.glob<{ [key: string]: ComponentMeta }>(
  '../../es/components/meta/*.ts',
  { eager: true },
);

function soleMeta(
  mod: { [key: string]: ComponentMeta } | undefined,
  path: string,
): ComponentMeta {
  if (!mod) throw new Error(`missing meta module: ${path}`);
  const values = Object.values(mod);
  const found = values.find(
    (value) => typeof value === 'object' && Array.isArray(value?.props),
  );
  if (!found) throw new Error(`no ComponentMeta export in: ${path}`);
  return found;
}

const pageBases: string[] = readdirSync(
  resolve(process.cwd(), 'docs/components/meta'),
)
  .filter((file) => file.endsWith('.ts'))
  .map((file) => basename(file, '.ts'))
  .sort();

interface PageSources {
  base: string;
  metaEn: ComponentMeta;
  metaEs: ComponentMeta;
  mdEn: string;
  mdEs: string;
}

const pages: PageSources[] = pageBases.map((base) => ({
  base,
  metaEn: soleMeta(
    enMetaModules[`../../components/meta/${base}.ts`],
    `docs/components/meta/${base}.ts`,
  ),
  metaEs: soleMeta(
    esMetaModules[`../../es/components/meta/${base}.ts`],
    `docs/es/components/meta/${base}.ts`,
  ),
  mdEn: readFileSync(
    resolve(process.cwd(), `docs/components/${base}.md`),
    'utf8',
  ),
  mdEs: readFileSync(
    resolve(process.cwd(), `docs/es/components/${base}.md`),
    'utf8',
  ),
}));

// Headings with no catalog entry: one-off section titles whose ES translation
// is documented here instead of the page-chrome catalog.
const customHeadingEs: Record<string, string> = {
  'Auto-formatting with usePrettierFormatter':
    'Auto-formateo con usePrettierFormatter',
  'Interactive demo': 'Demo interactiva',
  'Demo with useToast()': 'Demo con useToast()',
};

const enValueToKey = new Map<string, string>(
  Object.entries(enCatalog).map(([key, value]) => [value, key]),
);

// LBDS-238 unit 3: all 39 ES pages carry the ported section.
// design-lines demos ported verbatim from EN (heading translated).
// spec expects ES `designLines` on every page.
// `designLines` is required on every ES page and fails otherwise.
function expectedEsHeadings(mdEn: string): string[] {
  return headingsOf(mdEn).map((heading) => {
    const key = enValueToKey.get(heading);
    if (key) return (esCatalog as Record<string, string>)[key];
    return customHeadingEs[heading] ?? heading;
  });
}

describe('docs i18n parity (LBDS-238)', () => {
  it('keeps the same keys in en.json and es.json', () => {
    expect(Object.keys(esCatalog).sort()).toEqual(
      Object.keys(enCatalog).sort(),
    );
  });

  it('aligns card.md EN vs ES section headings through the catalog', () => {
    const enMd = readFileSync(enCardMd, 'utf8');
    const esMd = readFileSync(esCardMd, 'utf8');

    expect(headingsOf(enMd)).toEqual([
      enCatalog.designLines,
      enCatalog.props,
      enCatalog.slots,
      enCatalog.events,
    ]);
    expect(headingsOf(esMd)).toEqual([
      esCatalog.designLines,
      esCatalog.props,
      esCatalog.slots,
      esCatalog.events,
    ]);
  });

  it('renders translated Both cells and (none) parens in the ES card table', () => {
    const esMd = readFileSync(esCardMd, 'utf8');

    expect(esMd).not.toMatch(/\| Both \|/);
    expect(esMd).toContain(`| ${esCatalog.both} |`);
    expect(esMd).not.toContain('(`none`)');
    expect(esMd).toContain(`(\`${esCatalog.none}\`)`);
  });

  it('keeps an identical structural shape in both meta/card.ts files', () => {
    const stripText = <T extends Record<string, unknown>>(
      obj: T,
      keys: readonly string[],
    ): Record<string, unknown> => {
      const clone: Record<string, unknown> = { ...obj };
      for (const key of keys) delete clone[key];
      return clone;
    };
    const shapeOf = (meta: ComponentMeta) => ({
      props: meta.props.map((prop) =>
        stripText(prop, ['label', 'description', 'placeholder']),
      ),
      slots: meta.slots?.map((slot) =>
        typeof slot === 'string'
          ? slot
          : stripText(slot, ['label', 'description']),
      ),
      events: meta.events?.map((event) => stripText(event, ['description'])),
    });

    expect(shapeOf(cardMetaEs)).toEqual(shapeOf(cardMetaEn));
  });

  it('points both card metas at the same component', () => {
    expect(cardMetaEs.component).toBe(cardMetaEn.component);
  });

  it.each(pages.map((page) => [page.base, page] as const))(
    'covers page %s in both locales',
    (_base, page) => {
      expect(page.metaEs).toBeDefined();
      expect(page.mdEs.length).toBeGreaterThan(0);
    },
  );

  it.each(pages.map((page) => [page.base, page] as const))(
    'requires the ## Líneas de diseño section in the ES %s page',
    (_base, page) => {
      expect(headingsOf(page.mdEs)).toContain(esCatalog.designLines);
    },
  );

  it.each(pages.map((page) => [page.base, page] as const))(
    'aligns %s headings through the catalog',
    (_base, page) => {
      expect(headingsOf(page.mdEs)).toEqual(expectedEsHeadings(page.mdEn));
    },
  );

  it.each(pages.map((page) => [page.base, page] as const))(
    'leaves no residual EN chrome in the ES %s page',
    (_base, page) => {
      // Language-neutral headings (Props, Slots, API, Demo, Default) stay
      // literal by convention; everything else must go through the catalog.
      for (const [key, enValue] of Object.entries(enCatalog)) {
        const esValue = (esCatalog as Record<string, string>)[key];
        if (esValue === enValue) continue;
        expect(headingsOf(page.mdEs)).not.toContain(enValue);
      }
      expect(page.mdEs).not.toMatch(/\| Both \|/);
      expect(page.mdEs).not.toContain('(`none`)');
    },
  );

  it.each(pages.map((page) => [page.base, page] as const))(
    'keeps an identical structural shape in both %s metas',
    (_base, page) => {
      const stripText = <T extends Record<string, unknown>>(
        obj: T,
        keys: readonly string[],
      ): Record<string, unknown> => {
        const clone: Record<string, unknown> = { ...obj };
        for (const key of keys) delete clone[key];
        return clone;
      };
      const shapeOf = (meta: ComponentMeta) => ({
        props: meta.props.map((prop) =>
          stripText(prop, ['label', 'description', 'placeholder']),
        ),
        slots: meta.slots?.map((slot) =>
          typeof slot === 'string'
            ? slot
            : stripText(slot, ['label', 'description']),
        ),
        events: meta.events?.map((event) => stripText(event, ['description'])),
      });

      expect(shapeOf(page.metaEs)).toEqual(shapeOf(page.metaEn));
    },
  );

  it.each(pages.map((page) => [page.base, page] as const))(
    'points both %s metas at the same component',
    (_base, page) => {
      expect(page.metaEs.component).toBe(page.metaEn.component);
    },
  );
});
