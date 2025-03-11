import { pipe } from 'effect/Function';
import { invert, scaleBy } from '../../../algebra/vector/index.js';
import { vectorNr } from '../../../algebra/vector/vector.types.js';

import { Plane } from './plane.type.js';

/**
 * @param normal Normal describing the "direction" of the plane
 * @param distanceToOrigin How far the plane is away from the origin
 *
 * @returns
 * A plane that faces towards the direction specified by `normal`
 * which the given `distanceToOrigin`.
 */
export function fromDistance<T extends vectorNr>(
  normal: T,
  distanceToOrigin: number,
): Plane<T>;

export function fromDistance(
  normal: vectorNr,
  distanceToOrigin: number,
): Plane<vectorNr> {
  return {
    normal,
    point: pipe(normal, invert, scaleBy(distanceToOrigin)),
  };
}
