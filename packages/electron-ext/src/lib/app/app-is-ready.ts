import { app } from 'electron';
import { from, shareReplay } from 'rxjs';

/**
 * Emits and completes when electron is initialized.
 */
export const appIsReady$ = from(app.whenReady()).pipe(shareReplay(1));
