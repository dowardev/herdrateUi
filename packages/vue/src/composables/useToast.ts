import { ref, type Ref } from 'vue';

export interface ToastItem {
  id: string;
  message: string;
  level: 'info' | 'warn' | 'error';
  icon: string;
  timestamp: number;
}

const toasts = ref<ToastItem[]>([]) as Ref<ToastItem[]>;

let nextId = 0;

export function useToast() {
  function add(opts: {
    message: string;
    level?: 'info' | 'warn' | 'error';
    replace?: boolean;
    filter?: string;
  }) {
    const id = String(++nextId);
    const level = opts.level ?? 'info';
    const icons: Record<string, string> = {
      info: '\u25BC',
      warn: '\u25CF',
      error: '\u2716',
    };

    if (opts.replace && opts.filter) {
      const idx = toasts.value.findIndex(t => t.message === opts.filter);
      if (idx !== -1) {
        toasts.value.splice(idx, 1);
      }
    }

    toasts.value.push({
      id,
      message: opts.message,
      level,
      icon: icons[level] ?? icons.info,
      timestamp: Date.now(),
    });

    return id;
  }

  function remove(id: string) {
    const idx = toasts.value.findIndex(t => t.id === id);
    if (idx !== -1) toasts.value.splice(idx, 1);
  }

  return { toasts, add, remove };
}
