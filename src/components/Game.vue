<script setup>
import { routeSet } from '../router/routeSet.js';
import { useRouter } from 'vue-router';
import { onMounted, onUnmounted } from 'vue';

const router = useRouter();

onMounted(() => {
  routeSet.setupBackButtonHandler(router);
});

onUnmounted(() => {
  routeSet.teardownBackButtonHandler();
});

const goBack = () => {
  router.back();
};
</script>

<template>
  <div class="game-container">
    <h2>Game View</h2>
    <button @click="goBack">Go Back to Home</button>
  </div>
</template>

<style scoped>
.game-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #222;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

button {
  padding: 10px 20px;
  background: #f00;
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
}
</style>