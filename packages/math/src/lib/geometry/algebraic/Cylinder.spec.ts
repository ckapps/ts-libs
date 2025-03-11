import * as Cylinder from './Cylinder.js';

describe('geometry/algebraic/Cylinder', () => {
  const r = 123;
  const h = 321;
  const cy = Cylinder.Cylinder({ radius: r, height: h });
  
  describe('surface-area', () => {
    it('should return surface area', () => {
      expect(Cylinder.lateralSurfaceArea(cy)).toBe(2 * Math.PI * r * h);
    });
  });

  describe('surface-area', () => {
    it('should return surface area', () => {
      expect(Cylinder.surfaceArea(cy)).toBe(2 * Math.PI * r * (r + h));
    });
  });

  describe('surface-area', () => {
    it('should return surface area', () => {
      expect(Cylinder.volume(cy)).toBe(Math.PI * h * Math.pow(r, 2));
    });
  });
});
