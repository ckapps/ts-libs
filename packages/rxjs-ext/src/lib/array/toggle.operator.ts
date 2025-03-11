import * as Num from 'effect/Number';
import { OperatorFunction, map } from 'rxjs';
import { counterIncrease } from '../Math.js';
import { atIndex } from './at-index.operator.js';

/**
 *
 * @param values The values to toggle
 */
export function toggle<T>(values: T[]): OperatorFunction<unknown, T> {
  return (obs$) =>
    obs$.pipe(
      counterIncrease({ delta: 1 }),
      map(Num.remainder(values.length)),
      atIndex(values)
    );
}
