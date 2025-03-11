import { map } from '../../fn/array/index.js';
import { max as _max } from '../../fn/base/index.js';

import { vectorN, vectorNr } from './vector.types.js';

/**
 * @param vectors Array of vectors
 *
 * @returns
 * A vector with the maximum value for each component from all
 * components of all given `vectors`.
 */
export function max(vectors: vectorNr[]): vectorN {
  return map(_max)(vectors);
}
