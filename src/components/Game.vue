<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function goBackHome() {
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #111;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}
.game-screen * {
  pointer-events: none;
}
</style>