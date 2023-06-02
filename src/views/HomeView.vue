<script setup>
//import { useFlash } from '@/composables/useFlash.js'
//import { ref, watch } from 'vue'
import { useStorage } from '@/composables/useStorage.js'

let food = useStorage('food', 'salad')
let age = useStorage('age', '10')

let obj = useStorage('obj', { one: 'one' })

setTimeout(() => {
  obj.value = { changed: 'entirely' }
}, 3000)

// watch(food, (val) => {
//   write('food', val)
// })
//
// let food = ref(localStorage.getItem('food'))
// let age = ref(localStorage.getItem('age'))
//
// function write(key, val) {
//   // this will monitor the keystrokes every second. Maybe a timer around.
//   localStorage.setItem(key, val)
// }
//
// setTimeout(() => {
//   food.value = 'changed'
// }, 2000)
</script>

<template>
  <main>
    <!-- flash is being initialized in mixins/flash.js-->
    <p>What is your favorite food? <input type="text" v-model="food" /></p>

    <p>What is your age? <input type="text" v-model="age" /></p>
  </main>
</template>
