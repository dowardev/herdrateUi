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
import { toastMeta as toastMetaEn } from '../../../components/meta/toast';

type PropText = Pick<PropMeta, 'label' | 'description'> &
  Partial<Pick<PropMeta, 'placeholder'>>;

const propText: Record<string, PropText> = {
  message: {
    label: 'Mensaje',
    description: 'Contenido del toast (requerido)',
    placeholder: '¡Operación exitosa!',
  },
  color: {
    label: 'Color',
    description: 'Color semántico del toast',
  },
  icon: {
    label: 'Icono',
    description: 'Icono personalizado (default: ▼/✓/●/✖)',
  },
};

const slotText: Record<string, Pick<SlotMeta, 'label' | 'description'>> = {};

const eventText: Record<string, Pick<EventMeta, 'description'>> = {
  close: {
    description: 'Se emite al hacer clic en el toast',
  },
};

function isSlotObject(slot: string | SlotMeta): slot is SlotMeta {
  return typeof slot !== 'string';
}

export const toastMeta: ComponentMeta = {
  ...toastMetaEn,
  props: toastMetaEn.props.map((prop) => ({
    ...prop,
    ...(propText[prop.name] ?? {}),
  })),
  slots: toastMetaEn.slots?.map((slot) =>
    isSlotObject(slot)
      ? { ...slot, ...(slotText[slot.name] ?? {}) }
      : slotText[slot]
        ? { name: slot, ...slotText[slot] }
        : slot,
  ),
  events: toastMetaEn.events?.map((event) => ({
    ...event,
    ...(eventText[event.name] ?? {}),
  })),
};
