<script setup>
  //app.vue
  import {ref, computed} from 'vue';
  import {useRoute} from 'vue-router'
  import Header from './components/Header.vue'
  import Home from './components/Home.vue'
  import Drawer from './components/Drawer.vue'
  const route = useRoute();
  const toggled = ref(false);
  function handleClick() {
    toggled.value = !toggled.value;
  }
  
  const title = computed(()=>
  route.meta.title || 'RPS Arena'
  )
</script>
<template>
    <Header :title="title" @clicked="handleClick" />
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
  transition: all 0.1s ease;
}

.slide-left-enter-from , 
.slide-left-leave-to , 
.slide-right-enter-from , 
.slide-right-leave-to {
  opacity: 0;
}

/* Fade transition (default) */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>