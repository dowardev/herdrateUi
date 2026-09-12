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
import { boxMeta as boxMetaEn } from '../../../components/meta/box';

type PropText = Pick<PropMeta, 'label' | 'description'> &
  Partial<Pick<PropMeta, 'placeholder'>>;

const propText: Record<string, PropText> = {
  borderStyle: {
    label: 'Estilo de borde',
    description: 'Variante de borde del box',
  },
  color: {
    label: 'Color',
    description: 'Color semántico del borde',
  },
};

const slotText: Record<string, Pick<SlotMeta, 'label' | 'description'>> = {
  header: {
    label: 'Header',
    description: 'Contenido opcional en la cabecera del box',
  },
  default: {
    label: 'Contenido',
    description: 'Contenido principal del box',
  },
  footer: {
    label: 'Footer',
    description: 'Contenido opcional en el pie del box',
  },
};

const eventText: Record<string, Pick<EventMeta, 'description'>> = {};

function isSlotObject(slot: string | SlotMeta): slot is SlotMeta {
  return typeof slot !== 'string';
}

export const boxMeta: ComponentMeta = {
  ...boxMetaEn,
  props: boxMetaEn.props.map((prop) => ({
    ...prop,
    ...(propText[prop.name] ?? {}),
  })),
  slots: boxMetaEn.slots?.map((slot) =>
    isSlotObject(slot)
      ? { ...slot, ...(slotText[slot.name] ?? {}) }
      : slotText[slot]
        ? { name: slot, ...slotText[slot] }
        : slot,
  ),
  events: boxMetaEn.events?.map((event) => ({
    ...event,
    ...(eventText[event.name] ?? {}),
  })),
};
