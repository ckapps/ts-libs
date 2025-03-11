import * as Plane from './Plane.js';
import { down, up, vec3, zero } from '../../algebra/vector3.js';

describe('geometry/euclidean/Plane', () => {
  describe('side-of-plane', () => {
    const plane: Plane.Plane<Readonly<vec3>> = {
      normal: up,
      point: zero,
    };

    const f = Plane.onSideOfPlane(plane);

    test.each([
      [zero, Plane.PlaneSide.OnPlane],
      [up, Plane.PlaneSide.Front],
      [down, Plane.PlaneSide.Back],
    ])('for point %p should return %p', (other, expected) => {
      const result = f(other);
      expect(result).toBe(expected);
    });
  });

  describe('geometry/euclidean/plane/from-distance', () => {
    it('should be on xz axis', () => {
      const p = Plane.fromDistance(up, 0);

      expect(p.normal).toEqual(up);
      expect(p.point.length).toBe(3);
      expect(p.point[0] === 0).toBe(true);
      expect(p.point[1] === 0).toBe(true);
      expect(p.point[2] === 0).toBe(true);
    });

    it('should be offset from xz axis', () => {
      const p = Plane.fromDistance(down, 1);

      expect(p.normal).toEqual(down);
      expect(p.point.length).toBe(3);
      expect(p.point[0] === 0).toBe(true);
      expect(p.point[1] === 1).toBe(true);
      expect(p.point[2] === 0).toBe(true);
    });
  });
});
