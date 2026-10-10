// SPDX-License-Identifier: GPL-3.0-or-later

/**
 * `localStorage` key under which the dev-mode banner records the version the
 * user dismissed it for. Lives in its own module so both the SFC and its
 * unit test import the same constant — keeps the key from drifting between
 * implementation and test (LBDS-291 pre-merge-review finding #3).
 *
 * Scoped to `herdrate-docs:` to avoid colliding with OneSpend's
 * `onespend:dev-banner-dismissed-for` if a user has both apps open in the
 * same browser profile.
 */
export const DISMISS_KEY = 'herdrate-docs:dev-banner-dismissed-for';
