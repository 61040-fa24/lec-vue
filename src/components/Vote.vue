<script setup  lang="ts">
  import {ref, defineProps, defineEmits} from 'vue';

  const props = defineProps(['yay', 'nay']);
</script>

<template>
  <p>
    <button>🥳 ({{ props.yay }})</button>
    <button>🤢 ({{ props.nay }})</button>
  </p>
</template>

<style scoped>
  button {
    background: transparent;
    border-radius: 1rem;
    margin-right: 1rem;
    cursor: pointer;
  }

  button:hover {
    background: rgb(246, 246, 189);
  }
</style>
