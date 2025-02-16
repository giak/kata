import { solution } from './kata'
import type { TestResult } from '@/types/kata'

// Fonction utilitaire pour vérifier l'égalité
function assertEquals(actual: number, expected: number): boolean {
  return actual === expected
}

// Fonction d'exécution des tests
export const runTests = async (): Promise<TestResult[]> => {
  const results: TestResult[] = []

  // Test 1: Nombres négatifs
  try {
    const result = solution(-1)
    results.push({
      name: 'should return 0 for negative numbers',
      status: assertEquals(result, 0) ? 'passed' : 'failed'
    })
  } catch (error) {
    results.push({
      name: 'should return 0 for negative numbers',
      status: 'failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    })
  }

  // Test 2: Entrée 0
  try {
    const result = solution(0)
    results.push({
      name: 'should return 0 for input of 0',
      status: assertEquals(result, 0) ? 'passed' : 'failed'
    })
  } catch (error) {
    results.push({
      name: 'should return 0 for input of 0',
      status: 'failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    })
  }

  // Test 3: Entrée 10
  try {
    const result = solution(10)
    results.push({
      name: 'should return 23 for input of 10',
      status: assertEquals(result, 23) ? 'passed' : 'failed'
    })
  } catch (error) {
    results.push({
      name: 'should return 23 for input of 10',
      status: 'failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    })
  }

  // Test 4: Entrée 20
  try {
    const result = solution(20)
    results.push({
      name: 'should return 78 for input of 20',
      status: assertEquals(result, 78) ? 'passed' : 'failed'
    })
  } catch (error) {
    results.push({
      name: 'should return 78 for input of 20',
      status: 'failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    })
  }

  // Test 5: Grands nombres
  try {
    const result = solution(200)
    results.push({
      name: 'should handle larger numbers',
      status: assertEquals(result, 9168) ? 'passed' : 'failed'
    })
  } catch (error) {
    results.push({
      name: 'should handle larger numbers',
      status: 'failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    })
  }

  return results
}
