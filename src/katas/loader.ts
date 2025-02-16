import { useKataStore } from '@/stores/kata.store'
import { metadata as multiples35Metadata } from './implementations/multiples-3-5/metadata'
import { metadata as stringEndsWithMetadata } from './implementations/string-ends-with/metadata'

export async function loadKatas() {
  const kataStore = useKataStore()

  // Ajouter le kata Multiples of 3 or 5
  kataStore.addKata(multiples35Metadata)

  // Ajouter le kata String ends with
  kataStore.addKata(stringEndsWithMetadata)

  // Ici, nous pouvons ajouter d'autres katas au fur et à mesure
}
