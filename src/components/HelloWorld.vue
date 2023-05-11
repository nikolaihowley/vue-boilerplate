<template>
  <div class="py-4 text-center">
    <h1 class="pb-4">{{ msg }}</h1>
    <p class="mb-4">Count: {{ count }}</p>
    <button class="px-4 py-2 rounded border" @click="count++">
      Add to the count!
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue"

defineProps({
  msg: String,
})

const count = ref(0)
</script>
