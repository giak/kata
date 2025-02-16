import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevtools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevtools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    fs: {
      // Permettre l'accès aux fichiers nécessaires
      allow: [
        // Permettre l'accès au répertoire du projet
        '.',
        // Permettre l'accès aux katas
        'src/katas/implementations',
        // Permettre l'accès aux node_modules
        'node_modules',
      ],
      strict: false
    }
  },
  optimizeDeps: {
    include: [
      'monaco-editor/esm/vs/editor/editor.worker',
      'monaco-editor/esm/vs/language/typescript/ts.worker'
    ]
  }
})
