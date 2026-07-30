// SPDX-License-Identifier: GPL-3.0-or-later

export type Formatter = (
  code: string,
  lang: string,
) => Promise<string> | string;

type ParserSpec =
  | { kind: 'internal'; modules: string[] }
  | { kind: 'external'; package: string };

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
  python: 'python',
  py: 'python',
  ruby: 'ruby',
  rust: 'rust',
  rs: 'rust',
  sql: 'sql',
  bash: 'bash',
  sh: 'bash',
  shell: 'bash',
  zsh: 'bash',
  java: 'java',
  toml: 'toml',
  xml: 'xml',
  csharp: 'csharp',
  cs: 'csharp',
  csharp_x: 'csharp',
};

const parserModules: Record<string, ParserSpec[]> = {
  babel: [
    { kind: 'internal', modules: ['prettier/plugins/babel'] },
    { kind: 'internal', modules: ['prettier/plugins/estree'] },
  ],
  typescript: [
    { kind: 'internal', modules: ['prettier/plugins/typescript'] },
    { kind: 'internal', modules: ['prettier/plugins/estree'] },
  ],
  json: [
    { kind: 'internal', modules: ['prettier/plugins/babel'] },
    { kind: 'internal', modules: ['prettier/plugins/estree'] },
  ],
  jsonc: [
    { kind: 'internal', modules: ['prettier/plugins/babel'] },
    { kind: 'internal', modules: ['prettier/plugins/estree'] },
  ],
  json5: [
    { kind: 'internal', modules: ['prettier/plugins/babel'] },
    { kind: 'internal', modules: ['prettier/plugins/estree'] },
  ],
  css: [{ kind: 'internal', modules: ['prettier/plugins/postcss'] }],
  scss: [{ kind: 'internal', modules: ['prettier/plugins/postcss'] }],
  less: [{ kind: 'internal', modules: ['prettier/plugins/postcss'] }],
  html: [{ kind: 'internal', modules: ['prettier/plugins/html'] }],
  vue: [{ kind: 'internal', modules: ['prettier/plugins/html'] }],
  angular: [{ kind: 'internal', modules: ['prettier/plugins/angular'] }],
  markdown: [{ kind: 'internal', modules: ['prettier/plugins/markdown'] }],
  mdx: [{ kind: 'internal', modules: ['prettier/plugins/markdown'] }],
  yaml: [{ kind: 'internal', modules: ['prettier/plugins/yaml'] }],
  graphql: [{ kind: 'internal', modules: ['prettier/plugins/graphql'] }],
  flow: [
    { kind: 'internal', modules: ['prettier/plugins/babel'] },
    { kind: 'internal', modules: ['prettier/plugins/flow'] },
  ],
  python: [{ kind: 'external', package: '@prettier/plugin-python' }],
  ruby: [{ kind: 'external', package: '@prettier/plugin-ruby' }],
  rust: [{ kind: 'external', package: 'prettier-plugin-rust' }],
  sql: [{ kind: 'external', package: 'prettier-plugin-sql' }],
  bash: [{ kind: 'external', package: 'prettier-plugin-sh' }],
  java: [{ kind: 'external', package: 'prettier-plugin-java' }],
  toml: [{ kind: 'external', package: 'prettier-plugin-toml' }],
  xml: [{ kind: 'external', package: '@prettier/plugin-xml' }],
  csharp: [{ kind: 'external', package: 'prettier-plugin-csharp' }],
};

const warnedExternal = new Set<string>();

const internalPluginLoaders: Record<string, () => Promise<unknown>> = {
  'prettier/plugins/estree': () => import('prettier/plugins/estree'),
  'prettier/plugins/babel': () => import('prettier/plugins/babel'),
  'prettier/plugins/typescript': () => import('prettier/plugins/typescript'),
  'prettier/plugins/postcss': () => import('prettier/plugins/postcss'),
  'prettier/plugins/html': () => import('prettier/plugins/html'),
  'prettier/plugins/markdown': () => import('prettier/plugins/markdown'),
  'prettier/plugins/yaml': () => import('prettier/plugins/yaml'),
  'prettier/plugins/graphql': () => import('prettier/plugins/graphql'),
  'prettier/plugins/flow': () => import('prettier/plugins/flow'),
  'prettier/plugins/angular': () => import('prettier/plugins/angular'),
};

async function loadSpec(spec: ParserSpec): Promise<unknown[]> {
  try {
    if (spec.kind === 'internal') {
      const modules = await Promise.all(
        spec.modules.map((m) => {
          const loader = internalPluginLoaders[m];
          if (!loader) throw new Error(`Unknown plugin: ${m}`);
          return loader();
        }),
      );
      return modules.map((m) => (m as { default?: unknown }).default ?? m);
    }
    const mod = await import(/* @vite-ignore */ spec.package);
    return [mod.default ?? mod];
  } catch {
    if (spec.kind === 'external' && !warnedExternal.has(spec.package)) {
      warnedExternal.add(spec.package);
      console.warn(
        `[@dowardev/herdrate-vue] prettier plugin "${spec.package}" not installed`,
      );
    }
    return [];
  }
}

let prettierPromise: Promise<{
  format: (
    source: string,
    opts: { parser: string; plugins: unknown[] },
  ) => Promise<string>;
}> | null = null;

async function loadPrettier() {
  if (!prettierPromise) {
    const p = await import('prettier/standalone');
    prettierPromise = p as unknown as typeof prettierPromise;
  }
  // biome-ignore lint/style/noNonNullAssertion: vue-tsc requires this
  return prettierPromise!;
}

export function usePrettierFormatter(): Formatter {
  return async function formatter(code: string, lang: string): Promise<string> {
    const parser = parserMap[lang.toLowerCase()];
    if (!parser) return code;

    try {
      const prettier = await loadPrettier();
      const specs = parserModules[parser];
      if (!specs || specs.length === 0) return code;

      const loaded = await Promise.all(specs.map((s) => loadSpec(s)));
      const plugins: unknown[] = loaded.flat().filter((p) => p != null);

      if (plugins.length === 0) return code;

      return await prettier.format(code, {
        parser,
        plugins,
      });
    } catch {
      return code;
    }
  };
}
