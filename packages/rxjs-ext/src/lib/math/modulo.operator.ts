import * as Num from 'effect/Number';
import { map, OperatorFunction } from 'rxjs';

/**
 * Calculates the result of the `modulo` operation from two given inputs,
 * where the first is the `dividend` and the second the `divisor`.
 */

export function modulo(): OperatorFunction<
  [self: number, divisor: number],
  number
> {
  return map(([a, n]) => Num.remainder(a, n));
}
