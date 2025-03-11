import * as Plane from './Plane.js';
import * as Vec3 from '../../algebra/vector3.js';

describe('geometry/Plane', () => {
  describe('side-of-plane', () => {
    const plane = Plane.make({
      normal: Vec3.up,
      point: Vec3.zero,
    });

    const f = Plane.onSideOfPlane(plane);

    test.each([
      [Vec3.zero, Plane.PlaneSide.OnPlane],
      [Vec3.up, Plane.PlaneSide.Front],
      [Vec3.down, Plane.PlaneSide.Back],
    ])('for point %p should return %p', (other, expected) => {
      const result = f(other);
      expect(result).toBe(expected);
    });
  });

  describe('geometry/euclidean/plane/from-distance', () => {
    it('should be on xz axis', () => {
      const p = Plane.fromDistance(Vec3.up, 0);

      expect(p.normal).toEqual(Vec3.up);
      expect(p.point.length).toBe(3);
      expect(p.point[0] === 0).toBe(true);
      expect(p.point[1] === 0).toBe(true);
      expect(p.point[2] === 0).toBe(true);
    });

    it('should be offset from xz axis', () => {
      const p = Plane.fromDistance(Vec3.down, 1);

      expect(p.normal).toEqual(Vec3.down);
      expect(p.point.length).toBe(3);
      expect(p.point[0] === 0).toBe(true);
      expect(p.point[1] === 1).toBe(true);
      expect(p.point[2] === 0).toBe(true);
    });
  });
});
