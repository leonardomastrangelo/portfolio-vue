<template>
  <section id="home">
    <JumboHomeComponent />
    <TechnologiesHomeComponent />
    <CarouselProjectsHomeComponent />
  </section>
</template>

<script>
import JumboHomeComponent from '../components/JumboHomeComponent.vue';
import TechnologiesHomeComponent from '../components/TechnologiesHomeComponent.vue';
import CarouselProjectsHomeComponent from '../components/CarouselProjectsHomeComponent.vue';
export default {
  name: 'HomePage',
  components: {
    JumboHomeComponent,
    TechnologiesHomeComponent,
    CarouselProjectsHomeComponent
  }
}


</script>

<style lang="scss" scoped>
#home {
  background-color: #0F0317;
}
</style>