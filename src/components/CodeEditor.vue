<template>
  <div ref="editorContainer" class="code-editor"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as monaco from 'monaco-editor'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'

// Définir les workers pour Monaco
self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'typescript' || label === 'javascript') {
      return new tsWorker()
    }
    return new editorWorker()
  }
}

// Fonction pour nettoyer le code des sourcemaps
const cleanSourceCode = (code: string): string => {
  return code.replace(/\/\/#\s*sourceMappingURL=.*$/gm, '')
}

const props = defineProps<{
  modelValue: string
  language?: string
  readOnly?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const editorContainer = ref<HTMLElement>()
let editor: monaco.editor.IStandaloneCodeEditor | null = null

onMounted(() => {
  if (editorContainer.value) {
    // Configuration de Monaco
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.ESNext,
      allowNonTsExtensions: true,
      moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
      module: monaco.languages.typescript.ModuleKind.CommonJS,
      noEmit: true,
      sourceMap: false,
      inlineSourceMap: false,
      inlineSources: false,
    })

    editor = monaco.editor.create(editorContainer.value, {
      value: cleanSourceCode(props.modelValue),
      language: props.language || 'typescript',
      theme: 'vs-dark',
      automaticLayout: true,
      minimap: { enabled: true },
      scrollBeyondLastLine: false,
      readOnly: props.readOnly,
      fontSize: 14,
      fontFamily: '"Fira Code", Consolas, "Courier New", monospace',
      lineNumbers: 'on',
      roundedSelection: false,
      scrollBeyondLastColumn: 0,
      wordWrap: 'on',
      tabSize: 2,
      renderWhitespace: 'selection',
      comments: {
        ignoreEmptyLines: true,
        removeEmptyLines: true
      }
    })

    editor.onDidChangeModelContent(() => {
      const value = editor?.getValue() || ''
      emit('update:modelValue', cleanSourceCode(value))
    })
  }
})

// Mettre à jour l'éditeur quand la valeur change
watch(() => props.modelValue, (newValue) => {
  if (editor && cleanSourceCode(newValue) !== editor.getValue()) {
    editor.setValue(cleanSourceCode(newValue))
  }
})

onBeforeUnmount(() => {
  if (editor) {
    editor.dispose()
  }
})
</script>

<style>
/* Les styles ont été déplacés vers src/assets/components/code-editor.css */
</style>
