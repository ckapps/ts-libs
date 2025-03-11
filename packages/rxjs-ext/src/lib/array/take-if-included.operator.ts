import { filter, OperatorFunction } from 'rxjs';

/**
 * Emit values that are included in the given `values`.
 *
 * @param values Values to check
 *
 */
export function takeIfIncluded<T>(values: T[]): OperatorFunction<T, T> {
  return filter(searchElement => values.includes(searchElement));
}
