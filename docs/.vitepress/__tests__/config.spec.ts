// SPDX-License-Identifier: GPL-3.0-or-later

import { describe, expect, it } from 'vitest';
import config from '../config';

// REQ-4: every component name present in the existing sidebar must stay
// byte-identical in both locales.
const componentNames = [
  'Accordion',
  'Avatar',
  'Badge',
  'Box',
  'Breadcrumbs',
  'Button',
  'ButtonGroup',
  'Card',
  'Checkbox',
  'CodeBlock',
  'ComboBox',
  'CommandPalette',
  'Divider',
  'Gutter',
  'Input',
  'Kbd',
  'KeyHint',
  'LogLines',
  'Menu',
  'Modal',
  'Panel',
  'ProgressBar',
  'Radio',
  'ScrollView',
  'SearchBar',
  'Select',
  'SnakeLoader',
  'Spinner',
  'StatusBar',
  'Stepper',
  'Table',
  'Tabs',
  'Tag',
  'TagInput',
  'TipBox',
  'Toast',
  'Todo',
  'Toggle',
  'Tooltip',
  'TreeNode',
];

describe('VitePress config locales (REQ-1, REQ-6)', () => {
  it('defines exactly two locales: root and es', () => {
    expect(Object.keys(config.locales)).toEqual(['root', 'es']);
  });

  it('excludes docs/superpowers from the build', () => {
    expect(config.srcExclude).toContain('superpowers/**');
  });

  it('configures root as English at /', () => {
    expect(config.locales.root.label).toBe('English');
    expect(config.locales.root.lang).toBe('en');
    expect(config.locales.root.themeConfig.langMenuLabel).toBe(
      'Change language',
    );
  });

  it('configures es as Spanish at /es/ with Spanish metadata', () => {
    expect(config.locales.es.label).toBe('Español');
    expect(config.locales.es.lang).toBe('es');
    expect(config.locales.es.title).toBe('Librería de UI Vue de Herdrate');
    expect(config.locales.es.description).toContain('Catppuccin');
    expect(config.locales.es.themeConfig.langMenuLabel).toBe('Cambiar idioma');
  });
});

describe('per-locale navigation (REQ-1)', () => {
  it('root nav is English and rooted at /', () => {
    expect(config.locales.root.themeConfig.nav).toEqual([
      { text: 'Home', link: '/' },
      { text: 'Getting started', link: '/getting-started' },
      { text: 'Colors', link: '/color' },
      { text: 'Components', link: '/components/panel' },
      { text: 'Design lines', link: '/design-lines' },
    ]);
  });

  it('es nav is Spanish and rooted at /es/', () => {
    expect(config.locales.es.themeConfig.nav).toEqual([
      { text: 'Inicio', link: '/es/' },
      { text: 'Primeros pasos', link: '/es/getting-started' },
      { text: 'Colores', link: '/es/color' },
      { text: 'Componentes', link: '/es/components/panel' },
      { text: 'Líneas de diseño', link: '/es/design-lines' },
    ]);
  });
});

describe('sidebar parity between locales (REQ-4)', () => {
  function componentsGroup(locale: 'root' | 'es') {
    const sidebar = config.locales[locale].themeConfig.sidebar;
    const header = locale === 'es' ? 'Componentes' : 'Components';
    const group = sidebar.find((entry) => entry.text === header);
    if (!group) throw new Error(`missing ${header} sidebar group in ${locale}`);
    return group.items;
  }

  it('lists all components with byte-identical names in both locales', () => {
    const rootItems = componentsGroup('root');
    const esItems = componentsGroup('es');

    expect(rootItems).toHaveLength(componentNames.length);
    expect(esItems).toHaveLength(componentNames.length);
    expect(rootItems.map((item) => item.text)).toEqual(componentNames);
    expect(esItems.map((item) => item.text)).toEqual(componentNames);
  });

  it('roots root links at /components/* and es links at /es/components/*', () => {
    const rootLinks = componentsGroup('root').map((item) => item.link);
    const esLinks = componentsGroup('es').map((item) => item.link);

    expect(rootLinks).toHaveLength(componentNames.length);
    expect(rootLinks[0]).toBe('/components/accordion');
    expect(rootLinks.every((link) => link.startsWith('/components/'))).toBe(
      true,
    );
    expect(esLinks).toEqual(rootLinks.map((link) => `/es${link}`));
  });
});
