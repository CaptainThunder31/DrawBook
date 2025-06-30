<script setup>
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router'
import Header from './components/Header.vue'
import Drawer from './components/Drawer.vue'

const route = useRoute();
const toggled = ref(false);

// Debugging - log route meta changes
watch(route, (newRoute) => {
  console.log('Route changed. Meta:', newRoute.meta);
});

function handleClick() {
  toggled.value = !toggled.value;
}

const title = computed(() => route.meta.title || 'RPS Arena');
const showHeader = computed(() => route.meta.showHeader !== false);
const showDrawer = computed(() => route.meta.showDrawer !== false);
</script>

<template>
  <Header v-if="showHeader" :title="title" @clicked="handleClick" />
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'fade'" mode="out-in">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
  <Drawer v-if="showDrawer" :toggled="toggled" @clicked="handleClick" />
</template>

<style>
/* Your transition styles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>