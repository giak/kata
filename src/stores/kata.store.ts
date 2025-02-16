import { defineStore } from 'pinia'
import type { Kata, KataImplementation } from '@/katas/types/kata.types'
import { KataStatus } from '@/katas/types/kata.types'

interface KataState {
  katas: Kata[]
  implementations: Record<string, KataImplementation>
}

export const useKataStore = defineStore('kata', {
  state: (): KataState => ({
    katas: [],
    implementations: {}
  }),

  getters: {
    getKataById: (state) => (id: string) => state.katas.find((kata) => kata.id === id),

    getImplementationById: (state) => (id: string) => state.implementations[id],

    getKatasByStatus: (state) => (status: KataStatus) =>
      state.katas.filter((kata) => kata.status === status),

    getKatasByTag: (state) => (tag: string) =>
      state.katas.filter((kata) => kata.tags.includes(tag))
  },

  actions: {
    addKata(kata: Kata) {
      this.katas.push(kata)
    },

    updateKataStatus(id: string, status: KataStatus) {
      const kata = this.katas.find((k) => k.id === id)
      if (kata) {
        kata.status = status
      }
    },

    saveImplementation(implementation: KataImplementation) {
      this.implementations[implementation.kata.id] = implementation
    }
  }
})
