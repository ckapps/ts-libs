import * as Sphere from './Sphere.js';

describe('geometry/algebraic/Sphere', () => {
  const r = 123;
  const sphere = Sphere.Sphere({ radius: r });

  describe('surface-area', () => {
    it('should return surface area', () => {
      expect(Sphere.surfaceArea(sphere)).toBe(4 * Math.PI * Math.pow(r, 2));
    });
  });

  describe('volume', () => {
    it('should return volume', () => {
      const r = 123;
      expect(Sphere.volume(sphere)).toBe((4 / 3) * Math.PI * Math.pow(r, 3));
    });
  });
});
