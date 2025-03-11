import * as Data from 'effect/Data';

export interface Circle {
  readonly _tag: 'math/geometry/algebraic/Circle';
  /** Radius of the circle. */
  readonly radius: number;
}

export const Circle = Data.tagged<Circle>('math/geometry/algebraic/Circle');

const CIRCUMFERENCE_FACTOR = 2 * Math.PI;

/**
 * Based on `A = π * r^2`.
 *
 * @returns
 * Area of a circle with `radius`.
 */
export function area(circle: Circle) {
  return Math.PI * Math.pow(circle.radius, 2);
}

/**
 * Based on `U = 2π * r`.
 *
 * @returns
 * The circumference of a circle with `radius`
 */
export function circumference(circle: Circle) {
  return CIRCUMFERENCE_FACTOR * circle.radius;
}

/**
 * Based on `d = 2r`.
 *
 * @returns
 * Diameter of a circle with `radius`.
 */
export function diameter(circle: Circle) {
  return 2 * circle.radius;
}
