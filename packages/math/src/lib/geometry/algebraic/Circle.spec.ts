import * as Circle from './Circle.js';

describe('geometry/algebraic/circle', () => {
  const r = Circle.Circle({radius: 123});

  describe('area', () => {
    it('should return area', () => {
      expect(Circle.area(r)).toBe(Math.pow(r.radius, 2) * Math.PI);
    });
  });

  describe('circumference', () => {
    it('should return circumference', () => {
      expect(Circle.circumference(r)).toBe(r.radius * 2 * Math.PI);
    });
  });

  describe('diameter', () => {
    it('should return diameter', () => {
      expect(Circle.diameter(r)).toBe(r.radius * 2);
    });
  });
});
