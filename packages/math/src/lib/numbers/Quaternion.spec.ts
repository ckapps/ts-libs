import * as Quaternion from './Quaternion.js';
import * as Vector3 from '../algebra/vector3.js';

type vec3 = Vector3.vec3;

describe('numbers/Quaternion', () => {
  const mockQuaternion = Quaternion.Quaternion({ w: 0, x: 1, y: 2, z: 3 });
  const qUnitX = Quaternion.Quaternion({ w: 0, x: 1, y: 0, z: 0 });
  const qZero = Quaternion.Quaternion({
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  });

  describe('create', () => {
    it('should create a quaternion', () => {
      const [w, x, y, z] = [1, 2, 3, 4];
      const r = Quaternion.Quaternion({ w, x, y, z });

      expect(r).toBeDefined();
      expect(r.w).toBe(w);
      expect(r.x).toBe(x);
      expect(r.y).toBe(y);
      expect(r.z).toBe(z);
    });

    it('fromOmegaVec3', () => {
      const w = 1;
      const v: vec3 = [0, 0, 0];
      const r = Quaternion.fromOmegaVec3(w, v);

      expect(r).toBeDefined();
      expect(r.w).toBe(w);
      expect(r.x).toBe(v[0]);
      expect(r.y).toBe(v[1]);
      expect(r.z).toBe(v[2]);
    });
  });

  describe('getter', () => {
    it('wxyz', () => {
      const [w, x, y, z] = Quaternion.wxyz(mockQuaternion);

      expect(w).toBe(mockQuaternion.w);
      expect(x).toBe(mockQuaternion.x);
      expect(y).toBe(mockQuaternion.y);
      expect(z).toBe(mockQuaternion.z);
    });

    it('xyz', () => {
      const [x, y, z] = Quaternion.xyz(mockQuaternion);

      expect(x).toBe(mockQuaternion.x);
      expect(y).toBe(mockQuaternion.y);
      expect(z).toBe(mockQuaternion.z);
    });
  });
  describe('numbers/Quaternion', () => {
    const mockQuaternion = Quaternion.Quaternion({ w: 0, x: 1, y: 2, z: 3 });

    const compare = (r: Quaternion.Quaternion, parts: number[]) => {
      const [w, x, y, z] = parts;

      const numDigits = 5;
      expect(r).toBeDefined();
      expect(r.w).toBeCloseTo(w, numDigits);
      expect(r.x).toBeCloseTo(x, numDigits);
      expect(r.y).toBeCloseTo(y, numDigits);
      expect(r.z).toBeCloseTo(z, numDigits);
    };

    it('conjugate', () => {
      const r = Quaternion.conjugate(mockQuaternion);

      compare(r, [
        mockQuaternion.w,
        -mockQuaternion.x,
        -mockQuaternion.y,
        -mockQuaternion.z,
      ]);
    });

    it('invertSign', () => {
      const r = Quaternion.invertSign(mockQuaternion);

      compare(r, [
        -mockQuaternion.w,
        -mockQuaternion.x,
        -mockQuaternion.y,
        -mockQuaternion.z,
      ]);
    });

    it('normalize', () => {
      const r = Quaternion.normalize(
        Quaternion.Quaternion({ w: 2, x: 0, y: 0, z: 0 })
      );

      compare(r, [1, 0, 0, 0]);
    });

    it('invert', () => {
      const r = Quaternion.invert(
        Quaternion.Quaternion({ w: 2, x: 1, y: 0, z: 0 })
      );

      compare(r, [0.4, -0.2, -0, -0]);
    });

    describe('scalar operations', () => {
      it('scale', () => {
        const r = Quaternion.scale(mockQuaternion, 2);

        compare(r, [
          mockQuaternion.w * 2,
          mockQuaternion.x * 2,
          mockQuaternion.y * 2,
          mockQuaternion.z * 2,
        ]);
      });

      it('dividedBy', () => {
        const r = Quaternion.divideBy(mockQuaternion, 2);

        compare(r, [
          mockQuaternion.w * 0.5,
          mockQuaternion.x * 0.5,
          mockQuaternion.y * 0.5,
          mockQuaternion.z * 0.5,
        ]);
      });
    });

    describe('operators', () => {
      it('add', () => {
        const r = Quaternion.add(mockQuaternion, mockQuaternion);

        compare(r, [
          mockQuaternion.w * 2,
          mockQuaternion.x * 2,
          mockQuaternion.y * 2,
          mockQuaternion.z * 2,
        ]);
      });

      it('subtract', () => {
        const r = Quaternion.subtract(mockQuaternion, {
          ...mockQuaternion,
          w: 0,
          z: 0,
        });

        compare(r, [mockQuaternion.w, 0, 0, mockQuaternion.z]);
      });

      it('divide', () => {
        const r = Quaternion.divide(mockQuaternion, mockQuaternion);

        compare(r, [1, 0, 0, 0]);
      });

      it('dot', () => {
        const r = Quaternion.dot(mockQuaternion, mockQuaternion);
        const expected =
          mockQuaternion.w * mockQuaternion.w +
          mockQuaternion.x * mockQuaternion.x +
          mockQuaternion.y * mockQuaternion.y +
          mockQuaternion.z * mockQuaternion.z;

        expect(r).toBe(expected);
      });
    });
  });

  describe('algebra/quaternion', () => {
    const mockQuaternion1 = Quaternion.Quaternion({ w: 0, x: 1, y: 0, z: 0 });
    const mockQuaternion2 = Quaternion.Quaternion({ w: 0, x: 0, y: 0, z: 1 });
    const mockQuaternion3 = Quaternion.Quaternion({ w: 0, x: -1, y: 0, z: 0 });

    const compare = (
      r: Quaternion.Quaternion,
      expected: Quaternion.Quaternion
    ) => {
      const { w, x, y, z } = expected;

      const numDigits = 5;
      expect(r).toBeDefined();
      expect(r.w).toBeCloseTo(w, numDigits);
      expect(r.x).toBeCloseTo(x, numDigits);
      expect(r.y).toBeCloseTo(y, numDigits);
      expect(r.z).toBeCloseTo(z, numDigits);
    };

    describe('linear', () => {
      it('should return a', () => {
        const r = Quaternion.lerp(mockQuaternion1, mockQuaternion2, 0);

        compare(r, mockQuaternion1);
      });

      it('should return b', () => {
        const r = Quaternion.lerp(mockQuaternion1, mockQuaternion2, 1);

        compare(r, mockQuaternion2);
      });
    });

    describe('spherical', () => {
      it('should return a', () => {
        const r = Quaternion.slerp(mockQuaternion1, mockQuaternion2, 0);

        compare(r, mockQuaternion1);
      });

      it('should return b', () => {
        const r = Quaternion.slerp(mockQuaternion1, mockQuaternion2, 1);

        compare(r, mockQuaternion2);
      });

      it('should invert for big angles', () => {
        const r = Quaternion.slerp(mockQuaternion1, mockQuaternion3, 1);

        compare(r, mockQuaternion1);
      });

      it('should use lerp for small angles', () => {
        const r = Quaternion.slerp(mockQuaternion1, mockQuaternion1, 1);

        compare(r, mockQuaternion1);
      });
    });
  });

  it('toAxisAngle', () => {
    const [axis, angle] = Quaternion.toAxisAngle(qZero);

    expect(angle).toBe(Math.PI);
    expect(axis).toEqual([0, 0, 0]);
  });

  it('fromAxisAngle', () => {
    const angle = Math.PI;
    const v: Vector3.vec3 = [1, 0, 0];
    const r = Quaternion.fromAxisAngle(v, angle);

    expect(r).toBeDefined();
  });

  it('fromEulerZXY', () => {
    const r = Quaternion.fromEulerZXY([0, 0, 0]);

    expect(r).toBeDefined();
    expect(r.w).toBe(1);
    expect(r.x).toBe(0);
    expect(r.y).toBe(0);
    expect(r.z).toBe(0);
  });

  it('toEulerAngles', () => {
    const [x, y, z] = Quaternion.toEulerAngles(qUnitX);

    expect(x).toBe(0);
    expect(y).toBeCloseTo(0);
    expect(z).toBe(Math.PI);
  });

  describe('rotateVec3', () => {
    const compare = (r: vec3, parts: number[]) => {
      const [x1, y1, z1] = r;
      const [x2, y2, z2] = parts;

      expect(x1).toBe(x2);
      expect(y1).toBe(y2);
      expect(z1).toBe(z2);
    };

    it('should rotate', () => {
      const r = Quaternion.rotateVec3(mockQuaternion, [0, 0, 1]);

      compare(r, [6, 12, 4]);
    });
  });
});
