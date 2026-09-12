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
import { accordionMeta as accordionMetaEn } from '../../../components/meta/accordion';

type PropText = Pick<PropMeta, 'label' | 'description'> &
  Partial<Pick<PropMeta, 'placeholder'>>;

const propText: Record<string, PropText> = {
  items: {
    label: 'Ítems',
    description: 'Lista de paneles del acordeón',
  },
  multiple: {
    label: 'Múltiple',
    description: 'Permite abrir varios paneles simultáneamente',
  },
  color: {
    label: 'Color',
    description: 'Color del indicador de apertura (▶/▼)',
  },
};

const slotText: Record<string, Pick<SlotMeta, 'label' | 'description'>> = {
  'item-title': {
    label: 'Item Title',
    description: 'Título personalizado del panel (recibe scope)',
  },
  'item-content': {
    label: 'Item Content',
    description: 'Contenido personalizado del panel (recibe scope)',
  },
};

const eventText: Record<string, Pick<EventMeta, 'description'>> = {
  'update:opened': {
    description: 'Se emite al cambiar paneles abiertos',
  },
};

function isSlotObject(slot: string | SlotMeta): slot is SlotMeta {
  return typeof slot !== 'string';
}

export const accordionMeta: ComponentMeta = {
  ...accordionMetaEn,
  props: accordionMetaEn.props.map((prop) => ({
    ...prop,
    ...(propText[prop.name] ?? {}),
  })),
  slots: accordionMetaEn.slots?.map((slot) =>
    isSlotObject(slot)
      ? { ...slot, ...(slotText[slot.name] ?? {}) }
      : slotText[slot]
        ? { name: slot, ...slotText[slot] }
        : slot,
  ),
  events: accordionMetaEn.events?.map((event) => ({
    ...event,
    ...(eventText[event.name] ?? {}),
  })),
};
