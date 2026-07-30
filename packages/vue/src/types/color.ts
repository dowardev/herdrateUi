// SPDX-License-Identifier: GPL-3.0-or-later

export type Color =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'medium'
  | 'dark';

export type Fill = 'solid' | 'outline' | 'clear';

export const DEFAULT_COLOR: Color = 'primary';
