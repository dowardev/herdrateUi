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
import { treeNodeMeta as treeNodeMetaEn } from '../../../components/meta/treenode';

type PropText = Pick<PropMeta, 'label' | 'description'> &
  Partial<Pick<PropMeta, 'placeholder'>>;

const propText: Record<string, PropText> = {};

const slotText: Record<string, Pick<SlotMeta, 'label' | 'description'>> = {
  label: {
    label: 'Etiqueta',
    description: 'Contenido del nodo (texto o HTML)',
  },
  default: {
    label: 'Hijos',
    description: 'Nodos hijos anidados (otros TreeNode)',
  },
};

const eventText: Record<string, Pick<EventMeta, 'description'>> = {};

function isSlotObject(slot: string | SlotMeta): slot is SlotMeta {
  return typeof slot !== 'string';
}

export const treeNodeMeta: ComponentMeta = {
  ...treeNodeMetaEn,
  props: treeNodeMetaEn.props.map((prop) => ({
    ...prop,
    ...(propText[prop.name] ?? {}),
  })),
  slots: treeNodeMetaEn.slots?.map((slot) =>
    isSlotObject(slot)
      ? { ...slot, ...(slotText[slot.name] ?? {}) }
      : slotText[slot]
        ? { name: slot, ...slotText[slot] }
        : slot,
  ),
  events: treeNodeMetaEn.events?.map((event) => ({
    ...event,
    ...(eventText[event.name] ?? {}),
  })),
};
