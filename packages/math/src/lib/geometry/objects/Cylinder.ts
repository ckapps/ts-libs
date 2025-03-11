import { circumference as circleCircumference, area as circleArea } from './Circle.js';

/**
 * Based on `Sl = 2π * r * h`
 *
 * @param radius Radius of the cylinder
 * @param height Height of the cylinder
 *
 * @returns
 * The lateral surface area of a cylinder with `radius` and `height`.
 */
export function lateralSurfaceArea(radius: number, height: number) {
  return circleCircumference(radius) * height;
}

/**
 * Based on `S = 2π * r * (r + h)`
 *
 * @param radius Radius of the cylinder
 * @param height Height of the cylinder
 *
 * @returns
 * The surface area of a cylinder with `radius` and `height`.
 */
export function surfaceArea(radius: number, height: number) {
    return circleCircumference(radius) * (height + radius);
  }
  

/**
 * Based on `V = π * h * r^2`
 *
 * @param radius Radius of the cylinder
 * @param height Height of the cylinder
 *
 * @returns
 * Volume of the cylinder with `radius` and `height`.
 */
export function volume(radius: number, height: number) {
  return circleArea(radius) * height;
}
