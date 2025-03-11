import { filter, fromEvent, MonoTypeOperatorFunction } from 'rxjs';
import {
  EventListenerOptions,
  HasEventTargetAddRemove,
} from 'rxjs/internal/observable/fromEvent';

/**
 * Target for the listener
 */
export type Target = HasEventTargetAddRemove<{ key: string }>;
/**
 * Possible event types
 */
export type Events = 'keydown' | 'keyup' | 'keypress';

/**
 * @param target The event target
 * @param eventName The name of the event
 * @param options Event options
 *
 * @returns
 * An observable that emits when the name with the given
 * `eventName` is emitted on `target`.
 *
 * @example
 * // Emits everytime a keydown event is emitted
 * fromKeyboard(window, 'keydown');
 *
 * @example
 * // Emits everytime the `escape` key is pressed
 * fromKeyboard(window, 'keypress').pipe(
 *  filterKeys(['escape'])
 * )
 */
export function fromKeyboard(
  target: Target,
  eventName: Events,
  options?: EventListenerOptions | undefined
) {
  return options
    ? fromEvent(target, eventName, options)
    : fromEvent(target, eventName);
}

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
  keys: string[]
): MonoTypeOperatorFunction<{ key: string }> {
  return filter(({ key }) => keys.includes(key));
}
