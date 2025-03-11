import { DEG_TO_RAD } from './constants.js';

/**
 * @param degrees Angle in degrees
 *
 * @returns
 * Degrees in radians
 */
export function degToRad(degrees: number) {
  return degrees * DEG_TO_RAD;
}
