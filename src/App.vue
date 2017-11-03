<template>
  <v-app id="app" dark>
    <main>
      <v-content>
        <router-view>
          <v-container fluid fill-height>
            <v-layout justify-center align-center></v-layout>
          </v-container>
        </router-view>
      </v-content>
    </main>
  </v-app>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
  @require './stylus/main'
</style>

