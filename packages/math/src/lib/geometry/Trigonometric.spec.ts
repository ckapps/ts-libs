import { sin, cos } from './Trigonometric.js';

describe('geometry/Trigonometric', () => {

  describe('sin', () => {

    it('should should apply sin function', () => {
      const numbers = [0, 1, 2, 3, 4];
      const result = sin(numbers);

      expect(result).toEqual(numbers.map(Math.sin));
    });
  });

  describe('cos', () => {

  
    it('should should apply sin function', () => {
      const numbers = [0, 1, 2, 3, 4];
      const result = cos(numbers);

      expect(result).toEqual(numbers.map(Math.cos));
    });
  });
});



