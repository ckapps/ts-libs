import * as Data from 'effect/Data';
import * as Fn from 'effect/Function';
import * as Num from 'effect/Number';
import * as Vector3 from '../algebra/vector3.js';
import * as Trigonometry from '../geometry/Trigonometric.js';
import { sumAll } from '../base/sum.js';

// --------------------------------------------------------
// Types
// --------------------------------------------------------
/**
 * Represents a number in the 4 dimensional quaternion number system.
 *
 * Every quaternion can be written in the form of `w + x i + y j + z k`.
 * In this `i`, `j` and `k` are bases spanning a 4 dimensional space and fullfilling
 * the following properties: `i^2 = j^2 = k^2 = ijk = -1`.
 *
 * Furthermore, `w`, `x`, `y`, `z` are real numbers.
 * `w` is considered the 'real part',
 * whereas `x i + y j + z k` is considered the 'imaginary part' or 'vector part'.
 */

export interface Quaternion {
  readonly _tag: '@ckapp/math/Quaternion';
  readonly w: number;
  readonly x: number;
  readonly y: number;
  readonly z: number;
}

export const Quaternion = Data.tagged<Quaternion>('@ckapp/math/Quaternion');

/**
 * @param w Real part
 * @param xyz Vector part
 *
 * @returns
 * A new quaternion from the given `w` and `xyz`.
 */
export function fromOmegaVec3(w: number, xyz: Vector3.vec3) {
  const [x, y, z] = xyz;

  return Quaternion({ w, x, y, z });
}

/**
 * @param q A quaternion
 *
 * @returns
 * An array with the real numbers from `q` in the order
 * `[w, x, y, z]`
 */
export function wxyz(q: Quaternion): [number, number, number, number] {
  const { w, x, y, z } = q;

  return [w, x, y, z];
}

/**
 * @param q A quaternion
 *
 * @returns
 * An array with the real numbers from `q` in the order
 * `[w, x, y, z]`
 */
export function xyz(q: Quaternion): [number, number, number] {
  const { x, y, z } = q;

  return [x, y, z];
}

// --------------------------------------------------------
// Operations with 1 quaternion
// --------------------------------------------------------
/**
 * Conjugates the given quaternion `q`
 *
 * @param q A quaternion
 */
export function conjugate(q: Quaternion) {
  const { w, x, y, z } = q;

  return Quaternion({ w, x: -x, y: -y, z: -z });
}

/**
 * @param q A quaternion
 *
 * @returns
 * The magnitude of the given quaternion `q`
 */
export const magnitude = Fn.flow(sqrtMagnitude, Math.sqrt);

/**
 * @param q A quaternion
 *
 * @returns
 * The magnitude squared of the given quaternion `q`
 */
export function sqrtMagnitude(q: Quaternion) {
  return dot(q, q);
}

/**
 * Normalizes the given quaternion `q`, so that it has a
 * `magnitude` of 1.
 *
 * @param q A quaternion
 */
export function normalize(q: Quaternion) {
  return divideBy(q, magnitude(q));
}

/**
 * Inverts the given quaternion `q`
 *
 * @param q A quaternion
 */
// prettier-ignore
export const invert = Fn.flow(
  conjugate,
  c => divideBy(c, sqrtMagnitude(c))
)

/**
 * Scales the real numbers from the quaternion `q` by the given `scalar`.
 *
 * @param q A quaternion
 * @param scalar A scalar
 */
export function scale(q: Quaternion, scalar: number) {
  const { w, x, y, z } = q;

  return Quaternion({
    w: w * scalar,
    x: x * scalar,
    y: y * scalar,
    z: z * scalar,
  });
}

/**
 * Divides the real numbers from the quaternion `q` by the given `scalar`.
 *
 * @param q A quaternion
 * @param scalar A scalar
 */
export function divideBy(q: Quaternion, scalar: number) {
  return scale(q, 1 / scalar);
}

/**
 * @param q A quaternion
 *
 * @returns
 * A quaternion equivalent to `q` but with inverted signs on all reals.
 */
export function invertSign(q: Quaternion) {
  const { w, x, y, z } = q;

  return Quaternion({ w: -w, x: -x, y: -y, z: -z });
}

// --------------------------------------------------------
// Operations with more quaternions
// --------------------------------------------------------
/**
 * @param a Quaternion 1
 * @param b Quaternion 2
 *
 * @returns
 * The sum of the quaternions `a` and `b`.
 */
export const add: {
  (that: Quaternion): (self: Quaternion) => Quaternion;
  (self: Quaternion, that: Quaternion): Quaternion;
} = Fn.dual(2, (self: Quaternion, that: Quaternion): Quaternion => {
  const [aw, ax, ay, az] = wxyz(self);
  const [bw, bx, by, bz] = wxyz(that);

  return Quaternion({
    w: aw + bw,
    x: ax + bx,
    y: ay + by,
    z: az + bz,
  });
});

/**
 * Subtracts a quaternion `b` from the quaternion `a`.
 *
 * @param a Quaternion 1
 * @param b Quaternion 2
 */
export function subtract(a: Quaternion, b: Quaternion) {
  return add(a, invertSign(b));
}

export const multiply: {
  (that: Quaternion): (self: Quaternion) => Quaternion;
  (self: Quaternion, that: Quaternion): Quaternion;
} = Fn.dual(2, (self: Quaternion, that: Quaternion): Quaternion => {
  const [aw, ax, ay, az] = wxyz(self);
  const [bw, bx, by, bz] = wxyz(that);

  return Quaternion({
    w: aw * bw - ax * bx - ay * by - az * bz,
    x: aw * bx + ax * bw + ay * bz - az * by,
    y: aw * by + ay * bw + az * bx - ax * bz,
    z: aw * bz + az * bw + ax * by - ay * bx,
  });
});

export const divide: {
  (that: Quaternion): (self: Quaternion) => Quaternion;
  (self: Quaternion, that: Quaternion): Quaternion;
} = Fn.dual(2, (self: Quaternion, that: Quaternion): Quaternion => {
  return multiply(self, invert(that));
});

/**
 * @param a Quaternion 1
 * @param b Quaternion 2
 *
 * @returns
 * The dot product between quaternions `a` and `b`.
 */
export function dot(a: Quaternion, b: Quaternion) {
  const { w: aw, x: ax, y: ay, z: az } = a;
  const { w: bw, x: bx, y: by, z: bz } = b;

  return sumAll([aw * bw, ax * bx, ay * by, az * bz]);
}

function lerpBetween(a: Quaternion, b: Quaternion) {
  return Fn.flow(
    Num.clamp({ minimum: 0, maximum: 1 }),
    (_t: number): [Quaternion, Quaternion] => [scale(a, 1 - _t), scale(b, _t)],
    (q: [Quaternion, Quaternion]) => add(q[0], q[1]),
    normalize
  );
}

/**
 * Linear interpolation between quaternions `a` and `b`.
 * The parameter `t` defines the ratio.
 *
 * @param a Quaternion 1
 * @param b Quaternion 2
 * @param t Ratio of interpolation. The value is clamped between [0, 1].
 */
export function lerp(a: Quaternion, b: Quaternion, t: number) {
  return lerpBetween(a, b)(t);
}

/**
 * Spherical linear interpolation between quaternions `a` and `b`.
 * The parameter `t` defines the ratio.
 *
 * @param a Quaternion 1
 * @param b Quaternion 2
 * @param t Ratio of interpolation. The value is clamped between [0, 1].
 */
export function slerp(a: Quaternion, b: Quaternion, t: number) {
  // dot = cos(theta)
  let dotProduct = dot(a, b);
  let q3: Quaternion;

  // if (dot < 0), q1 and q2 are more than 90 degrees apart,
  // so we can invert one to reduce spinning
  if (dotProduct < 0) {
    dotProduct = -dotProduct;
    q3 = invertSign(b);
  } else {
    q3 = b;
  }

  // use linear interpolation for small angles
  if (dotProduct >= 0.95) {
    return lerp(a, q3, t);
  }

  const _t = Num.clamp(t, { minimum: 0, maximum: 1 });
  const angle = Math.acos(dotProduct);

  const qa = scale(a, Math.sin(angle * (1 - _t)));
  const qb = scale(q3, Math.sin(angle * _t));

  return divideBy(add(qa, qb), Math.sin(angle));
}

/**
 * @param q A normalized quaternion
 *
 * @returns
 * The axis-angle pair of this normalized quaternion
 */
export function toAxisAngle(q: Quaternion): [Vector3.vec3, number] {
  const [w, ..._axis] = wxyz(q);

  const theta = Math.acos(w);
  const axis = Vector3.scale(_axis, 1 / Math.sin(theta));

  return [axis, theta * 2];
}

/**
 * Creates a quaternion from a normalized axis-angle pair rotation
 *
 * @param axis The axis
 * @param angle The angle
 *
 * @returns
 * A quaternion
 *
 * @example
 * // Creates a rotation of 10 radians around the z axis
 * const rot = fromAxisAngle(10, vec3.forward);
 */
export function fromAxisAngle(axis: Vector3.vec3, angle: number) {
  const theta = angle / 2;

  return fromOmegaVec3(Math.cos(theta), Vector3.scale(axis, Math.sin(theta)));
}

/**
 * @param q A quaternion
 * @param homogenous
 *
 * @returns
 * The euler angles of the given quaternion `q`.
 */
export function toEulerAngles(q: Quaternion, homogenous = true): Vector3.vec3 {
  const [w, x, y, z] = wxyz(q);
  const w2 = w * w;
  const x2 = x * x;
  const y2 = y * y;
  const z2 = z * z;

  let euler: Vector3.vec3;

  if (homogenous) {
    euler = [
      Math.atan2(2 * (x * y + z * w), x2 - y2 - z2 + w2),
      Math.asin(-2 * (x * z - y * w)),
      Math.atan2(2 * (y * z + x * w), -x2 - y2 + z2 + w2),
    ];
  } else {
    euler = [
      Math.atan2(2 * (z * y + x * w), 1 - 2 * (x2 + y2)),
      Math.asin(-2 * (x * z - y * w)),
      Math.atan2(2 * (x * y + z * w), 1 - 2 * (y2 + z2)),
    ];
  }

  return euler;
}

/**
 * @param rotation Vector describing the rotation
 *
 * @returns
 * A rotation that rotates
 *  1. z degrees around the z axis,
 *  2. x degrees around the x axis and
 *  3. y degrees around the y axis
 *
 * applied in that order.
 */
export function fromEulerZXY(rotation: Vector3.vec3) {
  const radians = Vector3.scale(rotation, 0.5);
  const [cX, cY, cZ] = Trigonometry.cos(radians);
  const [sX, sY, sZ] = Trigonometry.sin(radians);

  return Quaternion({
    w: cX * cY * cZ - sX * sY * sZ,
    x: sX * cY * cZ - cX * sY * sZ,
    y: cX * sY * cZ + sX * cY * sZ,
    z: cX * cY * sZ + sX * sY * cZ,
  });
}

/**
 * Rotates the given vector `v` by the quaternion `q`
 *
 * @param q A normalized quaternion
 * @param v A vector
 */
export const rotateVec3: {
  (v: Vector3.vec3): (self: Quaternion) => Vector3.vec3;
  (self: Quaternion, v: Vector3.vec3): Vector3.vec3;
} = Fn.dual(2, (self: Quaternion, v: Vector3.vec3): Vector3.vec3 => {
  const V = fromOmegaVec3(0, v);

  return Fn.pipe(
    multiply(self, V),
    multiply(conjugate(self)),
    // Finally, return as vector
    xyz
  );
});
