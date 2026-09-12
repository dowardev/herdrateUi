// SPDX-License-Identifier: GPL-3.0-or-later

import type {
  ComponentMeta,
  EventMeta,
  PropMeta,
  SlotMeta,
} from '../../../.vitepress/theme/PropControls.vue';
// LBDS-238: the English meta is the single source of truth. This file
// is a thin locale wrapper — structure (names, types, defaults, options,
// order) is inherited from the source; only translatable display strings
// (label, description, placeholder) are overridden here. Any structural drift
// is caught by docs/.vitepress/__tests__/docs-i18n-parity.spec.ts.
import { codeBlockMeta as codeBlockMetaEn } from '../../../components/meta/code-block';

type PropText = Pick<PropMeta, 'label' | 'description'> &
  Partial<Pick<PropMeta, 'placeholder'>>;

const propText: Record<string, PropText> = {
  code: {
    label: 'Código',
    description: 'Código fuente a mostrar',
  },
  language: {
    label: 'Lenguaje',
    description: 'Etiqueta del lenguaje mostrada en el encabezado',
  },
  color: {
    label: 'Color',
    description: 'Color de acento del borde',
  },
  border: {
    label: 'Borde',
    description: 'Muestra el borde exterior del bloque',
  },
  showLines: {
    label: 'Mostrar líneas',
    description: 'Muestra números de línea',
  },
  maxHeight: {
    label: 'Altura máxima',
    description: 'Altura máxima antes de que el bloque se vuelva desplazable',
  },
  formatter: {
    label: 'Formatter',
    description:
      'Función (code, language) => string | Promise<string> para formatear. Por defecto none.',
  },
};

const slotText: Record<string, Pick<SlotMeta, 'label' | 'description'>> = {
  default: {
    label: 'Contenido',
    description: 'Alternativa a la prop code',
  },
};

const eventText: Record<string, Pick<EventMeta, 'description'>> = {};

function isSlotObject(slot: string | SlotMeta): slot is SlotMeta {
  return typeof slot !== 'string';
}

export const codeBlockMeta: ComponentMeta = {
  ...codeBlockMetaEn,
  props: codeBlockMetaEn.props.map((prop) => ({
    ...prop,
    ...(propText[prop.name] ?? {}),
  })),
  slots: codeBlockMetaEn.slots?.map((slot) =>
    isSlotObject(slot)
      ? { ...slot, ...(slotText[slot.name] ?? {}) }
      : slotText[slot]
        ? { name: slot, ...slotText[slot] }
        : slot,
  ),
  events: codeBlockMetaEn.events?.map((event) => ({
    ...event,
    ...(eventText[event.name] ?? {}),
  })),
};
