

<template>
  <div>
    <h1>test</h1>
    <h2>双向绑定： {{ msg }}</h2>
    
    <lao-input ref="inputRef" v-model="msg" :maxLength="5" />
    <br>
    <button @click="onFocus">focus</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import type { InputInstance } from '@laodi/components';

const msg = ref("")
const inputRef = ref<InputInstance>()

function onFocus() {
  console.log("focus")
  inputRef.value?.focus()
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
