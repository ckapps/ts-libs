import * as Fn from 'effect/Function';
import {
  dotBy,
  subtract,
  invert,
  scaleBy,
} from '../../algebra/vector/index.js';
import { vectorNr } from '../../algebra/vector/vector.types.js';

export interface Plane<T extends vectorNr> {
  /** Any point on the plane */
  readonly point: T;
  /**
   * Some normal that defines how the plane spans based
   * in relation to the given point
   */
  readonly normal: T;
}

export enum PlaneSide {
  /** When some point is "on" the plane */
  OnPlane,
  /** When some point is "in front of" the plane */
  Front,
  /** When some point is "behind" the plane */
  Back,
}

/**
 * @param p Plane
 *
 * @returns
 * A function that can be called with a point `v`
 * and that returns the value of the `PlaneSide` enum
 * describing where the point `v` is located in
 * relation to the given plane `p`
 */
export function onSideOfPlane<T extends vectorNr>(p: Plane<T>) {
  return (v: T) => _planeOnSide(p, v);
}

function _planeOnSide<T extends vectorNr>(p: Plane<T>, v: T) {
  const c = Fn.pipe([v, p.point], subtract, dotBy<T>(p.normal));

  if (c === 0) {
    return PlaneSide.OnPlane;
  } else if (c > 0) {
    return PlaneSide.Front;
  }
  return PlaneSide.Back;
}

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
  distanceToOrigin: number
): Plane<T>;

export function fromDistance(
  normal: vectorNr,
  distanceToOrigin: number
): Plane<vectorNr> {
  return {
    normal,
    point: Fn.pipe(normal, invert, scaleBy(distanceToOrigin)),
  };
}
