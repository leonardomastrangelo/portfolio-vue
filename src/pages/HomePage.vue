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
import JumboHomeComponent from '../components/HomeComponents/JumboHomeComponent.vue';
import TechnologiesHomeComponent from '../components/HomeComponents/TechnologiesHomeComponent.vue';
import CarouselProjectsHomeComponent from '../components/HomeComponents/CarouselProjectsHomeComponent.vue';
import QuoteHomeComponent from '../components/HomeComponents/QuoteHomeComponent.vue';
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
../components/HomeComponents/CarouselProjectsHomeComponent.vue../components/HomeComponents/JumboHomeComponent.vue../components/HomeComponents/QuoteHomeComponent.vue../components/HomeComponents/TechnologiesHomeComponent.vue