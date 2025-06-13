<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goBackHome() {
  // Use replace to avoid adding to history
  router.replace({ name: 'Home' })
}
</script>

<template>
  <div class="game-screen" @click="goBackHome">
    <h1>Hello World</h1>
  </div>
</template>

<style scoped>
.game-screen {
  position: fixed; /* Keep fixed positioning */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #faa000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: pointer; /* Add pointer cursor to indicate clickable */
}

/* Ensure no children elements are blocking clicks */
.game-screen * {
  pointer-events: none;
}
</style>