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
import { tagMeta as tagMetaEn } from '../../../components/meta/tag';

type PropText = Pick<PropMeta, 'label' | 'description'> &
  Partial<Pick<PropMeta, 'placeholder'>>;

const propText: Record<string, PropText> = {
  color: {
    label: 'Color',
    description: 'Color del tag',
  },
  variant: {
    label: 'Variante',
    description: 'Estilo de relleno',
  },
  removable: {
    label: 'Removible',
    description: 'Muestra botón de cierre (×)',
  },
};

const slotText: Record<string, Pick<SlotMeta, 'label' | 'description'>> = {
  default: {
    label: 'Contenido',
    description: 'Contenido del tag',
  },
};

const eventText: Record<string, Pick<EventMeta, 'description'>> = {
  remove: {
    description: 'Se emite al hacer clic en ×',
  },
};

function isSlotObject(slot: string | SlotMeta): slot is SlotMeta {
  return typeof slot !== 'string';
}

export const tagMeta: ComponentMeta = {
  ...tagMetaEn,
  props: tagMetaEn.props.map((prop) => ({
    ...prop,
    ...(propText[prop.name] ?? {}),
  })),
  slots: tagMetaEn.slots?.map((slot) =>
    isSlotObject(slot)
      ? { ...slot, ...(slotText[slot.name] ?? {}) }
      : slotText[slot]
        ? { name: slot, ...slotText[slot] }
        : slot,
  ),
  events: tagMetaEn.events?.map((event) => ({
    ...event,
    ...(eventText[event.name] ?? {}),
  })),
};
