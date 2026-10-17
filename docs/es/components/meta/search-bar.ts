// SPDX-License-Identifier: GPL-3.0-or-later

import type {
  ComponentMeta,
  EventMeta,
  PropMeta,
  SlotMeta,
} from '../../../.vitepress/theme/PropControls.vue';
// LBDS-238: el meta en inglés es la fuente única de verdad. Este archivo
// es un envoltorio fino de la locale: la estructura (nombres, tipos, defaults,
// options, orden) se hereda de la fuente; solo se sobrescriben las cadenas
// traducibles (label, description, placeholder). Cualquier drift estructural
// lo detecta docs/.vitepress/__tests__/docs-i18n-parity.spec.ts.
import { searchBarMeta as searchBarMetaEn } from '../../../components/meta/search-bar';

type PropText = Pick<PropMeta, 'label' | 'description'> &
  Partial<Pick<PropMeta, 'placeholder'>>;

const propText: Record<string, PropText> = {
  modelValue: {
    label: 'Valor',
    placeholder: 'Texto del search',
  },
  placeholder: {
    label: 'Placeholder',
    placeholder: 'Escribe algo...',
  },
  debounce: {
    label: 'Debounce (ms)',
    description: '0 = sin debounce',
  },
  clearable: {
    label: 'Clearable',
    description: 'Muestra el botón para limpiar el campo',
  },
  disabled: {
    label: 'Disabled',
  },
  loading: {
    label: 'Loading',
    description: 'Indica una búsqueda en curso',
  },
  color: {
    label: 'Color',
  },
};

const slotText: Record<string, Pick<SlotMeta, 'label' | 'description'>> = {
  leading: {
    description: 'Slot izquierdo (ej. icono de búsqueda)',
  },
  trailing: {
    description: 'Slot derecho (ej. atajos de teclado)',
  },
};

const eventText: Record<string, Pick<EventMeta, 'description'>> = {
  'update:modelValue': {
    description: 'Se emite en cada keystroke con el valor crudo',
  },
  search: {
    description: 'Se emite tras el debounce cuando el valor cambia',
  },
  clear: {
    description: 'Se emite al pulsar el botón de limpiar',
  },
  enter: {
    description: 'Se emite al pulsar Enter (inmediato, sin debounce)',
  },
  focus: {
    description: 'Se emite al recibir foco',
  },
  blur: {
    description: 'Se emite al perder foco',
  },
};

function isSlotObject(slot: string | SlotMeta): slot is SlotMeta {
  return typeof slot !== 'string';
}

export const searchBarMeta: ComponentMeta = {
  ...searchBarMetaEn,
  props: searchBarMetaEn.props.map((prop) => ({
    ...prop,
    ...(propText[prop.name] ?? {}),
  })),
  slots: searchBarMetaEn.slots?.map((slot) =>
    isSlotObject(slot)
      ? { ...slot, ...(slotText[slot.name] ?? {}) }
      : slotText[slot]
        ? { name: slot, ...slotText[slot] }
        : slot,
  ),
  events: searchBarMetaEn.events?.map((event) => ({
    ...event,
    ...(eventText[event.name] ?? {}),
  })),
};
