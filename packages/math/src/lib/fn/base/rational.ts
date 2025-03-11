import * as Arr from 'effect/Array';
import * as Fn from 'effect/Function';
import { divideAll } from '../../base/divide.js';
import { polynomial } from './polynomial.js';

/**
 * Creates a function that is represented as the quotient
 * of 2 polynomial functions `P` and `Q` of `x` as in
 * `f(x) = P(x) / Q(x)`.
 *
 * @param pc Coefficients of `P`
 * @param qc Coefficients of `Q`
 */
export const rational: {
  (opts: {
    /** Coefficients of `P`. */
    polynomial: readonly number[];
    /** Coefficients of `Q`. */
    quotient: readonly number[];
  }): (value: number) => number;
  (
    value: number,
    opts: {
      /** Coefficients of `P`. */
      polynomial: readonly number[];
      /** Coefficients of `Q`. */
      quotient: readonly number[];
    }
  ): number;
} = Fn.dual(
  2,
  (
    value: number,
    {
      polynomial: pc,
      quotient,
    }: { polynomial: readonly number[]; quotient: readonly number[] }
  ): number =>
    Fn.pipe(
      [polynomial(pc), polynomial(quotient)] as const,
      Arr.map(Fn.apply(value)),
      divideAll
    )
);
