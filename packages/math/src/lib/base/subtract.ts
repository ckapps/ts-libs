/**
 * @param numbers The numbers to subtract
 *
 * @returns
 * Inversion operation to `sum`.
 */
export function subtractAll(numbers: readonly number[]) {
  const [currentValue = 0, ...others] = numbers;
  return others.reduce((acc, cur) => (acc -= cur), currentValue);
}
