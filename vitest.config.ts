// SPDX-License-Identifier: GPL-3.0-or-later

import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@herdrate/vue': resolve(__dirname, 'packages/vue/src/index.ts'),
    },
  },
  test: {
    environment: 'happy-dom',
  },
});
