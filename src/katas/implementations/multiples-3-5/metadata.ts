import type { Kata } from '@/katas/types/kata.types'
import { KataDifficulty, KataStatus } from '@/katas/types/kata.types'

export const metadata: Kata = {
  id: 'multiples-3-5',
  title: 'Multiples of 3 or 5',
  description: `If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
The sum of these multiples is 23. Write a solution that returns the sum of all multiples of 3 or 5 below the given number.`,
  difficulty: KataDifficulty.EASY,
  codewarsUrl: 'https://www.codewars.com/kata/514b92a657cdc65150000006',
  createdAt: new Date('2024-02-15'),
  status: KataStatus.NOT_STARTED,
  tags: ['math', 'algorithms', 'fundamentals']
}
