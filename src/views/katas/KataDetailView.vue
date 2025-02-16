<template>
  <div class="kata-detail" v-if="kata">
    <!-- En-tête et description -->
    <div class="kata-info">
      <div class="kata-info__header">
        <div class="kata-info__title">
          <RouterLink to="/katas" class="kata-info__back">← Retour</RouterLink>
          <h1>{{ kata.title }}</h1>
          <div class="kata-info__meta">
            <span class="kata-card__difficulty" :class="kata.difficulty.toLowerCase()">
              {{ kata.difficulty }}
            </span>
            <span class="kata-card__status" :class="kata.status.toLowerCase()">
              {{ formatStatus(kata.status) }}
            </span>
            <a v-if="kata.codewarsUrl" :href="kata.codewarsUrl" target="_blank" class="kata-info__link">
              Voir sur Codewars
            </a>
          </div>
        </div>
      </div>

      <div class="kata-info__description">
        <p>{{ kata.description }}</p>
        <div class="kata-info__tags">
          <span v-for="tag in kata.tags" :key="tag" class="kata-card__tag">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>

    <!-- Zone de code -->
    <div class="kata-code">
      <div class="kata-code__editor">
        <div class="kata-code__header">
          <h2>Implémentation</h2>
          <button @click="runTests" class="run-tests-button" :disabled="isRunningTests">
            {{ isRunningTests ? 'Exécution...' : 'Exécuter les tests' }}
          </button>
        </div>
        <div class="kata-code__container">
          <CodeEditor
            v-model="currentImplementation"
            language="typescript"
            @update:modelValue="handleCodeChange"
          />
        </div>
      </div>

      <!-- Éditeur de tests -->
      <div class="kata-code__tests">
        <div class="kata-code__header">
          <h2>Tests</h2>
        </div>
        <div class="kata-code__container">
          <TestEditor
            v-model="currentTests"
            language="typescript"
            @update:modelValue="handleTestsChange"
          />
        </div>
      </div>

      <!-- Résultats des tests -->
      <div class="kata-code__results">
        <h3>Résultats des tests</h3>
        <div class="test-results" v-if="testResults.length > 0">
          <div
            v-for="(result, index) in testResults"
            :key="index"
            class="test-result"
            :class="{ 'test-passed': result.passed, 'test-failed': !result.passed }"
          >
            <span class="test-result__icon">{{ result.passed ? '✓' : '✗' }}</span>
            <span class="test-result__description">{{ result.description }}</span>
          </div>
        </div>
        <div v-else class="test-results test-results--empty">
          Exécutez les tests pour voir les résultats
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useKataStore } from '@/stores/kata.store'
import { KataStatus } from '@/katas/types/kata.types'
import CodeEditor from '@/components/CodeEditor.vue'
import type { TestResult } from '@/types/kata'
import TestEditor from '@/components/TestEditor.vue'

const route = useRoute()
const kataStore = useKataStore()
const currentImplementation = ref('')
const currentTests = ref('')
const isRunningTests = ref(false)
const testResults = ref<Array<{ description: string; passed: boolean }>>([])

const kata = computed(() => {
  const id = route.params.id as string
  return kataStore.getKataById(id)
})

const formatStatus = (status: string) => {
  const statusMap: Record<string, string> = {
    NOT_STARTED: 'À commencer',
    IN_PROGRESS: 'En cours',
    COMPLETED: 'Terminé'
  }
  return statusMap[status] || status
}

onMounted(async () => {
  if (kata.value) {
    try {
      const implementation = kataStore.getImplementationById(kata.value.id)
      if (implementation) {
        currentImplementation.value = implementation.implementation
        currentTests.value = implementation.tests
      } else {
        // Charger le contenu brut des fichiers kata.ts et kata.test.ts
        const [implResponse, testResponse] = await Promise.all([
          fetch(`/src/katas/implementations/${kata.value.id}/kata.ts`),
          fetch(`/src/katas/implementations/${kata.value.id}/kata.test.ts`)
        ])

        if (!implResponse.ok || !testResponse.ok) {
          throw new Error('Failed to load kata files')
        }

        const [sourceCode, testCode] = await Promise.all([
          implResponse.text(),
          testResponse.text()
        ])

        currentImplementation.value = sourceCode
        currentTests.value = testCode

        // Sauvegarder l'implémentation et les tests dans le store
        kataStore.saveImplementation({
          kata: kata.value,
          implementation: sourceCode,
          tests: testCode
        })
      }
    } catch (error) {
      console.error('Error loading kata files:', error)
      currentImplementation.value = `// Erreur lors du chargement du kata
// Veuillez réessayer plus tard`
      currentTests.value = `// Erreur lors du chargement des tests
// Veuillez réessayer plus tard`
    }
  }
})

const handleCodeChange = (newValue: string) => {
  if (kata.value) {
    currentImplementation.value = newValue
    kataStore.saveImplementation({
      kata: kata.value,
      implementation: newValue,
      tests: ''
    })

    if (kata.value.status === KataStatus.NOT_STARTED) {
      kataStore.updateKataStatus(kata.value.id, KataStatus.IN_PROGRESS)
    }
  }
}

const handleTestsChange = (newValue: string) => {
  if (kata.value) {
    currentTests.value = newValue
    kataStore.saveImplementation({
      kata: kata.value,
      implementation: currentImplementation.value,
      tests: newValue
    })

    if (kata.value.status === KataStatus.NOT_STARTED) {
      kataStore.updateKataStatus(kata.value.id, KataStatus.IN_PROGRESS)
    }
  }
}

const runTests = async () => {
  if (!kata.value) return

  isRunningTests.value = true
  testResults.value = []

  try {
    // Charger le module avec la fonction de test
    const { runTests: executeTests } = await import(`../../katas/implementations/${kata.value.id}/kata.test.ts`)

    // Exécuter les tests
    const results = await executeTests()

    // Traiter les résultats
    testResults.value = results.map((result: TestResult) => ({
      description: result.name,
      passed: result.status === 'passed'
    }))

    // Si tous les tests passent, marquer comme complété
    if (testResults.value.every(result => result.passed)) {
      kataStore.updateKataStatus(kata.value.id, KataStatus.COMPLETED)
    }
  } catch (error) {
    console.error('Erreur lors de l\'exécution des tests:', error)
    testResults.value = [{
      description: `Erreur lors de l'exécution des tests: ${error instanceof Error ? error.message : 'Erreur inconnue'}`,
      passed: false
    }]
  } finally {
    isRunningTests.value = false
  }
}
</script>
