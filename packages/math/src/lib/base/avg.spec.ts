import { avg } from './avg.js';

describe('base/avg', () => {
  it('should calculate avg', () => {
    const result = avg([10, 10, 10, 10]);
    expect(result).toBe(10);
  });
});
