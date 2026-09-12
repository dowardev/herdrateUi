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
import { commandPaletteMeta as commandPaletteMetaEn } from '../../../components/meta/commandpalette';

type PropText = Pick<PropMeta, 'label' | 'description'> &
  Partial<Pick<PropMeta, 'placeholder'>>;

const propText: Record<string, PropText> = {
  commands: {
    label: 'Comandos',
    description: 'Lista de comandos disponibles en la paleta',
  },
  modelValue: {
    label: 'Abierto',
    description: 'Controla apertura/cierre de la paleta',
  },
  color: {
    label: 'Color',
    description: 'Color del prompt y del item resaltado',
  },
  placeholder: {
    label: 'Placeholder',
    description: 'Placeholder del input de búsqueda',
  },
};

const slotText: Record<string, Pick<SlotMeta, 'label' | 'description'>> = {};

const eventText: Record<string, Pick<EventMeta, 'description'>> = {
  'update:modelValue': {
    description: 'Se emite al abrir/cerrar',
  },
  select: {
    description: 'Se emite al seleccionar un comando',
  },
};

function isSlotObject(slot: string | SlotMeta): slot is SlotMeta {
  return typeof slot !== 'string';
}

export const commandPaletteMeta: ComponentMeta = {
  ...commandPaletteMetaEn,
  props: commandPaletteMetaEn.props.map((prop) => ({
    ...prop,
    ...(propText[prop.name] ?? {}),
  })),
  slots: commandPaletteMetaEn.slots?.map((slot) =>
    isSlotObject(slot)
      ? { ...slot, ...(slotText[slot.name] ?? {}) }
      : slotText[slot]
        ? { name: slot, ...slotText[slot] }
        : slot,
  ),
  events: commandPaletteMetaEn.events?.map((event) => ({
    ...event,
    ...(eventText[event.name] ?? {}),
  })),
};
