// SPDX-License-Identifier: GPL-3.0-or-later

import { useData } from 'vitepress';

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