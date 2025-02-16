/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 * The sum of these multiples is 23.
 *
 * @param number The number to find multiples below
 * @returns The sum of all multiples of 3 or 5 below the input number
 */
export function solution(number: number): number {
  if (number < 0) return 0

  let sum = 0
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i
    }
  }
  return sum
}
