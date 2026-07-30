// SPDX-License-Identifier: GPL-3.0-or-later

function fnv1a(str: string): number {
  let hash = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  return hash;
}

const COLORS = [
  '#f38ba8',
  '#fab387',
  '#f9e2af',
  '#a6e3a1',
  '#94e2d5',
  '#89b4fa',
  '#cba6f7',
  '#f5c2e7',
];

export { COLORS, fnv1a };
