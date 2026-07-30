// SPDX-License-Identifier: GPL-3.0-or-later

import { inject } from 'vue';

export function requiredInject<T>(key: string, component: string): T {
  const value = inject<T>(key);
  if (value == null) {
    throw new Error(`${component} must be used inside <Tabs>`);
  }
  return value;
}
