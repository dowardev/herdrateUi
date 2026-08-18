// SPDX-License-Identifier: GPL-3.0-or-later

import { describe, expect, it, vi } from 'vitest';
import { useDocsI18n } from '../useDocsI18n';

// Shared vitepress mock: mutable localeIndex (REQ-7). Root locale is the
// string 'root' (never 'en').
const { localeIndex } = vi.hoisted(() => ({ localeIndex: { value: 'root' } }));

vi.mock('vitepress', () => ({
  useData: () => ({ localeIndex }),
}));

// Expected values come from the theme string audit (design) cross-checked
// against the actual hardcoded strings found in the theme components.
const EN = {
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

const ES = {
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

describe('useDocsI18n (REQ-7)', () => {
  it('maps every catalog key to English under the root locale', () => {
    localeIndex.value = 'root';
    const { t } = useDocsI18n();
    const keys = Object.keys(EN);
    expect(keys.length).toBe(15);
    for (const key of keys) {
      expect(t(key as keyof typeof EN)).toBe(EN[key as keyof typeof EN]);
    }
  });

  it('maps every catalog key to Spanish under the es locale', () => {
    localeIndex.value = 'es';
    const { t } = useDocsI18n();
    const keys = Object.keys(ES);
    expect(keys.length).toBe(15);
    for (const key of keys) {
      expect(t(key as keyof typeof ES)).toBe(ES[key as keyof typeof ES]);
    }
  });

  it('reacts to locale changes on the same composable instance', () => {
    localeIndex.value = 'root';
    const { t } = useDocsI18n();
    expect(t('close')).toBe('Close');
    localeIndex.value = 'es';
    expect(t('close')).toBe('Cerrar');
    localeIndex.value = 'root';
    expect(t('close')).toBe('Close');
  });

  it('falls back to English for any non-es locale', () => {
    localeIndex.value = 'de';
    const { t } = useDocsI18n();
    expect(t('previewTab')).toBe('Preview');
    expect(t('removeRow')).toBe('Remove row');
  });
});