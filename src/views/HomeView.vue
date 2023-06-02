<script setup>
import { useFlash } from '@/composables/useFlash.js'

let { flash } = useFlash()
</script>

<template>
  <main>
    <p>
      <!-- flash is being initialized in mixins/flash.js-->
      <button @click="flash('Test', 'It works')">Click me</button>
    </p>
  </main>
</template>
