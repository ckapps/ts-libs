/**
 * @param numbers The numbers to multiply
 *
 * @returns
 * The product of the given `numbers`
 */
export function multiplyAll(numbers: readonly number[]): number {
  return numbers.reduce((acc, cur) => (acc *= cur), 1);
}
