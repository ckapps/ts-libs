import { beforeEach, describe, expect, it, test } from 'vitest';
import { of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { counterIncrease } from './counter-increase.operator.js';

describe('math/operators/counter-increase', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  describe('increase', () => {
    const cases = [[1], [0], [-1], [10], [-10]];
    test.each(cases)('should increase by %p', (delta) => {
      const source$ = of(-1, 0, 0.5, 1, 2).pipe(counterIncrease({ delta }));

      testScheduler.run(({ expectObservable }) => {
        const expectedMarble = '(abcde|)';
        const expectedIngredients = {
          a: 0,
          b: delta * 1,
          c: delta * 2,
          d: delta * 3,
          e: delta * 4,
        };

        expectObservable(source$).toBe(expectedMarble, expectedIngredients);
      });
    });
  });

  it('should start with', () => {
    const source$ = of(-1, 0, 0.5, 1, 2).pipe(
      counterIncrease({ delta: 1, start: -6 })
    );

    testScheduler.run(({ expectObservable }) => {
      const expectedMarble = '(abcde|)';
      const expectedIngredients = {
        a: -6,
        b: -5,
        c: -4,
        d: -3,
        e: -2,
      };

      expectObservable(source$).toBe(expectedMarble, expectedIngredients);
    });
  });
});
