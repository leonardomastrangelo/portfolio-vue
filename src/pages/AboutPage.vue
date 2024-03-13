<template>
  <section id="about">
    <JumboAboutComponent />
    <PassionsAboutComponent />
  </section>
</template>

<script>
import { store } from '@/store';
import JumboAboutComponent from '../components/AboutComponents/JumboAboutComponent.vue';
import PassionsAboutComponent from '../components/AboutComponents/PassionsAboutComponet.vue';
export default {
  name: 'AboutPage',
  components: {
    JumboAboutComponent,
    PassionsAboutComponent,
  },
  data() {
    return {
      store: store,
    }
  }

}
</script>

<style lang="scss" scoped></style>