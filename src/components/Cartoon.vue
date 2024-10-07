<script setup lang="ts">
  import {ref, computed, defineProps, defineEmits} from 'vue';
  import {useCartoonStore} from '@/stores/cartoonStore';
  import Vote from './Vote.vue';

  const props = defineProps(['title']);

  const cartoonStore = useCartoonStore();
  const cartoons = cartoonStore.cartoons;
  const toon = cartoons.find(c => c.title === props.title);

  const total = computed(() => {
    return toon.votes.yay - toon.votes.nay
  });

  const opacity = computed(() => {
    return Math.max(0.1, total.value/10);
  });
</script>

<template>
  <div class="toon" v-bind:style="{opacity}">
    <h2>{{ toon.title }} ({{ total }} points)</h2>
    <p>{{ toon.desc }}</p>

    <Vote v-bind:title="toon.title" />
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
