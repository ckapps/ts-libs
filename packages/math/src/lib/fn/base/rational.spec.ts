import { rational } from './rational.js';

describe('functional/rational', () => {
  it('should calculate rational', () => {
    const p = [0, 10];
    const q = [0, 1];

    const fn = rational({ polynomial: p, quotient: q });
    const r = fn(10);

    expect(r).toBe(10);
  });
});
