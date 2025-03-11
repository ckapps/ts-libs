/**
 * @param numbers Numeric expressions to be evaluated
 *
 * @returns
 * The smaller of a set of supplied numeric expressions
 */
export function min(numbers: readonly number[]): number {
  return Math.min(...numbers);
}
