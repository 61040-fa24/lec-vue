<script setup  lang="ts">
  import {ref, defineProps, defineEmits} from 'vue';
  import {useCartoonStore} from '@/stores/cartoonStore';

  const props = defineProps(['title']);

  const cartoonStore = useCartoonStore();
  const cartoons = cartoonStore.cartoons;
  const toon = cartoons.find(c => c.title === props.title);
</script>

<template>
  <p>
    <button v-on:click="cartoonStore.voteYay(toon.title)">
      🥳 ({{ toon.votes.yay }})
    </button>

    <button v-on:click="cartoonStore.voteNay(toon.title)">
      🤢 ({{ toon.votes.nay }})
    </button>
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
