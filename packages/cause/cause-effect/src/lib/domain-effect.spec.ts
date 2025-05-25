import * as Domain from './domain-effect.js';
import * as Data from 'effect/Data';
import * as Layer from 'effect/Layer';

import { Config, Effect, Logger, Schema } from 'effect';

// Define a Cache service
class Cache extends Effect.Service<Cache>()('app/Cache', {
  // Define how to create the service
  effect: Effect.gen(function* () {
    const host = yield* Config.string('Host');
    const lookup = (key: string) =>
      Effect.succeed(`Value for ${key}`).pipe(Effect.withSpan('cache.lookup'));

    return { lookup } as const;
  }).pipe(Effect.withSpan('init.Cache')),
  // Specify dependencies
  dependencies: [],
}) {}



describe('DomainEffect', () => {
  it('should work', () => {
    const { main } = Domain.make({
      main: Layer.mergeAll(Cache.Default, Cache.Default).pipe(
        Layer.launch,
        Effect.catchAll((e) => Effect.logError('Uncaught error', e)),
        Effect.catchAllDefect((e) => Effect.logFatal('Defect', e))
      ),
    });
  });
});
