<template>
  <section id="jumbo-home" @mousemove="parallax">
    <!-- me -->
    <div ref="me" class="me" data-value="6" :class="{ 'visibleMe': isVisibleMe }">
      <img src="/src/assets/img/me.png" alt="me">
      <img id="banner" src="/src/assets/img/banner.jpg" alt="banner">
    </div>

    <div class="container-fluid inner px-5">
      <!-- title -->
      <h1 class="text-center display-1 text-light text-uppercase py-5">Benvenuto!</h1>
      <!-- description -->
      <p ref="description" class="fs-5" :class="{ 'visibleDescription': isVisibleDescription }">
        Mi chiamo <span class="highlighted">Leo</span> Mastrangelo e sono un Full-Stack <span class="highlighted">Web
          Developer</span> in cerca di
        continue <span class="highlighted">sfide</span> per accrescere il
        proprio bagaglio di <span class="highlighted">conoscenze</span> tecniche
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "JumboHomeComponent",
  data() {
    return {
      isVisibleMe: false,
      isVisibleDescription: false,
    };
  },
  methods: {
    parallax(e) {
      const me = this.$refs.me
      const moving_value = me.getAttribute("data-value")
      let x = (e.clientX * moving_value) / 1500;
      let y = (e.clientY * moving_value) / 1500;
      me.style.transform = `translate(${x}px, ${y}px)`;
    },
    setupObserverMe() {
      const me = this.$refs.me
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.isVisibleMe = true;
            } else {
              this.isVisibleMe = false;
            }
          });
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.5,
        }
      );
      observer.observe(me);
    },
    setupObserverDescription() {
      const description = this.$refs.description
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.isVisibleDescription = true;
            } else {
              this.isVisibleDescription = false;
            }
          });
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.1,
        }
      );
      observer.observe(description);
    }
  },
  mounted() {
    this.setupObserverMe();
    this.setupObserverDescription();
  }

}
</script>

<style lang="scss" scoped>
@use '/src/assets/styles/partials/variables' as *;

#jumbo-home {
  width: 100%;
  height: 800px;
  position: relative;
  background-image: url('/src/assets/img/landscape.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 2;
  }

  .me {
    position: absolute;
    bottom: 0;
    right: 50px;
    width: 310px;
    z-index: 3;
    opacity: 0;
    transition: opacity 1s ease;

    img {
      width: 100%;
    }

    #banner {
      position: absolute;
      right: 90%;
      bottom: 0;
      border-radius: 20px;
    }
  }

  .me.visibleMe {
    opacity: 1;
  }

  .inner {
    position: relative;
    z-index: 3;

    h1 {
      font-weight: 800;
    }

    p {
      color: rgba(230, 217, 217, 0.976);
      transform: scale(0.2);
      transition: transform 0.5s ease;
      width: 50%;
    }

    p.visibleDescription {
      transform: scale(1);
    }

    .highlighted {
      color: $green;
      font-weight: 700;
      font-size: 2.2em;
      text-shadow: 3px 3px 4px rgba(31, 70, 5, 0.847);
    }

    @media screen and (max-width: 992px) {
      p {
        background: rgba(0, 0, 0, 0.51);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(2.8px);
        -webkit-backdrop-filter: blur(2.8px);
        padding: 10px;
        border-radius: 20px;
        width: 100%;
        text-align: center;
      }
    }

  }


}
</style>