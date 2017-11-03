<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
  @require './stylus/main'
</style>

<style>

.app {
  text-align: center;
}

</style>
