import * as rxjs from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fromKeyboard, filterKeys, Target } from './input-rx.js';

vi.mock('rxjs', {spy: true});

describe('input', () => {
  describe('from-keyboard', () => {
    const fromEventSpy = vi.spyOn(rxjs, 'fromEvent').mockImplementation(() => rxjs.EMPTY);
    const target = vi.fn() as unknown as Target;

    it('should call without options', () => {
      fromKeyboard(target, 'keypress');
      expect(fromEventSpy).toBeCalledWith(target, 'keypress');
    });

    it('should call with options', () => {
      const options = { passive: true };
      fromKeyboard(target, 'keypress', options);
      expect(fromEventSpy).toBeCalledWith(target, 'keypress', options);
    });
  });

  describe('input/operators/filter-keys', () => {
    let testScheduler: TestScheduler;

    const createKeyboardEvent = (key: string) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return { key };
    };

    const values = {
      a: createKeyboardEvent('a'),
      b: createKeyboardEvent('b'),
      c: createKeyboardEvent('c'),
      d: createKeyboardEvent('d'),
      e: createKeyboardEvent('e'),
    };

    beforeEach(() => {
      testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
    });

    it('should filter if not included', () => {
      testScheduler.run(({ expectObservable, cold }) => {
        const source$ = cold('abcde|', values).pipe(
          filterKeys([values.b.key, values.d.key])
        );

        const expectedMarble = '-b-d-|';
        expectObservable(source$).toBe(expectedMarble, values);
      });
    });
  });
});
