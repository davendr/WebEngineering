<script setup>
import { provide, ref } from 'vue'

defineProps({ quiz: Object })

let name = ref('John Doe')

//Quiz.vue will provide this value to all of it's children!
//so if there is an useful variable there is no need of components that only handle the variable
provide('key', {
  name,
  changeName: () => (name.value = 'Changed')
})
//the logic of changing the name can only be done by the parent
</script>
<!--  
  So the child can call it like this:
  <button @click="changeName">{{ name }}</buton>
  or with "inject"

  let quiz = inject('quiz');
-->

<template>
  <h1>{{ name }}</h1>
</template>
