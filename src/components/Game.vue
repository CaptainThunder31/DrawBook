<script setup>
import { routeSet } from '../router/routeSet.js';
import { computed, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Create computed properties for reactive access
const routeHistory = computed(() => routeSet.get());
const previousRoute = computed(() => routeSet.getPrevious());

// Handle back button press
const handleBackButton = () => {
  if (routeHistory.value.length <= 1) {
    // If no history left, prevent exiting app
    console.log('Prevent app exit');
    return false;
  }
  router.back();
};

onMounted(() => {
  // For mobile devices, handle hardware back button
  if (window.history && window.history.pushState) {
    window.addEventListener('popstate', handleBackButton);
  }
});

onUnmounted(() => {
  window.removeEventListener('popstate', handleBackButton);
});

// Navigation controls
const goBack = () => {
  if (previousRoute.value) {
    router.back();
  } else {
    router.push('/');
  }
};
</script>

<template>
  <div>
    <h2>Route History</h2>
    <ul>
      <li v-for="(route, index) in routeHistory" :key="index">
        {{ route }}
      </li>
    </ul>

    <button @click="goBack" v-if="previousRoute">
      Go Back to {{ previousRoute }}
    </button>
    <div v-else>No previous route available</div>
  </div>
</template>

<style scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #111;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 20px;
  box-sizing: border-box;
}

ul {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

button {
  padding: 10px 20px;
  background: #444;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}

button:hover {
  background: #555;
}
</style>