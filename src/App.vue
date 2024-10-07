<script setup lang="ts">
  import {ref, computed} from 'vue';
  import Header from '@/components/Header.vue';

  const message = ref('Hello, 6.1040 Fall 2024!');
  console.log(message.value);

  // prev did not work in class because I had an older version of
  // vue installed. prev is supported for Vue v3.4 and above 
  // (I had v3.3 installed :facepalm:).
  const reversedMsg = computed((prev) => {
    console.log('new message', message.value);
    console.log('old reversedMsg', prev);
    return message.value.split('').reverse().join('');
  });

  const now = computed(() => {
    return Date.now();
  });

  function printNow() {
    return Date.now();
  }

  const colors = ref([
    {value: 0}, 
    {value: 0}, 
    {value: 0}
  ]);

  // START CODE BLOCK A
  const rgb = ref('rgb(0, 0, 0)');
  
  function setColor() {
    const colorVal = colors.value.map(c => c.value).join(', ');
    rgb.value = `rgb(${colorVal})`;
  };
  // END CODE BLOCK A

  /* Trying switching between the code block A above and B below.
     Notice how that changes when interactive updates become "live."
     With B, everything happens reactively: i.e., as you change the
     sliders, the background color automatically updates. 
     With A, the background color only changes when the button is pressed. 
     When might you prefer A over B, or vice-versa?
  */
  
  // START CODE BLOCK B
  // 
  // const rgb = computed(() => {
  //   const colorVal = colors.value.map(c => c.value).join(', ');
  //   return `rgb(${colorVal})`;
  // });
  // 
  // END CODE BLOCK B

  // Imagine this is some data I fetched from my backend REST API
  const cartoons = ref([
    {
      title: "ThunderCats",
      desc: "ThunderCats is an American media franchise, featuring a fictional group of cat-like humanoid aliens.",
      votes: {yay: 7, nay: 3}
    },
    {
      title: "Captain Planet",
      desc: "Our world is in peril. Gaia, the spirit of the Earth, can no longer stand the terrible destruction plaguing our planet. She sends five magic rings to five special young people.",
      votes: {yay: 8, nay: 2}
    },
    {
      title: "Top Cat",
      desc: "The title character is the leader of a gang of Manhattan alley cats who constantly hatch get-rich-quick schemes through scams, but most of them usually backfire.",
      votes: {yay: 1, nay: 9}
    },
    {
      title: "Dexter's Labratory",
      desc: "The series follows Dexter, an enthusiastic boy-genius with a hidden science laboratory in his room full of inventions, which he keeps secret from his clueless parents.",
      votes: {yay: 6, nay: 4}
    }
  ]);
</script>

<template>  
  <Header />

  <h1>
    {{ message }}
  </h1>

  <h2>Two-way Data Bind</h2>

  <ol>
    <li>Changing a reactive variable (e.g., in JavaScript/TypeScript) automatically re-renders the DOM</li>
    <li>Manipulating a DOM element (e.g., a textbox/slider/etc.) automatically updates a reactive variable</li>
  </ol>

  <p>
    1: <input type="text" 
          v-bind:value="message" />
  </p>

  <p>
    2: <input type="text" 
          v-on:input="event => message = event.target.value" />
  </p>

  <p>
    1 & 2: <input type="text" v-model="message" />
  </p>

  <h2>Computed Properties vs. Function Calls</h2>

  <h2>
    {{ reversedMsg }}
  </h2>

  <p>C: {{ now }}</p>

  <p>
    D: {{ printNow() }}
  </p>

  <p>
    Notice the difference between a computed property (C) and 
    doing the same computation but in a function call (D). 
    Because the computed property <code>now</code> does not use
    any other reactive variables, it is never recomputed. 
    The function call, however, is recomputed every time any 
    reactive variable changes (e.g., try moving the sliders, 
    updating the textboxes etc.) because Vue doesn't know any better.
    So, whenever possible, you should opt for computed properties as
    it will produce more efficient and optimized re-rendering.
  </p>

  <h2>Automatic vs. Manual Updates</h2>

  <div v-bind:style="{background: rgb, color: 'white'}">
    <p v-for="c in colors">
      <input type="range" min="0" max="255" step="1" 
        v-model="c.value"> {{ c.value }}
    </p>

    <button v-on:click="setColor">Set Color</button>
  </div>

</template>

<style>

</style>
