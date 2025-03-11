import * as O from 'effect/Option';
import { filter, map, OperatorFunction } from 'rxjs';

/**
 * Filters emissions from the source observable emitting option
 * values that are `Some` and maps them to their value.
 */
export function filterValue<T>(): OperatorFunction<O.Option<T>, T> {
  return (obs) =>
    obs.pipe(
      filter(O.isSome),
      map((o) => o.value)
    );
}
