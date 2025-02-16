import type { Kata } from '@/katas/types/kata.types'
import { KataDifficulty, KataStatus } from '@/katas/types/kata.types'

export const metadata: Kata = {
  id: 'string-ends-with',
  title: 'String ends with?',
  description: `Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false`,
  difficulty: KataDifficulty.EASY,
  codewarsUrl: 'https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d',
  createdAt: new Date('2024-02-15'),
  status: KataStatus.NOT_STARTED,
  tags: ['strings', 'fundamentals']
}
