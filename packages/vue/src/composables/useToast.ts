// SPDX-License-Identifier: GPL-3.0-or-later

import { type Ref, ref } from 'vue';
import type { Color } from '../types/color';

export interface ToastItem {
  id: string;
  message: string;
  color: Color;
  icon: string;
  timestamp: number;
}

const toasts = ref<ToastItem[]>([]) as Ref<ToastItem[]>;

let nextId = 0;

export function useToast() {
  function add(opts: {
    message: string;
    color?: Color;
    replace?: boolean;
    filter?: string;
  }) {
    const id = String(++nextId);
    const color = opts.color ?? 'primary';
    const icons: Record<string, string> = {
      primary: '\u25BC',
      success: '\u2713',
      warning: '\u25CF',
      danger: '\u2716',
    };

    if (opts.replace && opts.filter) {
      const idx = toasts.value.findIndex((t) => t.message === opts.filter);
      if (idx !== -1) {
        toasts.value.splice(idx, 1);
      }
    }

    toasts.value.push({
      id,
      message: opts.message,
      color,
      icon: icons[color] ?? icons.primary,
      timestamp: Date.now(),
    });

    return id;
  }

  function remove(id: string) {
    const idx = toasts.value.findIndex((t) => t.id === id);
    if (idx !== -1) toasts.value.splice(idx, 1);
  }

  return { toasts, add, remove };
}
