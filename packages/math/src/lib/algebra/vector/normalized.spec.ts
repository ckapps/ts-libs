import { normalized } from './normalized.js';

import { magnitude } from './magnitude.js';

describe('algebra/vector/normalized', () => {
  it('should normalize', () => {
    const v = normalized([1, 2, 3]);
    expect(magnitude(v)).toEqual(1);
  });
});
