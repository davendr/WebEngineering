<script setup>
import Quiz from '@/components/Quiz/MyQuiz.vue'
import { state } from '@/stores/quizStore.js'
</script>

<template>
  <main>
    <Quiz :quiz="state" />
  </main>
</template>
