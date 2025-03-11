import { scaleBy } from './scale.js';
import { vectorNr } from './vector.types.js';

/**
 * @param v Vector that should be inverted
 * @returns
 * A vector with each component inverted
 */
export const invert: <T extends vectorNr>(v: T) => T = scaleBy(-1);
