<template>
  <div id="app">
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import {RouterView} from 'vue-router'
</script>

<style lang="less" scoped>
#app{
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
</style>