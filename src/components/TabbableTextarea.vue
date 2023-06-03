<script setup>
defineProps({
  modelValue: String
})
let emit = defineEmits(['update:modelValue'])
function onTabPress(e) {
  // accesses the textarea
  let textarea = e.target
  let val = textarea.value,
    start = textarea.selectionStart,
    end = textarea.selectionEnd
  textarea.value = val.substring(0, start) + '\t' + val.substring(end)
  textarea.selectionStart = textarea.selectionEnd = start + 1
}
</script>

<template>
  <!-- @ = listen for, tab = tab keydown & prevent the default Tab action to happen   -->
  <textarea
    @keydown.tab.prevent="onTabPress"
    @keyup="emit('update:modelValue', $event.target.value)"
    v-text="modelValue"
  />
</template>
