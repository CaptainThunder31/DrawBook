<script setup>
  import {
    ref
  } from 'vue';
  import {
    Icon
  } from '@iconify/vue';
  const emit = defineEmits(['clicked']);
  const props = defineProps({'title': String});
</script>
<template>
  <div>
    <Icon icon="material-symbols:menu-rounded" width="50" height="50" class="nav" @click="emit('clicked')" />
    <p>{{title}}</p>
  </div>
</template>
<style scoped>
  div {
    width: 100vw;
    height: 60px;
    position: fixed;
    background: #f00;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 50px;
    z-index: 1000;
    font-size: 30px;
  }

  .nav {
    position: absolute;
    left: 10px;
  }
</style>