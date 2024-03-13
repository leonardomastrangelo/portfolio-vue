<template>
  <section id="jumbo-about">
    <h1 class="display-4 text-center">
      Who am <br> I ?
    </h1>
  </section>
</template>

<script>
export default {
  name: 'JumboAboutComponent',
}
</script>

<style lang="scss" scoped>
@use '/src/assets/styles/partials/variables' as *;

#jumbo-about {
  height: 75vh;
  background-image: url('/src/assets/img/giphy\ \(1\).gif');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  position: relative;

  h1 {
    text-align: center;
    font-weight: 800;
    padding: 15px;
    color: $green;
    text-shadow: 7px 7px 0px blueviolet;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: black;
    position: sticky;
    top: 0;
  }
}
</style>