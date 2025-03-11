import { area } from './Circle.js';

const VOLUME_FACTOR = (4 / 3) * Math.PI;

/**
 * Based on `S = 4 π r^2`
 *
 * @param radius Radius of the sphere
 *
 * @returns
 * Surface area of a sphere with `radius`
 */
export function surfaceArea(radius: number) {
  return 4 * area(radius);
}

/**
 * Based on `V = 4/3 * π * r^3`
 *
 * @param radius
 *
 * @returns
 * Volume of a sphere with `radius`
 */
export function volume(radius: number) {
  return VOLUME_FACTOR * Math.pow(radius, 3);
}
