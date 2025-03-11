import * as Circle from './Circle.js';

describe('geometry/circle', () => {
  describe('area', () => {
    it('should return area', () => {
      const r = 123;
      expect(Circle.area(r)).toBe(Math.pow(r, 2) * Math.PI);
    });
  });

  describe('circumference', () => {
    it('should return circumference', () => {
      const r = 123;
      expect(Circle.circumference(r)).toBe(r * 2 * Math.PI);
    });
  });

  describe('diameter', () => {
    it('should return diameter', () => {
      const r = 123;
      expect(Circle.diameter(r)).toBe(r * 2);
    });
  });
});
