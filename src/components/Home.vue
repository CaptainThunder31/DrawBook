<script setup>
  import {
    Icon
  } from '@iconify/vue';
  const list = [{
    name: "Stats",
    icon: "octicon:graph-16"
  }, {
    name: "Profile",
    icon: 'iconamoon:profile-bold'
  }]
</script>
<template>
  <div>
    <button v-for="(item, index) in list" key="index">
      <h2>{{item.name}}</h2>
      <Icon :icon="item.icon" width="50" height="50" />
    </button>

  </div>
  <button class="start">Start Game</button>
</template>
<style scoped>
  div {
    margin-top: 50px;
    width: 100vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    position: absolute;
  }
  button {
    width: 300px;
    height: 200px;
    background: #111;
    border: 10px solid #f00;
    border-radius: 20px;
    color: #fff;
    font-size: 1.5rem;
    background: linear-gradient( -45deg, black 0%, black 30%,red 30%, red 70%,black 70%, black 100% );
  }

  .start {
    width: 250px;
    height: 70px;
    border-radius: 10px;
    background: #f00;
    position: absolute;
    bottom: 20px;
    left: calc(50% - 125px);
  }
</style>