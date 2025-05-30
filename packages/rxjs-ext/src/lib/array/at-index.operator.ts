import { map, OperatorFunction } from 'rxjs';

/**
 * Emits with the value at the emitted `index` of the source observable.
 *
 * @param array Array of values
 */
export function atIndex<T>(array: T[]): OperatorFunction<number, T> {
  return map(i => array[i]);
}
