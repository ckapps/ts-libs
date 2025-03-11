import * as Data from 'effect/Data';
import * as Fn from 'effect/Function';
import * as Num from 'effect/Number';
import * as Circle from './Circle.js';

export interface Sphere {
  readonly _tag: 'math/geometry/algebraic/Sphere';
  /** Radius of the sphere. */
  readonly radius: number;
}

export const Sphere = Data.tagged<Sphere>('math/geometry/algebraic/Sphere');

const VOLUME_FACTOR = (4 / 3) * Math.PI;

/**
 * Based on `S = 4 π r^2`
 *
 * @returns
 * Surface area of a sphere with `radius`
 */
export function surfaceArea(sphere: Sphere) {
  return Fn.pipe(
    Circle.Circle({ radius: sphere.radius }),
    Circle.area,
    Num.multiply(4)
  );
}

/**
 * Based on `V = 4/3 * π * r^3`
 *
 * @returns
 * Volume of a sphere with `radius`
 */
export function volume(sphere: Sphere) {
  return VOLUME_FACTOR * Math.pow(sphere.radius, 3);
}
