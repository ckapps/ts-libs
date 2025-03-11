const VOLUME_FACTOR = Math.PI / 3;

/**
 * Based on `S = π * r * (h^2 + r^2)^(1/2)`
 *
 * @param radius Radius of the cone
 * @param height Height of the cone
 *
 * @returns
 * Surface area of a cone with `radius` and `height`.
 */
export function surfaceArea(radius: number, height: number) {
  return (
    Math.PI * radius * Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2))
  );
}

/**
 * Based on `V = π/3 * h * r^2`
 *
 * @param radius Radius of the base circle
 * @param height Height of the cone
 *
 * @returns
 * Volume of a cone with `radius` and `height`.
 */
export function volume(radius: number, height: number) {
  return VOLUME_FACTOR * height * Math.pow(radius, 2);
}
