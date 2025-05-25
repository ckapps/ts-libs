import * as Data from 'effect/Data';
import * as Layer from 'effect/Layer';

import { Config, Effect, Logger, Schema } from 'effect';

interface Domain<Main extends Effect.Effect<unknown, never, unknown>> {
  readonly _tag: '@ckapp/cause-effect/domain';
  /** Main effect. */
  readonly main: Main;
}

export const Domain = Data.tagged('@ckapp/cause-effect/domain');

/**
 * Creates a domain with a main effect.
 * 
 * @returns 
 */
export function make<Main extends Effect.Effect<unknown, never, unknown>>(args: {
  /** Main effect. */
  readonly main: Main;
}): Domain<Main> {
  return {
    _tag: '@ckapp/cause-effect/domain',
    main: args.main,
  };
}



// Define a config that expects a string with at least 4 characters
const HostConfig = Schema.Config(
  'Host',
  Schema.String.pipe(Schema.minLength(4))
);
const PostConfig = Schema.Config(
  'Post',
  Schema.Number.pipe(Schema.greaterThan(5))
);

// Define a Cache service
class Cache extends Effect.Service<Cache>()('app/Cache', {
  // Define how to create the service

  effect: Effect.gen(function* () {
    const host = yield* HostConfig;
    const port = yield* PostConfig;

    Effect.logDebug(`Application started: ${host}:${port}`);

    const lookup = (key: string) =>
      Effect.succeed(`Value for ${key}`).pipe(Effect.withSpan('cache.lookup'));

    return { lookup } as const;
  }).pipe(Effect.withSpan('init.Cache')),
  // Specify dependencies
  dependencies: [],
}) {}

const TestReposLive = Layer.mergeAll(Cache.Default, Cache.Default);
