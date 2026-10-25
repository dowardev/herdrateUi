// SPDX-License-Identifier: GPL-3.0-or-later

// GitLab issue #2: the user-facing site must document how to install the
// library and how to import its components. These checks pin the page content
// against the real package manifest and the real public exports, so the docs
// cannot drift away from what the package actually ships.
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const root = process.cwd();
const read = (path: string) => readFileSync(resolve(root, path), 'utf8');

const enMd = read('docs/getting-started.md');
const esMd = read('docs/es/getting-started.md');

const packageJson = JSON.parse(read('packages/vue/package.json')) as {
  name: string;
  peerDependencies: Record<string, string>;
  exports: Record<string, unknown>;
};

const libraryIndex = read('packages/vue/src/index.ts');

function headingsOf(md: string): string[] {
  return md
    .split('\n')
    .filter((line) => line.startsWith('## '))
    .map((line) => line.slice(3).trim());
}

describe('getting-started page (GitLab issue #2)', () => {
  it('exists in both locales', () => {
    expect(enMd.length).toBeGreaterThan(0);
    expect(esMd.length).toBeGreaterThan(0);
  });

  it('keeps the same section structure in both locales', () => {
    expect(headingsOf(esMd)).toHaveLength(headingsOf(enMd).length);
  });

  it('documents the installation command with the real package name', () => {
    for (const md of [enMd, esMd]) {
      expect(md).toContain(`pnpm add ${packageJson.name}`);
      expect(md).toContain(`npm install ${packageJson.name}`);
    }
  });

  it('documents the real peer dependency range', () => {
    const vuePeer = packageJson.peerDependencies.vue;
    expect(vuePeer).toBe('^3.4.0');
    expect(enMd).toContain('vue ^3.4');
    expect(esMd).toContain('vue ^3.4');
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
