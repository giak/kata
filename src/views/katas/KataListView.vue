<template>
  <div class="kata-list">
    <header class="kata-list__header">
      <h1>Katas</h1>
      <div class="kata-list__filters">
        <select v-model="selectedStatus" class="kata-list__filter">
          <option value="">Tous les statuts</option>
          <option v-for="status in kataStatuses" :key="status" :value="status">
            {{ formatStatus(status) }}
          </option>
        </select>
      </div>
    </header>

    <div class="kata-list__grid">
      <div v-for="kata in filteredKatas" :key="kata.id" class="kata-card">
        <h3>{{ kata.title }}</h3>
        <div class="kata-card__meta">
          <span class="kata-card__difficulty" :class="kata.difficulty.toLowerCase()">
            {{ kata.difficulty }}
          </span>
          <span class="kata-card__status" :class="kata.status.toLowerCase()">
            {{ formatStatus(kata.status) }}
          </span>
        </div>
        <p class="kata-card__description">{{ kata.description }}</p>
        <div class="kata-card__tags">
          <span v-for="tag in kata.tags" :key="tag" class="kata-card__tag">
            {{ tag }}
          </span>
        </div>
        <div class="kata-card__actions">
          <a v-if="kata.codewarsUrl" :href="kata.codewarsUrl" target="_blank" class="kata-card__link">
            Voir sur Codewars
          </a>
          <router-link :to="'/katas/' + kata.id" class="kata-card__button">
            {{ kata.status === 'NOT_STARTED' ? 'Commencer' : 'Continuer' }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useKataStore } from '@/stores/kata.store'
import { KataStatus } from '@/katas/types/kata.types'

const kataStore = useKataStore()
const selectedStatus = ref('')

const kataStatuses = Object.values(KataStatus)

const filteredKatas = computed(() => {
  if (!selectedStatus.value) {
    return kataStore.katas
  }
  return kataStore.getKatasByStatus(selectedStatus.value as KataStatus)
})

const formatStatus = (status: string) => {
  const statusMap: Record<string, string> = {
    NOT_STARTED: 'À commencer',
    IN_PROGRESS: 'En cours',
    COMPLETED: 'Terminé'
  }
  return statusMap[status] || status
}
</script>
