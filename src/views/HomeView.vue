<!-- this does the same as the below script. Just script setup uses composition API
     basically sets up a compiler macro
<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script> 

-->

<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
//  import { onMounted } from 'vue'
// cause we inserted in vite.config that we dont want the .value, we dont need to import { ref } anymore
// import { ref } from 'vue'

// this string is accessed by .value
//let message = ref('Hello, World!')

// thats why we use another method of
let message = $ref('Hello World!')

let doSomething = () => {
  alert('doing it now')
}

setTimeout(() => {
  message.value = 'I have Been Changed'
}, 2000)

// the return doesn't need to be set. It's dynamically above the template

/** old scheme
   * 
   * export deault {
     *  <setup>
      data() {
        return {
          message: "Hello World",
        }
      }

      mounted() {
        alert("I have been mounted");
      },
    * </setup>
    *}
    */
</script>

<template>
  <main>
    <!-- it's common use, to take The in front of Welcome if the Welcome page has only this usage of being needed once within the project -->
    <TheWelcome />

    <p>{{ message }}</p>
    <p>
      <!--  we cannot use v-model as before in composition APIs. We need to use the ref also to make it work. -->
      <input type="text" v-model="message" />
      <button @click="doSomething">Click Me!.</button>
    </p>
  </main>
</template>
