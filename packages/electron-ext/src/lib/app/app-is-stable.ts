import { Observable } from 'rxjs';
import { mergeMap, shareReplay } from 'rxjs';
import { appIsReady$ } from './app-is-ready.js';

/**
 * @param observableFactory
 * Factory that creates an observable that should emit and complete
 * when the app is stabilized.
 *
 * @returns
 */
export function appIsStable$<T>(
  observableFactory: () => Observable<T>,
): Observable<T> {
  return appIsReady$.pipe(
    mergeMap(observableFactory),
    shareReplay(1),
  );
}
