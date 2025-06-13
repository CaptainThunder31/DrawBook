<script setup>
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const list = [
  { name: "Stats", icon: "octicon:graph-16" },
  { name: "Profile", icon: 'iconamoon:profile-bold' }
]

function goGame() {
  router.replace({ name: 'Game' });
}
</script>

<template>
  <div class="home-container">
    <button v-for="(item, index) in list" :key="index">

      <Icon :icon="item.icon" width="50" height="50" />
            <h3>{{ item.name }}</h3>
    </button>
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
    display:flex;
    align-items:center;
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

