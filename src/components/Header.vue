<script setup>
  const props = defineProps(['title']);

  const title = props.title;

</script>
<template>
  <div>
    <h1>{{title}}</h1>
  </div>
</template>
<style scoped>
  div {
    width: 100vh;
    height: 70px;
    position: fixed;
    background: #f00;
    color: #fff;
    box-shadow: 0 0 100px #f00;
  }

</style>