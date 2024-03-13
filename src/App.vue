<template>
  <!-- header -->
  <HeaderComponent v-if="currentRoute" />
  <!-- router -->
  <router-view></router-view>
  <!-- footer -->
  <FooterComponent v-if="currentRoute" />
</template>

<script>
import axios from "axios";
import { store } from "./store";
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: 'App',
  data() {
    return {
      store,
    }
  },
  components: {
    HeaderComponent,
    FooterComponent
  },
  methods: {
    getAllProjects() {
      axios.get(store.apiBaseUrl + 'projects').then((res) => {
        store.projects = res.data.projects;
        console.log(store.projects);
      });
    },
    getAllTechnologies() {
      axios.get(store.apiBaseUrl + 'technologies').then((res) => {
        store.technologies = res.data.technologies;
        console.log(store.technologies);
      });
    },
    getAllPassions() {
      axios.get(store.apiBaseUrl + 'passions').then((res) => {
        store.passions = res.data.passions;
        console.log(store.passions);
      });
    }
  },
  computed: {
    currentRoute() {
      return this.$route.path !== '/';
    }
  },
  created() {
    this.getAllProjects();
    this.getAllTechnologies();
    this.getAllPassions();
  }
}
</script>

<style lang="scss" scoped>
@use "./assets/styles/partials/variables" as *;
</style>
