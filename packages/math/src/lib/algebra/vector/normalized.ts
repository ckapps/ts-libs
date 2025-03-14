import { divide } from './divide.js';
import { magnitude } from './magnitude.js';
import { vectorNr } from './vector.types.js';

/**
 * Vector in its normalized form, meaning that the `magnitude`
 * of the result vector is `1`, but the orientation is preserved.
 *
 * @param vector The vector to normalize
 *
 * @returns
 * A vector with the same orientation as `vector` with a
 * `magnitude` of 1.
 */
export function normalized(vector: vectorNr) {
  return divide(vector, magnitude(vector));
}
