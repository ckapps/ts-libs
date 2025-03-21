import {
  bufferCount,
  MonoTypeOperatorFunction,
  map,
  OperatorFunction,
} from 'rxjs';
import { avg } from '@ckapp/math';
import * as Arr from 'effect/Array';

/**
 * Collects emissions by the source and
 * emits the arithmetic mean over the
 * collected values.
 *
 * @param bufferSize The number of values to collect
 *
 * @example
 * // Collect 3 values, then emit average
 * of(1, 2, 3, 4, 5, 6).pipe(
 *  avgOver(3)
 * )
 * // (ab|)  -> a: 2, b: 5
 */
export function avgOver(bufferSize: number): MonoTypeOperatorFunction<number> {
  // @ts-expect-error cast to non-empty array.
  const buffer: OperatorFunction<number, Arr.NonEmptyReadonlyArray<number>> =  bufferCount(bufferSize);

  return (next) =>
    next.pipe(
      buffer,
      map(avg)
    );
}
