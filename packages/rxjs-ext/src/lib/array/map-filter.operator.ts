import { map, OperatorFunction } from 'rxjs';

/**
 * Maps the elements of the array to only those elements that pass
 * the given `predicate`.
 *
 * @param predicate Predicate function
 */
export function mapFilter<T>(
  predicate: (value: T, index: number, array: T[]) => boolean,
): OperatorFunction<T[], T[]> {
  return map(items => items.filter(predicate));
}
