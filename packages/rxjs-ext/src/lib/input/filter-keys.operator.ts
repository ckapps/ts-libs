import { filter, MonoTypeOperatorFunction } from 'rxjs';

/**
 * @param keys Array of keys that pass the filter
 *
 * @returns
 * An operator that emits `KeyboardEvent` values
 * which `key` property is included in the given
 * array of `keys`.
 *
 * @example
 * // Emits everytime the `escape` key is pressed
 * fromKeyboard(window, 'keypress').pipe(
 *  filterKeys(['escape'])
 * )
 */
export function filterKeys(
  keys: string[],
): MonoTypeOperatorFunction<{key: string}> {
  return filter(({ key }) => keys.includes(key));
}
