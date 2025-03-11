import { OperatorFunction, scan } from 'rxjs';

/**
 * @example
 * // Produce natural numbers from source
 * of(100, 200, -4, 7).pipe(counter({delta: 1}));
 * // (abcd|)  -> a: 0, b: 1, c: 2, d: 3
 *
 * @example
 * of(100, 200, -4, 7).pipe(counter({delta: 1, start: 10}));
 * // (abcd|)  -> a: 10, b: 11, c: 12, d: 13
 */
export function counterIncrease({
  delta,
  start = 0,
}: {
  /** Amount by which the value is increased (or decreased with negative numbers). */
  delta: number;
  /** The initial value with which the counter starts. Defaults to `0`. */
  start?: number;
}): OperatorFunction<unknown, number> {
  return scan((acc) => acc + delta, start - delta);
}
