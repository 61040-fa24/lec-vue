<script setup lang="ts">
  import md5 from 'md5';
  import {computed} from 'vue';
  import {useAuthStore} from '@/stores/authStore';

  const store = useAuthStore();
  const gravatar = computed(() => `http://www.gravatar.com/avatar/${md5(store.email)}`);
</script>

<template>
  <div id="auth">
    <img v-if="store.authenticated" v-bind:src="gravatar" width="50" />

    <input type="text" v-model="store.email" placeholder="email address" />

    <button v-if="!store.authenticated" v-on:click="store.toggleAuth">Login</button>

    <button v-if="store.authenticated" v-on:click="store.toggleAuth">Logout</button>
  </div>
</template>

<style scoped>
  #auth {
    width: 25vw;
    display: flex;
  }
</style>
