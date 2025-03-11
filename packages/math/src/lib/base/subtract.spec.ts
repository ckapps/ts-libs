import { subtractAll } from './subtract.js';

describe('base/subtract', () => {
  it('should subtract', () => {
    const r = 10;

    const result = subtractAll([r, r, r, r]);
    expect(result).toBe(r - r * 3);
  });

  it('should return 0 for zero elements', () => {
    const result = subtractAll([]);
    expect(result).toBe(0);
  });
});
