<script setup>
  import {
    routeSet
  } from '../router/routeSet.js';
  import {
    ref,
    computed,
    onMounted,
    onUnmounted
  } from 'vue';
  import {
    useRouter
  } from 'vue-router';

  const router = useRouter();

  // Handle back button press
  const handleBackButton = () => {
    if (routeSet.get().length <= 1) {
      // If no history left, prevent exiting app
      // You might want to show a confirmation dialog here
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
  const goGame = () => {
    router.push('/game');
  };
  const list = [{
    name: "Stats",
    icon: "octicon:graph-16"
  },
    {
      name: "Profile",
      icon: 'iconamoon:profile-bold'
    }]
</script>

<template>
  <div class="home-container">
    <button v-for="(item, index) in list" :key="index">

      <Icon :icon="item.icon" width="50" height="50" />
      <h3>{{ item.name }}</h3>
    </button>
    <ul style="color:#fff;">
      <li v-for="(route, index) in routeHistory" :key="index">
        {{ route }}
      </li>
    </ul>
    <button class="start" @click="goGame">Start Game</button>
  </div>
</template>

<style scoped>
  div {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    gap: 50px;
  }
  button {
    width: 250px;
    height: 150px;
    background: #111;
    border: 10px solid #f00;
    border-radius: 20px;
    color: #fff;
    font-size: 1.5rem;
    background: linear-gradient( -45deg, black 0%, black 30%,red 30%, red 70%,black 70%, black 100% );
    transition: background 1s;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .start {
    width: 250px;
    height: 70px;
    border-radius: 10px;
    background: #f00;
    position: absolute;
    bottom: 10px;
    left: calc(50% - 125px);
  }
</style>