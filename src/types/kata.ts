export interface TestResult {
  name: string
  status: 'passed' | 'failed'
  error?: string
}

export interface TestWorkerMessage {
  results?: TestResult[]
  error?: string
}

export interface TestWorkerData {
  implementation: string
  kataId: string
}
