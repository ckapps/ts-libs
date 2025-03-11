import { divideAll } from './divide.js';

describe('base/divide', () => {
  it('should divide', () => {
    const result = divideAll([10000, 10, 10, 10, 10]);
    expect(result).toBe(1);
  });
});
