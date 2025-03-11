import { map } from '../../fn/array/index.js';
import { min as _min } from '../../fn/base/index.js';

import { vectorN, vectorNr } from './vector.types.js';

/**
 * @param vectors Array of vectors
 *
 * @returns
 * A vector with the minimum value for each component from all
 * components of all given `vectors`.
 */
export function min(...vectors: vectorNr[]): vectorN {
  return map(_min)(vectors);
}
