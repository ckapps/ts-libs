/**
 * @param values Numeric expressions to be evaluated
 *
 * @returns
 * The cosinus for each supplied numeric expressions
 */
export function cos<T extends readonly number[]>(values: T): T;
export function cos(values: readonly number[]): readonly number[];

export function cos(values: readonly number[]): readonly number[] {
  return values.map(Math.cos);
}

/**
 * @param values Numeric expressions to be evaluated
 *
 * @returns
 * The sinus for each supplied numeric expressions
 */
export function sin<T extends readonly number[]>(values: T): T;
export function sin(values: readonly number[]): readonly number[];

export function sin(values: readonly number[]): readonly number[] {
  return values.map(Math.sin);
}
