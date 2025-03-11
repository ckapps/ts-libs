import * as Fn from 'effect/Function';
import * as Num from 'effect/Number';

/**
 * Interpolates a value between `start` and `end` by `t`.
 * The parameter `t` is clamped to the range [0, 1].
 *
 * @param start The start value
 * @param end The end value
 * @param t Interpolation value
 *
 * @returns
 * Interpolated value, equals to `start + (end - start) * t`
 *
 * @example
 * lerp(0, {start: 10, end: 20}); // returns 10
 * lerp(1, {start: 10, end: 20}); // returns 20
 * lerp(0.5, {start: 10, end: 20}); // returns 15
 */
export const lerp: {
  (opts: { start: number; end: number }): (t: number) => number;
  (self: number, opts: { start: number; end: number }): number;
} = Fn.dual(
  2,
  (t: number, { start, end }: { start: number; end: number }): number =>
    start + (end - start) * Num.clamp(t, { minimum: 0, maximum: 1 })
);
