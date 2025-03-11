/**
 * @param numbers The numbers to sum up
 *
 * @returns
 * The sum of the given `numbers`
 */
export function sumAll(numbers: readonly number[]) {
  return numbers.reduce((acc, cur) => (acc += cur), 0);
}
