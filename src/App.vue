<script setup>
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
  <Home />
  <Drawer :toggled="toggled" @clicked="handleClick" />
</template>