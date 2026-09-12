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
import { comboBoxMeta as comboBoxMetaEn } from '../../../components/meta/combobox';

type PropText = Pick<PropMeta, 'label' | 'description'> &
  Partial<Pick<PropMeta, 'placeholder'>>;

const propText: Record<string, PropText> = {
  items: {
    label: 'Ítems',
    description: 'Lista de opciones del combo',
  },
  modelValue: {
    label: 'Valor',
    description: 'Valor seleccionado (v-model)',
  },
  color: {
    label: 'Color',
    description: 'Color de foco y highlight del dropdown',
  },
  placeholder: {
    label: 'Placeholder',
    description: 'Texto dentro del input mientras está vacío',
  },
  disabled: {
    label: 'Deshabilitado',
    description: 'Deshabilita la interacción',
  },
};

const slotText: Record<string, Pick<SlotMeta, 'label' | 'description'>> = {};

const eventText: Record<string, Pick<EventMeta, 'description'>> = {
  'update:modelValue': {
    description: 'Se emite al seleccionar un ítem',
  },
};

function isSlotObject(slot: string | SlotMeta): slot is SlotMeta {
  return typeof slot !== 'string';
}

export const comboBoxMeta: ComponentMeta = {
  ...comboBoxMetaEn,
  props: comboBoxMetaEn.props.map((prop) => ({
    ...prop,
    ...(propText[prop.name] ?? {}),
  })),
  slots: comboBoxMetaEn.slots?.map((slot) =>
    isSlotObject(slot)
      ? { ...slot, ...(slotText[slot.name] ?? {}) }
      : slotText[slot]
        ? { name: slot, ...slotText[slot] }
        : slot,
  ),
  events: comboBoxMetaEn.events?.map((event) => ({
    ...event,
    ...(eventText[event.name] ?? {}),
  })),
};
