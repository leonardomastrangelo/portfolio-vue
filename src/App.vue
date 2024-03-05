<template>
  <!-- header -->
  <HeaderComponent />
  <!-- router -->
  <router-view></router-view>
</template>

<script>
import { store } from "./store";
import HeaderComponent from './components/HeaderComponent.vue'
export default {
  name: 'App',
  data() {
    return {
      store
    }
  },
  components: {
    HeaderComponent
  },
}
</script>

<style lang="scss" scoped>
@use "./assets/styles/partials/variables" as *;
</style>