import { describe, expect, it, vi } from 'vitest';
import { fromKeyboard, Target } from './from-keyboard.js';

import * as rxjs from 'rxjs';

vi.mock('rxjs');

describe('input/from-keyboard', () => {
  const fromEventSpy = vi.spyOn(rxjs, 'fromEvent');
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
