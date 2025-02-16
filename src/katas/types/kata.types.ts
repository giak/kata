export enum KataDifficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
  EXPERT = 'EXPERT'
}

export enum KataStatus {
  NOT_STARTED = 'NOT_STARTED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED'
}

export interface Kata {
  id: string
  title: string
  description: string
  difficulty: KataDifficulty
  codewarsUrl?: string
  createdAt: Date
  status: KataStatus
  tags: string[]
}

export interface KataImplementation {
  kata: Kata
  implementation: string
  tests: string
}
