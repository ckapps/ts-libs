import * as Arr from 'effect/Array';
import * as Num from 'effect/Number';

/**
 * @param numbers The numbers to divide
 *
 * @returns
 * The quotient of the given `numbers`
 */
export function divideAll(numbers: Arr.NonEmptyReadonlyArray<number>): number {
  const [currentValue, ...others] = numbers;

  return Arr.reduce(others, currentValue, (acc, cur) => Num.unsafeDivide(acc, cur));
}
