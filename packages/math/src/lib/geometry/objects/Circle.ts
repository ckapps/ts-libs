const CIRCUMFERENCE_FACTOR = 2 * Math.PI;

/**
 * Based on `A = π * r^2`
 *
 * @param radius Radius of the circle
 *
 * @returns
 * Area of a circle with `radius`.
 */
export function area(radius: number) {
  return Math.PI * Math.pow(radius, 2);
}

/**
 * Based on `U = 2π * r`
 *
 * @param radius Radius of the circle
 *
 * @returns
 * The circumference of a circle with `radius`
 */
export function circumference(radius: number) {
  return CIRCUMFERENCE_FACTOR * radius;
}

/**
 * Based on `d = 2r`
 *
 * @param radius
 *
 * @returns
 * Diameter of a circle with `radius`.
 */
export function diameter(radius: number) {
  return 2 * radius;
}
