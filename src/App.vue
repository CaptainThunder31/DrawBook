<script setup>
  //app.vue
  import {
    ref
  } from 'vue';
  import Header from './components/Header.vue'
  import Home from './components/Home.vue'
  import Drawer from './components/Drawer.vue'
  const toggled = ref(false);
  function handleClick() {
    toggled.value = !toggled.value;
  }
</script>
<template>
    <Header @clicked="handleClick" />
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'fade'" mode="out-in">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
    <Drawer :toggled="toggled" @clicked="handleClick" />
</template>

<style>
/* Slide transitions */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease;
}

.slide-left-enter-from {
  transform: translateX(100%);
}
.slide-left-leave-to {
  transform: translateX(-100%);
}

.slide-right-enter-from {
  transform: translateX(-100%);
}
.slide-right-leave-to {
  transform: translateX(100%);
}

/* Fade transition (default) */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>