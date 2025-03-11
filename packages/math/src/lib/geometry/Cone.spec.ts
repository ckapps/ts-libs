import * as Cone from './Cone.js';

describe('geometry/Cone', () => {
  describe('surface-area', () => {
    it('should return surface area', () => {
      const r = 123;
      const h = 321;
      expect(Cone.surfaceArea(r, h)).toBe(
        Math.PI * r * Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2))
      );
    });
  });

  describe('volume', () => {
    it('should return volume', () => {
      const r = 123;
      const h = 321;
      expect(Cone.volume(r, h)).toBe((Math.PI / 3) * h * Math.pow(r, 2));
    });
  });
});
