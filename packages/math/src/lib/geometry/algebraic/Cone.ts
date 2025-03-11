import * as Data from 'effect/Data';
import * as Fn from 'effect/Function';
import * as Num from 'effect/Number';

export interface Cone {
  readonly _tag: 'math/geometry/algebraic/Cone';
  /** Radius of the cone. */
  readonly radius: number;
  /** Height of the cone. */
  readonly height: number;
}

export const Cone = Data.tagged<Cone>('math/geometry/algebraic/Cone');

const VOLUME_FACTOR = Math.PI / 3;

/**
 * Based on `S = π * r * (h^2 + r^2)^(1/2)`
 *
 * @returns
 * Surface area of a cone with `radius` and `height`.
 */
export function surfaceArea(cone: Cone) {
  const { radius } = cone;
  return Num.multiplyAll([
    Math.PI,
    radius,
    Fn.pipe(Math.pow(radius, 2) + Math.pow(cone.height, 2), Math.sqrt),
  ]);
}

/**
 * Based on `V = π/3 * h * r^2`
 *
 * @returns
 * Volume of a cone with `radius` and `height`.
 */
export function volume(cone: Cone) {
  const { radius, height } = cone;
  return VOLUME_FACTOR * height * Math.pow(radius, 2);
}
