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
import { tagInputMeta as tagInputMetaEn } from '../../../components/meta/tag-input';

type PropText = Pick<PropMeta, 'label' | 'description'> &
  Partial<Pick<PropMeta, 'placeholder'>>;

const propText: Record<string, PropText> = {
  modelValue: {
    label: 'Tags',
    description: 'Lista de tags (v-model)',
  },
  color: {
    label: 'Color',
    description: 'Color semántico de los tags',
  },
  disabled: {
    label: 'Deshabilitado',
    description: 'Deshabilita el input',
  },
  placeholder: {
    label: 'Placeholder',
    description: 'Placeholder del input',
  },
  max: {
    label: 'Máximo',
    description: 'Máximo de tags (0 = sin límite)',
  },
};

const slotText: Record<string, Pick<SlotMeta, 'label' | 'description'>> = {};

const eventText: Record<string, Pick<EventMeta, 'description'>> = {
  'update:modelValue': {
    description: 'Se emite al añadir o eliminar un tag',
  },
};

function isSlotObject(slot: string | SlotMeta): slot is SlotMeta {
  return typeof slot !== 'string';
}

export const tagInputMeta: ComponentMeta = {
  ...tagInputMetaEn,
  props: tagInputMetaEn.props.map((prop) => ({
    ...prop,
    ...(propText[prop.name] ?? {}),
  })),
  slots: tagInputMetaEn.slots?.map((slot) =>
    isSlotObject(slot)
      ? { ...slot, ...(slotText[slot.name] ?? {}) }
      : slotText[slot]
        ? { name: slot, ...slotText[slot] }
        : slot,
  ),
  events: tagInputMetaEn.events?.map((event) => ({
    ...event,
    ...(eventText[event.name] ?? {}),
  })),
};
