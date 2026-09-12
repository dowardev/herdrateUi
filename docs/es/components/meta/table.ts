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
import { tableMeta as tableMetaEn } from '../../../components/meta/table';

type PropText = Pick<PropMeta, 'label' | 'description'> &
  Partial<Pick<PropMeta, 'placeholder'>>;

const propText: Record<string, PropText> = {
  columns: {
    label: 'Columnas',
    description: 'Lista de columnas de la tabla',
  },
  rows: {
    label: 'Filas',
    description: 'Lista de filas. Las keys deben coincidir con las columnas.',
  },
  color: {
    label: 'Color',
    description: 'Color del borde del header',
  },
  striped: {
    label: 'Rayado',
    description: 'Filas alternadas con fondo distinto',
  },
  compact: {
    label: 'Compacto',
    description: 'Padding reducido en las celdas',
  },
};

const slotText: Record<string, Pick<SlotMeta, 'label' | 'description'>> = {};

const eventText: Record<string, Pick<EventMeta, 'description'>> = {};

function isSlotObject(slot: string | SlotMeta): slot is SlotMeta {
  return typeof slot !== 'string';
}

export const tableMeta: ComponentMeta = {
  ...tableMetaEn,
  props: tableMetaEn.props.map((prop) => ({
    ...prop,
    ...(propText[prop.name] ?? {}),
  })),
  slots: tableMetaEn.slots?.map((slot) =>
    isSlotObject(slot)
      ? { ...slot, ...(slotText[slot.name] ?? {}) }
      : slotText[slot]
        ? { name: slot, ...slotText[slot] }
        : slot,
  ),
  events: tableMetaEn.events?.map((event) => ({
    ...event,
    ...(eventText[event.name] ?? {}),
  })),
};
