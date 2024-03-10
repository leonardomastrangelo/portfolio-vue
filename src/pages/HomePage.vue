<template>
  <section id="home">
    <JumboHomeComponent />
    <TechnologiesHomeComponent />
    <CarouselProjectsHomeComponent />
    <QuoteHomeComponent />
    <FooterComponent />
  </section>
</template>

<script>
import JumboHomeComponent from '../components/JumboHomeComponent.vue';
import TechnologiesHomeComponent from '../components/TechnologiesHomeComponent.vue';
import CarouselProjectsHomeComponent from '../components/CarouselProjectsHomeComponent.vue';
import QuoteHomeComponent from '../components/QuoteHomeComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
export default {
  name: 'HomePage',
  components: {
    JumboHomeComponent,
    TechnologiesHomeComponent,
    CarouselProjectsHomeComponent,
    QuoteHomeComponent,
    FooterComponent
  }
}


</script>

<style lang="scss" scoped>
#home {
  background-color: #0F0317;
}
</style>