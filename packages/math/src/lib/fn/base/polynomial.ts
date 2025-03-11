import { MonoOperatorFunction } from '../types/operator-function.js';

/**
 * Creates a polynomial function in the form
 * `a[0] + a[1]*x + a[2]*x^2 + ... + a[n]*x^n`
 * where `n` is the length of the given coefficients - 1.
 *
 * @param a The coefficients for the polynom
 */
export function polynomial(a: readonly number[]): MonoOperatorFunction<number> {
  return v => a.reduce((acc, cur, i) => acc + cur * Math.pow(v, i), 0);
}
