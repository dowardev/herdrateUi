import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import cssInjectedByJs from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [vue(), cssInjectedByJs({ topExecutionPriority: true })],
  build: {
    cssCodeSplit: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'HerdrateVue',
      formats: ['es'],
      fileName: () => 'herdrate-vue.es.js',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
