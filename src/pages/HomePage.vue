<template>
  <section id="home">
    <JumboHomeComponent />
    <TechnologiesHomeComponent />
  </section>
</template>

<script>
import JumboHomeComponent from '../components/JumboHomeComponent.vue';
import TechnologiesHomeComponent from '../components/TechnologiesHomeComponent.vue'
export default {
  name: 'HomePage',
  components: {
    JumboHomeComponent,
    TechnologiesHomeComponent
  }
}


</script>

<style lang="scss" scoped>
#home {
  background-color: #0F0317;
}
</style>