<template>
  <section id="projects">
    <!-- title -->
    <h1 class="fs-3 text-capitalize text-light text-center pb-5">
      tutti i progetti
    </h1>

    <!-- projects -->
    <ProjectsRowComponent />
  </section>
</template>

<script>
import ProjectsRowComponent from "../components/ProjectsComponents/ProjectsRowComponent.vue"
export default {
  name: 'ProjectsPage',
  components: {
    ProjectsRowComponent
  },
};

</script>

<style lang="scss" scoped>
@use '/src/assets/styles/partials/variables' as *;

#projects {
  background-color: #0F0317;
  padding-top: 300px;
  // padding-left: 100px;
  // padding-right: 100px;

  h1 {
    font-weight: 800;
  }

  h1::before {
    content: '{';
    color: $green;
  }

  h1::after {
    content: '}';
    color: $green;
  }
}
</style>