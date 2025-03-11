import { beforeEach, describe, expect, it } from 'vitest';
import { toArray } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { switchExpandItems } from './switch-expand-items.operator.js';

describe('array/operators/switch-expand-items', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should map items', () => {
    testScheduler.run(({ expectObservable, cold }) => {
      const marbles = '(abc|)';
      const array$ = cold(marbles).pipe(toArray());
      const source$ = array$.pipe(switchExpandItems());

      expectObservable(source$).toBe(marbles);
    });
  });
});
