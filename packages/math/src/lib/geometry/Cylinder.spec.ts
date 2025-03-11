import * as Cylinder from './Cylinder.js';

describe('geometry/Cylinder', () => {
  describe('surface-area', () => {
    it('should return surface area', () => {
      const r = 123;
      const h = 321;
      expect(Cylinder.lateralSurfaceArea(r, h)).toBe(2 * Math.PI * r * h);
    });
  });

  describe('surface-area', () => {
    it('should return surface area', () => {
      const r = 123;
      const h = 321;
      expect(Cylinder.surfaceArea(r, h)).toBe(2 * Math.PI * r * (r + h));
    });
  });

  describe('surface-area', () => {
    it('should return surface area', () => {
      const r = 123;
      const h = 321;
      expect(Cylinder.volume(r, h)).toBe(Math.PI * h * Math.pow(r, 2));
    });
  });
});
