import { every } from '../../fn/array/index.js';

import { vectorNr } from './vector.types.js';

/**
 * @param a Vector `a`
 * @param b Vector `b`
 *
 * @returns
 * `true`, if the components of vector `a` and `b` match.
 * Otherwise `false`.
 */
export function equals(a: vectorNr, b: vectorNr): boolean {
  return every((numbers: readonly number[]) => numbers[0] === numbers[1])([a, b]);
}
