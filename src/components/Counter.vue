<script setup lang="ts">
  import {ref} from 'vue';

  const count = ref(Math.floor(Math.random() * 10));
</script>

<template>
  <div class="counter">
    Counter: {{ count }}

    <button v-on:click="count++">Inc</button>
    <button v-on:click="count--">Dec</button>
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
