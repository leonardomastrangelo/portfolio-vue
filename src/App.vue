<template>
  <!-- header -->
  <HeaderComponent />
  <!-- router -->
  <router-view></router-view>
</template>

<script>
import axios from "axios";
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
  methods: {
    getAllProjects() {
      axios.get(store.apiBaseUrl + 'projects').then((res) => {
        store.projects = res.data.projects;
      })
    },
    getAllTechnologies() {
      axios.get(store.apiBaseUrl + 'technologies').then((res) => {
        store.technologies = res.data.technologies;
      })
    }
  },
  created() {
    this.getAllProjects()
    this.getAllTechnologies()
  }

}
</script>

<style lang="scss" scoped>
@use "./assets/styles/partials/variables" as *;
</style>