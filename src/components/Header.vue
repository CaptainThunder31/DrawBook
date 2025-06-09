<script setup>
  import {
    Icon
  } from '@iconify/vue';

  const title = 'RPS Game';

</script>
<template>
  <div>
    <Icon icon="material-symbols:menu-rounded" width="50" height="50" class="nav" />
    <h1>{{title}}</h1>
  </div>
</template>
<style scoped>
  div {
    width: 100vw;
    height: 70px;
    position: fixed;
    background: #f00;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 50px;
  }

  .nav {
    position: absolute;
    left: 10px;
  }
</style>