<script setup lang="ts">
  import {ref, defineProps, defineEmits} from 'vue';

  const props = defineProps(['name', 'init']);
  const emit = defineEmits(['incr', 'decr']);

  const count = ref(props.init || Math.floor(Math.random() * 10));

  function incr() {
    count.value++;
    emit('incr', props.name, count.value);
  }

  function decr() {
    count.value--;
    emit('decr', props.name, count.value);
  }
</script>

<template>
  <div class="counter">
    {{ props.name }}: {{ count }}

    <button v-on:click="incr">Inc</button>
    <button v-on:click="decr">Dec</button>
  </div>
</template>

<style scoped>
  .counter { 
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
