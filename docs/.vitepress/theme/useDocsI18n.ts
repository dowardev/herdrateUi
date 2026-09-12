// SPDX-License-Identifier: GPL-3.0-or-later

import { useData } from 'vitepress';
import enPageChrome from '../locales/en.json';
import esPageChrome from '../locales/es.json';

/**
 * Catalog keys for the theme UI strings (REQ-7). `Playground`, `Props` and
 * `Slots` are language-neutral and stay literal in the components.
 */
export const docsI18nKeys = [
  'componentFallback',
  'previewTab',
  'codeTab',
  'slotContentComment',
  'defaultSlotExample',
  'defaultSlotContent',
  'controls',
  'close',
  'required',
  'empty',
  'eventsTab',
  'eventsSection',
  'removeRow',
  'noColor',
  'addRow',
] as const;

export type DocsI18nKey = (typeof docsI18nKeys)[number];

const en: Record<DocsI18nKey, string> = {
  componentFallback: 'Component',
  previewTab: 'Preview',
  codeTab: 'Code',
  slotContentComment: 'content of',
  defaultSlotExample: 'Example content',
  defaultSlotContent: 'Content',
  controls: 'Controls',
  close: 'Close',
  required: 'Required',
  empty: 'Select a component…',
  eventsTab: 'Events',
  eventsSection: 'Events',
  removeRow: 'Remove row',
  noColor: 'No color',
  addRow: 'Add row',
};

const es: Record<DocsI18nKey, string> = {
  componentFallback: 'Componente',
  previewTab: 'Vista Previa',
  codeTab: 'Código',
  slotContentComment: 'contenido de',
  defaultSlotExample: 'Contenido de ejemplo',
  defaultSlotContent: 'Contenido',
  controls: 'Controles',
  close: 'Cerrar',
  required: 'Requerido',
  empty: 'Selecciona un componente para ver su documentación',
  eventsTab: 'Eventos',
  eventsSection: 'Eventos',
  removeRow: 'Eliminar fila',
  noColor: 'Sin color',
  addRow: 'Agregar fila',
};

/**
 * Locale-aware theme strings. Root localeIndex is the string `'root'` (never
 * `'en'`), so anything that is not `'es'` resolves to English.
 */
export function useDocsI18n() {
  const { localeIndex } = useData();
  return {
    t: (k: DocsI18nKey): string => (localeIndex.value === 'es' ? es : en)[k],
  };
}

/**
 * Page-chrome catalog keys (LBDS-238): section headings, table headers and
 * misc cells shared by the component pages. `Props`, `Slots`, `API`, `Demo`
 * and `Default` are language-neutral and stay literal in Spanish, matching
 * the convention already used by the theme strings above.
 */
export const pageChromeKeys = [
  'designLines',
  'props',
  'slots',
  'events',
  'api',
  'demo',
  'tokens',
  'type',
  'description',
  'default',
  'both',
  'none',
  'types',
] as const;

export type PageChromeKey = (typeof pageChromeKeys)[number];

const enChrome: Record<PageChromeKey, string> = enPageChrome;
const esChrome: Partial<Record<PageChromeKey, string>> = esPageChrome;

/**
 * Locale-aware page-chrome strings with fallback to English: when a key is
 * missing from the Spanish catalog, the English value is returned instead
 * of an empty string or a missing-key error.
 */
export function usePageChromeI18n() {
  const { localeIndex } = useData();
  return {
    t: (k: PageChromeKey): string =>
      localeIndex.value === 'es' ? (esChrome[k] ?? enChrome[k]) : enChrome[k],
  };
}
