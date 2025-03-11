import { sumAll } from './sum.js';
import * as Arr from 'effect/Array';

/**
 * @param numbers The numbers from which to build the average from
 *
 * @returns
 * The average from the range of given numbers
 */
export function avg(numbers: Arr.NonEmptyReadonlyArray<number>): number {
  return sumAll(numbers) / numbers.length;
}
