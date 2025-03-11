import { angle } from './angle.js';

describe('algebra/vector/angle', () => {
  it('should return dot', () => {
    const r = angle([1, 0, 0], [0, 1, 0]);
    expect(r).toBe(Math.PI / 2);
  });
});
