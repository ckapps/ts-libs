import { flow } from 'effect/Function';
import { expand } from '../flow/index.js';
import { polynomial } from './polynomial.js';
import { divideAll } from '../../base/divide.js';

/**
 * Creates a function that is represented as the quotient
 * of 2 polynomial functions `P` and `Q` of `x` as in
 * `f(x) = P(x) / Q(x)`.
 *
 * @param pc Coefficients of `P`
 * @param qc Coefficients of `Q`
 */
export function rational(pc: number[], qc: number[]) {
  return flow(
    // First
    expand(polynomial(pc), polynomial(qc)),
    // Then
    divideAll,
  );
}
