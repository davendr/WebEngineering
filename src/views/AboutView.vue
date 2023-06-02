<script setup>
import { useFlash } from '@/composables/useFlash.js'

let { flash } = useFlash()
</script>

<template>
  <div>
    <main>
      <button @click="flash('Yay!', 'It works', 'info')">Click me</button>
    </main>
  </div>
</template>
