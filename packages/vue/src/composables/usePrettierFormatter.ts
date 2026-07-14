export type Formatter = (
  code: string,
  lang: string,
) => Promise<string> | string;

type PluginLoader = () => Promise<unknown>;

const parserMap: Record<string, string> = {
  javascript: 'babel',
  js: 'babel',
  jsx: 'babel',
  mjs: 'babel',
  cjs: 'babel',
  typescript: 'typescript',
  ts: 'typescript',
  tsx: 'typescript',
  mts: 'typescript',
  cts: 'typescript',
  json: 'json',
  jsonc: 'jsonc',
  json5: 'json5',
  css: 'css',
  scss: 'scss',
  less: 'less',
  html: 'html',
  vue: 'vue',
  markdown: 'markdown',
  md: 'markdown',
  mdx: 'mdx',
  yaml: 'yaml',
  yml: 'yaml',
  graphql: 'graphql',
  gql: 'graphql',
  angular: 'angular',
  flow: 'flow',
};

const pluginLoaders: Record<string, PluginLoader> = {
  babel: () =>
    import('prettier/plugins/babel').then((m) => (m.default ?? m) as never),
  estree: () =>
    import('prettier/plugins/estree').then((m) => (m.default ?? m) as never),
  typescript: () =>
    import('prettier/plugins/typescript').then(
      (m) => (m.default ?? m) as never,
    ),
  postcss: () =>
    import('prettier/plugins/postcss').then((m) => (m.default ?? m) as never),
  html: () =>
    import('prettier/plugins/html').then((m) => (m.default ?? m) as never),
  markdown: () =>
    import('prettier/plugins/markdown').then((m) => (m.default ?? m) as never),
  yaml: () =>
    import('prettier/plugins/yaml').then((m) => (m.default ?? m) as never),
  graphql: () =>
    import('prettier/plugins/graphql').then((m) => (m.default ?? m) as never),
};

const parserPlugins: Record<string, string[]> = {
  babel: ['babel', 'estree'],
  typescript: ['typescript', 'estree'],
  css: ['postcss'],
  scss: ['postcss'],
  less: ['postcss'],
  html: ['html'],
  vue: ['html'],
  angular: ['html'],
  markdown: ['markdown'],
  mdx: ['markdown'],
  yaml: ['yaml'],
  graphql: ['graphql'],
  flow: ['babel', 'estree'],
};

let prettierPromise: Promise<{
  format: (
    source: string,
    opts: { parser: string; plugins: unknown[] },
  ) => Promise<string>;
}> | null = null;

export function usePrettierFormatter(): Formatter {
  return async function formatter(code: string, lang: string): Promise<string> {
    const parser = parserMap[lang.toLowerCase()];
    if (!parser) return code;

    try {
      if (!prettierPromise) {
        prettierPromise = import('prettier/standalone') as Promise<{
          format: (
            source: string,
            opts: { parser: string; plugins: unknown[] },
          ) => Promise<string>;
        }>;
      }
      const prettier = await prettierPromise;
      const pluginNames = parserPlugins[parser];
      if (!pluginNames) return code;

      const plugins = await Promise.all(
        pluginNames.map((name) => {
          const loader = pluginLoaders[name];
          return loader ? loader() : Promise.resolve(null);
        }),
      );

      return await prettier.format(code, {
        parser,
        plugins: plugins.filter(Boolean),
      });
    } catch {
      return code;
    }
  };
}
