<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <nav class="navbar">
      <div class="navbar__content">
        <RouterLink to="/katas" class="navbar__brand">
          Katas
        </RouterLink>
      </div>
    </nav>

    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>
