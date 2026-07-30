// SPDX-License-Identifier: GPL-3.0-or-later

import { describe, it } from 'vitest';

describe('debug', () => {
  it('test prettier standalone', async () => {
    try {
      const m = (await import('prettier/standalone' as string)) as {
        format: (s: string, o: object) => Promise<string>;
      };
      console.log('STANDALONE LOADED:', typeof m.format);
      const r = await m.format('const  x=1', { parser: 'babel', plugins: [] });
      console.log('FORMATTED:', JSON.stringify(r));
    } catch (e) {
      console.log('ERROR:', (e as Error).message);
    }
  });

  it('test dynamicImport helper', async () => {
    try {
      const helper = new Function('p', 'return import(p)') as (
        p: string,
      ) => Promise<unknown>;
      const m = (await helper('prettier/standalone')) as {
        format: (s: string, o: object) => Promise<string>;
      };
      console.log('VIA HELPER:', typeof m.format);
      const r = await m.format('const  x=1', { parser: 'babel', plugins: [] });
      console.log('HELPER FORMATTED:', JSON.stringify(r));
    } catch (e) {
      console.log('HELPER ERROR:', (e as Error).message);
    }
  });
});
