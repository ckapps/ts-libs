import { sumAll } from './sum.js';

describe('base/sum', () => {
  it('should sum all elements', () => {
    const r = 10;

    const result = sumAll([r, r, r, r]);
    expect(result).toBe(r * 4);
  });

  it('should return 0 for zero elements', () => {
    const result = sumAll([]);
    expect(result).toBe(0);
  });
});
