import { beforeEach, describe, expect, it } from 'vitest';
import { TestScheduler } from 'rxjs/testing';
import * as OptionRx from './option-rx.js';
import * as O from 'effect/Option';

describe('option', () => {
  let testScheduler: TestScheduler;

  const a = 123;
  const b = 'spec';
  const values: Record<string, O.Option<number | string>> = {
    a: O.some(a),
    b: O.some(b),
    n: O.none(),
  };

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  describe('filterValue', () => {
    it('should filter and emit value', () => {
      testScheduler.run(({ expectObservable, cold }) => {
        const source$ = cold('  (abn|)', values);
        const expectedMarble = '(ab-|)';

        const result$ = source$.pipe(OptionRx.filterValue());

        expectObservable(result$).toBe(expectedMarble, {
          a,
          b,
        });
      });
    });
  });
});
