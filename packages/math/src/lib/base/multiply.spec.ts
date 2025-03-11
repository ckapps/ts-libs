import { multiplyAll } from './multiply.js';

describe('base/multiply', () => {
  it('should multiply', () => {
    const result = multiplyAll([1, 2, 3, 4]);
    expect(result).toBe(1 * 2 * 3 * 4);
  });

  it('should return 0 for zero elements', () => {
    const result = multiplyAll([]);
    expect(result).toBe(1);
  });
});
