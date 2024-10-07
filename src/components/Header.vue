<script setup lang="ts">

</script>

<template>
  <div id="header">
    <slot name="logo"></slot>
    <h1>I am the Header Component</h1>
    <h2><slot name="subtitle"></slot></h2>

    <p>
      <router-link to="/">Home</router-link> &nbsp;
      <router-link to="/about">About</router-link>
    </p>
  </div>
</template>

<style scoped>
  #header {
    border: 0.25rem solid #ccc;
    border-radius: 1rem;
    padding: 0 1rem;
  }

  h1 {
    color: steelblue;
  }
</style>
