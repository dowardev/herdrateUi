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
import { radioMeta as radioMetaEn } from '../../../components/meta/radio';

type PropText = Pick<PropMeta, 'label' | 'description'> &
  Partial<Pick<PropMeta, 'placeholder'>>;

const propText: Record<string, PropText> = {
  modelValue: {
    label: 'Valor seleccionado',
  },
  value: {
    label: 'Value (identificador)',
    placeholder: 'Valor único de esta opción',
  },
  label: {
    label: 'Label',
    placeholder: 'Texto visible',
  },
  disabled: {
    label: 'Disabled',
  },
  color: {
    label: 'Color',
  },
};

const slotText: Record<string, Pick<SlotMeta, 'label' | 'description'>> = {};

const eventText: Record<string, Pick<EventMeta, 'description'>> = {};

function isSlotObject(slot: string | SlotMeta): slot is SlotMeta {
  return typeof slot !== 'string';
}

export const radioMeta: ComponentMeta = {
  ...radioMetaEn,
  props: radioMetaEn.props.map((prop) => ({
    ...prop,
    ...(propText[prop.name] ?? {}),
  })),
  slots: radioMetaEn.slots?.map((slot) =>
    isSlotObject(slot)
      ? { ...slot, ...(slotText[slot.name] ?? {}) }
      : slotText[slot]
        ? { name: slot, ...slotText[slot] }
        : slot,
  ),
  events: radioMetaEn.events?.map((event) => ({
    ...event,
    ...(eventText[event.name] ?? {}),
  })),
};
