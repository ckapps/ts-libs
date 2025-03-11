import { subtractAll } from 'src/lib/base/subtract.js';
import { map } from '../../fn/array/index.js';
import { vectorNr } from './vector.types.js';

/**
 * Subtracts all values of the same vector component.
 *
 * @param vectors Array of vectors to add
 *
 * @returns
 * A vector where the value of a component is the difference of the same
 * component of all given `vectors`.
 */
export function subtract<T extends vectorNr>(vectors: T[]): T;
export function subtract(vectors: vectorNr[]): vectorNr;

export function subtract(vectors: vectorNr[]): vectorNr {
  return map(subtractAll)(vectors);
}
