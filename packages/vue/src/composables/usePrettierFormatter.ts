export type Formatter = (
  code: string,
  lang: string,
) => Promise<string> | string;

type PluginSpec =
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
  bash: 'sh',
  sh: 'sh',
  shell: 'sh',
  zsh: 'sh',
  java: 'java',
  toml: 'toml',
  xml: 'xml',
  csharp: 'csharp',
  cs: 'csharp',
  csharp_x: 'csharp',
};

const parserPlugins: Record<string, PluginSpec[]> = {
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
  angular: [{ kind: 'internal', modules: ['prettier/plugins/html'] }],
  markdown: [{ kind: 'internal', modules: ['prettier/plugins/markdown'] }],
  mdx: [{ kind: 'internal', modules: ['prettier/plugins/markdown'] }],
  yaml: [{ kind: 'internal', modules: ['prettier/plugins/yaml'] }],
  graphql: [{ kind: 'internal', modules: ['prettier/plugins/graphql'] }],
  flow: [
    { kind: 'internal', modules: ['prettier/plugins/babel'] },
    { kind: 'internal', modules: ['prettier/plugins/estree'] },
  ],
  // Opt-in peer dependencies
  python: [{ kind: 'external', package: '@prettier/plugin-python' }],
  ruby: [{ kind: 'external', package: '@prettier/plugin-ruby' }],
  rust: [{ kind: 'external', package: 'prettier-plugin-rust' }],
  sql: [{ kind: 'external', package: 'prettier-plugin-sql' }],
  sh: [{ kind: 'external', package: 'prettier-plugin-sh' }],
  java: [{ kind: 'external', package: 'prettier-plugin-java' }],
  toml: [{ kind: 'external', package: 'prettier-plugin-toml' }],
  xml: [{ kind: 'external', package: '@prettier/plugin-xml' }],
  csharp: [{ kind: 'external', package: 'prettier-plugin-csharp' }],
};

async function loadSpec(spec: PluginSpec): Promise<unknown> {
  try {
    if (spec.kind === 'internal') {
      const modules = await Promise.all(spec.modules.map((m) => import(m)));
      return modules;
    }
    const mod = await import(/* @vite-ignore */ spec.package);
    return mod;
  } catch {
    return null;
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
    prettierPromise = p as typeof prettierPromise;
  }
  return prettierPromise;
}

export function usePrettierFormatter(): Formatter {
  return async function formatter(code: string, lang: string): Promise<string> {
    const parser = parserMap[lang.toLowerCase()];
    if (!parser) return code;

    try {
      const prettier = await loadPrettier();
      const specs = parserPlugins[parser];
      if (!specs || specs.length === 0) return code;

      const loaded = await Promise.all(specs.map((s) => loadSpec(s)));
      const plugins: unknown[] = [];
      for (const item of loaded) {
        if (item === null) continue;
        if (Array.isArray(item)) {
          for (const m of item) {
            if (m !== null && m !== undefined) plugins.push(m);
          }
        } else {
          plugins.push(item);
        }
      }
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
