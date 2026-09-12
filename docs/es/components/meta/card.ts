// SPDX-License-Identifier: GPL-3.0-or-later

import type {
  ComponentMeta,
  EventMeta,
  PropMeta,
  SlotMeta,
} from '../../../.vitepress/theme/PropControls.vue';
// LBDS-238 pilot: the English meta is the single source of truth. This file
// is a thin locale wrapper — structure (names, types, defaults, options,
// order) is inherited from the source; only translatable display strings
// (label, description, placeholder) are overridden here. Any structural drift
// is caught by docs/.vitepress/__tests__/docs-i18n-parity.spec.ts.
import { cardMeta as cardMetaEn } from '../../../components/meta/card';

type PropText = Pick<PropMeta, 'label' | 'description'> &
  Partial<Pick<PropMeta, 'placeholder'>>;

const propText: Record<string, PropText> = {
  design: {
    label: 'Línea de diseño',
    description: 'Variante de presentación de la tarjeta.',
  },
  title: {
    label: 'Título',
    description: 'Título de la tarjeta.',
    placeholder: 'Título de la tarjeta',
  },
  description: {
    label: 'Descripción',
    description: 'Texto del cuerpo de la tarjeta.',
    placeholder: 'Descripción de la tarjeta',
  },
  number: {
    label: 'Número',
    description: 'Índice monospace (p. ej. // 01).',
    placeholder: '// 01',
  },
  category: {
    label: 'Categoría',
    description: 'Etiqueta en mayúsculas.',
    placeholder: 'HERDRATE',
  },
  border: {
    label: 'Borde',
    description: 'Muestra el borde.',
  },
  shadow: {
    label: 'Sombra',
    description:
      'Sombra de elevación — plana (ninguno) en tuix, flotante en rubik.',
  },
  arrow: {
    label: 'Flecha',
    description: 'Muestra la flecha decorativa.',
  },
};

const slotText: Record<string, Pick<SlotMeta, 'label' | 'description'>> = {
  header: {
    label: 'Header',
    description: 'Contenido extra del header.',
  },
  title: {
    label: 'Título',
    description: 'Reemplaza el título.',
  },
  default: {
    label: 'Descripción',
    description: 'Reemplaza la descripción.',
  },
  footer: {
    label: 'Footer',
    description: 'Contenido extra del footer.',
  },
};

const eventText: Record<string, Pick<EventMeta, 'description'>> = {
  hover: {
    description:
      'Emitido al entrar el puntero — el consumidor controla el hover.',
  },
};

function isSlotObject(slot: string | SlotMeta): slot is SlotMeta {
  return typeof slot !== 'string';
}

export const cardMeta: ComponentMeta = {
  ...cardMetaEn,
  props: cardMetaEn.props.map((prop) => ({
    ...prop,
    ...(propText[prop.name] ?? {}),
  })),
  slots: cardMetaEn.slots?.map((slot) =>
    isSlotObject(slot)
      ? { ...slot, ...(slotText[slot.name] ?? {}) }
      : slotText[slot]
        ? { name: slot, ...slotText[slot] }
        : slot,
  ),
  events: cardMetaEn.events?.map((event) => ({
    ...event,
    ...(eventText[event.name] ?? {}),
  })),
};
