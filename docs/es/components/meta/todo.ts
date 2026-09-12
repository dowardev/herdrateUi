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
import { todoMeta as todoMetaEn } from '../../../components/meta/todo';

type PropText = Pick<PropMeta, 'label' | 'description'> &
  Partial<Pick<PropMeta, 'placeholder'>>;

const propText: Record<string, PropText> = {
  text: {
    label: 'Texto',
    description: 'Texto de la tarea. Sin default en el componente (undefined).',
  },
  done: {
    label: 'Completado',
    description: 'Estado completado de la tarea',
  },
};

const slotText: Record<string, Pick<SlotMeta, 'label' | 'description'>> = {
  default: {
    label: 'Contenido',
    description: 'Reemplaza el texto de la tarea',
  },
};

const eventText: Record<string, Pick<EventMeta, 'description'>> = {
  'update:done': {
    description: 'Se emite al cambiar el estado (v-model)',
  },
  toggle: {
    description: 'Se emite al hacer clic con el nuevo estado',
  },
};

function isSlotObject(slot: string | SlotMeta): slot is SlotMeta {
  return typeof slot !== 'string';
}

export const todoMeta: ComponentMeta = {
  ...todoMetaEn,
  props: todoMetaEn.props.map((prop) => ({
    ...prop,
    ...(propText[prop.name] ?? {}),
  })),
  slots: todoMetaEn.slots?.map((slot) =>
    isSlotObject(slot)
      ? { ...slot, ...(slotText[slot.name] ?? {}) }
      : slotText[slot]
        ? { name: slot, ...slotText[slot] }
        : slot,
  ),
  events: todoMetaEn.events?.map((event) => ({
    ...event,
    ...(eventText[event.name] ?? {}),
  })),
};
