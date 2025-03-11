import { magnitude } from './magnitude.js';
import { subtract } from './subtract.js';
import { vectorNr } from './vector.types.js';

/**
 * @param a Point `a`
 * @param b Point `b`
 *
 * @returns
 * The distance between `a` and `b`.
 */
export function distance(a: vectorNr, b: vectorNr): number {
  return magnitude(subtract([a, b]));
}
