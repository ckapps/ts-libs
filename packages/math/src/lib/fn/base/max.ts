

/**
 * @param numbers Numeric expressions to be evaluated
 *
 * @returns
 * The larger of a set of supplied numeric expressions
 */
export function max(numbers: readonly number[]): number {
  return Math.max(...numbers);
}
