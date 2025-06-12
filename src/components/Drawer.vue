<script setup>
  import {
    Icon
  } from '@iconify/vue';
  defineProps(['toggled']);
  const emit = defineEmits(['clicked']);
</script>

<template>
  <div v-if="toggled" class="drawer">
    <Icon icon="ic:round-close" width="40" height="40" class="close-icon" @click="emit('clicked')" />
  </div>
</template>

<style scoped>
  .drawer {
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100vh;
    background: #111;
    box-shadow: 0 0 15px rgba(0,0,0);
    z-index: 1001;
    color: #fff;
    border: 15px solid #f00;
  }

  .close-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
</style>