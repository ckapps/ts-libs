import * as Cone from './Cone.js';

describe('geometry/algebraic/Cone', () => {
  const r = 123;
  const h = 321;
  const cone = Cone.Cone({ radius: r, height: h });

  describe('surface-area', () => {
    it('should return surface area', () => {
      expect(Cone.surfaceArea(cone)).toBe(
        Math.PI * r * Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2))
      );
    });
  });

  describe('volume', () => {
    it('should return volume', () => {
      expect(Cone.volume(cone)).toBe((Math.PI / 3) * h * Math.pow(r, 2));
    });
  });
});
