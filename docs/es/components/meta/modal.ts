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
import { modalMeta as modalMetaEn } from '../../../components/meta/modal';

type PropText = Pick<PropMeta, 'label' | 'description'> &
  Partial<Pick<PropMeta, 'placeholder'>>;

const propText: Record<string, PropText> = {
  open: {
    label: 'Abierto',
    description: 'Control de visibilidad del modal (soporta v-model:open).',
  },
  title: {
    label: 'Título',
    description: 'Título mostrado en la cabecera del modal.',
    placeholder: 'Mi Modal',
  },
  color: {
    label: 'Color',
    description: 'Color semántico del título.',
  },
  closable: {
    label: 'Cerrable',
    description: 'Muestra el botón de cierre (×) en la cabecera.',
  },
  width: {
    label: 'Ancho',
    description: 'Ancho del modal (cualquier valor CSS de ancho).',
    placeholder: '60ch',
  },
};

const slotText: Record<string, Pick<SlotMeta, 'label' | 'description'>> = {
  default: {
    label: 'Cuerpo',
    description: 'Cuerpo del modal.',
  },
  footer: {
    label: 'Footer',
    description: 'Pie del modal (área de acciones).',
  },
};

const eventText: Record<string, Pick<EventMeta, 'description'>> = {
  close: {
    description: 'Se emite al cerrar el modal.',
  },
  'update:open': {
    description: 'Se emite con false al cerrar (soporta v-model:open).',
  },
};

function isSlotObject(slot: string | SlotMeta): slot is SlotMeta {
  return typeof slot !== 'string';
}

export const modalMeta: ComponentMeta = {
  ...modalMetaEn,
  props: modalMetaEn.props.map((prop) => ({
    ...prop,
    ...(propText[prop.name] ?? {}),
  })),
  slots: modalMetaEn.slots?.map((slot) =>
    isSlotObject(slot)
      ? { ...slot, ...(slotText[slot.name] ?? {}) }
      : slotText[slot]
        ? { name: slot, ...slotText[slot] }
        : slot,
  ),
  events: modalMetaEn.events?.map((event) => ({
    ...event,
    ...(eventText[event.name] ?? {}),
  })),
};
