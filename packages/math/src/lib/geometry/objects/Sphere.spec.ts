import * as Sphere from './Sphere.js';

describe('geometry/objects/Sphere', () => {
  describe('surface-area', () => {
    it('should return surface area', () => {
      const r = 123;
      expect(Sphere.surfaceArea(r)).toBe(4 * Math.PI * Math.pow(r, 2));
    });
  });

  describe('volume', () => {
    it('should return volume', () => {
      const r = 123;
      expect(Sphere.volume(r)).toBe((4 / 3) * Math.PI * Math.pow(r, 3));
    });
  });
});
