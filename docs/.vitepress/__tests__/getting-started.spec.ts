// SPDX-License-Identifier: GPL-3.0-or-later

// GitLab issue #2: the user-facing site must document how to install the
// library and how to import its components. These checks pin the page content
// against the real package manifest and the real public exports, so the docs
// cannot drift away from what the package actually ships.
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import config from '../config';

const root = process.cwd();
const read = (path: string) => readFileSync(resolve(root, path), 'utf8');

const enMd = read('docs/getting-started.md');
const esMd = read('docs/es/getting-started.md');

const packageJson = JSON.parse(read('packages/vue/package.json')) as {
  name: string;
  peerDependencies: Record<string, string>;
  peerDependenciesMeta?: Record<string, { optional?: boolean }>;
  exports: Record<string, unknown>;
};

const libraryIndex = read('packages/vue/src/index.ts');

function headingsOf(md: string): string[] {
  return md
    .split('\n')
    .filter((line) => line.startsWith('## '))
    .map((line) => line.slice(3).trim());
}

// The map below is the source of truth for the section structure of BOTH
// locales: the EN page must expose exactly its keys, in order, and the ES page
// must expose exactly its values, in order. A count-only comparison would let a
// page drift (or keep an untranslated heading) without failing.
const esHeadingByEnHeading: Record<string, string> = {
  Installation: 'Instalación',
  Import: 'Importación',
  Styles: 'Estilos',
  Usage: 'Uso',
  'Live example': 'Ejemplo en vivo',
  'Next steps': 'Próximos pasos',
};

// The identifiers the library actually re-exports from its entry point.
// Matching the export statement (not a bare substring) keeps a renamed or
// aliased public export from slipping through: `'useDesign'` also appears in
// the module path `'./composables/useDesign'`.
function exportedIdentifiers(source: string): Set<string> {
  const names = new Set<string>();
  const statements = source.match(/export\s+(?:type\s+)?\{[^}]*\}/g) ?? [];
  for (const statement of statements) {
    for (const part of statement
      .replace(/export\s+(?:type\s+)?\{|\}/g, '')
      .split(',')) {
      const identifier = part
        .trim()
        .split(/\s+as\s+/)
        .pop()
        ?.trim();
      if (identifier) names.add(identifier);
    }
  }
  return names;
}

describe('getting-started page (GitLab issue #2)', () => {
  it('exists in both locales', () => {
    expect(enMd.length).toBeGreaterThan(0);
    expect(esMd.length).toBeGreaterThan(0);
  });

  it('keeps the same section structure in both locales', () => {
    const enHeadings = headingsOf(enMd);
    expect(enHeadings).toEqual(Object.keys(esHeadingByEnHeading));
    expect(headingsOf(esMd)).toEqual(
      enHeadings.map((heading) => esHeadingByEnHeading[heading]),
    );
  });

  it('documents the installation command with the real package name', () => {
    for (const md of [enMd, esMd]) {
      expect(md).toContain(`pnpm add ${packageJson.name}`);
      expect(md).toContain(`npm install ${packageJson.name}`);
    }
  });

  it('documents the real peer dependency range', () => {
    const vuePeer = packageJson.peerDependencies.vue;
    expect(vuePeer).toMatch(/^\^3\.4/);
    expect(enMd).toContain('vue ^3.4');
    expect(esMd).toContain('vue ^3.4');
  });

  it('documents the optional prettier peer dependency and how it is used', () => {
    const prettierPeer = packageJson.peerDependencies.prettier;
    expect(prettierPeer).toMatch(/^\^3/);
    expect(packageJson.peerDependenciesMeta?.prettier?.optional).toBe(true);
    for (const md of [enMd, esMd]) {
      expect(md).toContain('prettier ^3');
      expect(md).toContain('usePrettierFormatter');
    }
  });

  it('documents that the package is ESM-only', () => {
    const rootExport = packageJson.exports['.'] as Record<string, string>;
    expect(Object.keys(rootExport)).not.toContain('require');
    expect(enMd).toContain('ESM-only');
    expect(esMd).toContain('solo ESM');
  });

  it('shows the import example with names that the library really exports', () => {
    for (const md of [enMd, esMd]) {
      expect(md).toContain(
        `import { Button, Panel } from '${packageJson.name}';`,
      );
    }
    expect(libraryIndex).toContain(
      "export { default as Button } from './components/button/Button.vue';",
    );
    expect(libraryIndex).toContain(
      "export { default as Panel } from './components/panel/Panel.vue';",
    );
  });

  it('pins every composable and type the page tells users to import', () => {
    const documented = [
      'useDesign',
      'useToast',
      'DEFAULT_COLOR',
      'Color',
      'Fill',
      'DesignLine',
    ];
    const exported = exportedIdentifiers(libraryIndex);
    for (const name of documented) {
      expect(enMd).toContain(name);
      expect(esMd).toContain(name);
      expect(exported).toContain(name);
    }
  });

  it('registers the page in the nav and the sidebar of both locales', () => {
    const rootConfig = config.locales.root.themeConfig;
    const esConfig = config.locales.es.themeConfig;

    expect(rootConfig.nav).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ link: '/getting-started' }),
      ]),
    );
    expect(esConfig.nav).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ link: '/es/getting-started' }),
      ]),
    );

    for (const [themeConfig, link] of [
      [rootConfig, '/getting-started'],
      [esConfig, '/es/getting-started'],
    ] as const) {
      const groups = themeConfig.sidebar as {
        text: string;
        items: { link: string }[];
      }[];
      const links = groups.flatMap((group) =>
        group.items.map((item) => item.link),
      );
      expect(links).toContain(link);
    }
  });

  it('states that the CSS is injected automatically', () => {
    expect(enMd.toLowerCase()).toContain('injected automatically');
    expect(esMd.toLowerCase()).toContain('inyecta automáticamente');
  });

  it('states that there are no per-component subpath imports', () => {
    expect(enMd).toContain('`@dowardev/herdrate-vue/button` does not exist');
    expect(esMd).toContain('`@dowardev/herdrate-vue/button` no existe');
    expect(Object.keys(packageJson.exports)).toEqual(['.']);
  });
});
