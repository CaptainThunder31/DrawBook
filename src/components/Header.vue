<script setup>
  const props = defineProps(['title']);
  
  const title = props.title;
  
</script>
<template>
  <h1>{{title}}</h1>
</template>