import * as Circle from './Circle.js';
import * as Fn from 'effect/Function';
import * as Num from 'effect/Number';
import * as Data from 'effect/Data';

export interface Cylinder {
  readonly _tag: 'math/geometry/algebraic/Cylinder';
  /** Radius of the cylinder. */
  readonly radius: number;
  /** Height of the cylinder. */
  readonly height: number;
}

export const Cylinder = Data.tagged<Cylinder>(
  'math/geometry/algebraic/Cylinder'
);

/**
 * Based on `Sl = 2π * r * h`
 *
 * @returns
 * The lateral surface area of a cylinder with `radius` and `height`.
 */
export const lateralSurfaceArea = (cylinder: Cylinder): number =>
  Fn.pipe(
    _getCircle(cylinder),
    Circle.circumference,
    Num.multiply(cylinder.height)
  );

/**
 * Based on `S = 2π * r * (r + h)`
 *
 * @returns
 * The surface area of a cylinder with `radius` and `height`.
 */
export const surfaceArea = (cylinder: Cylinder): number  => 
  Fn.pipe(_getCircle(cylinder), Circle.circumference, Num.multiply(cylinder.height + cylinder.radius));



/**
 * Based on `V = π * h * r^2`
 *
 * @returns
 * Volume of the cylinder with `radius` and `height`.
 */
export const volume = (cylinder: Cylinder): number =>
  Fn.pipe(_getCircle(cylinder), Circle.area, Num.multiply(cylinder.height));

function _getCircle(cylinder: Cylinder): Circle.Circle {
  return Circle.Circle({ radius: cylinder.radius });
}
