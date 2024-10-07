<script setup lang="ts">
  import {ref, computed, defineProps, defineEmits} from 'vue';
  import Vote from './Vote.vue';

  const props = defineProps(['title', 'desc', 'votes']);

  const total = ref(props.votes.yay - props.votes.nay);
</script>

<template>
  <div class="toon">
    <h2>{{ props.title }} ({{ total }} points)</h2>
    <p>{{ props.desc }}</p>
    <Vote v-bind="props.votes" />
  </div>
</template>

<style scoped>
  .toon { 
    margin: 2rem auto; 
    padding: 1rem;
    border: 0.25rem solid #ccc;
    border-radius: 1rem;
    width: 50vw;
  }

  button {
    margin: 0 1rem;
  }
</style>
