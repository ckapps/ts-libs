import * as Num from 'effect/Number';
import * as O from 'effect/Option';

/**
 * @param value Value for which the reciprocal is calculated.
 * 
 * @returns
 * Reciprocal for the given value
 */
export function reciprocal(value: number): O.Option<number> {
  return Num.divide(1, value);
}
