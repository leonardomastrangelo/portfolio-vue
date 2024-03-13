<template>
  <div id="carousel-home" class="overflow-hidden d-flex flex-column align-items-center">
    <!-- title -->
    <h2 class="my-5" ref="title" :class="{ 'visibleTitle': isVisibleTitle }">
      progetti
    </h2>
    <!-- carousel -->
    <div id="carousel" ref="carousel" :class="{ 'visibleCarousel': isVisibleCarousel }"
      class="container-fluid px-0 position-relative overflow-hidden">
      <div class="glide py-4">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides text-light">
            <li v-for="project in store.projects" class="glide__slide text-light py-5">
              <img class="bg-img" :src="store.imgPath + project.preview" alt="bg" />
              <div class="my-card w-50 mx-auto rounded-4 bg-light my-5">
                <!-- carousel image -->
                <div class="my-card__image position-relative">
                  <img class="w-100 rounded-4" :src="store.imgPath + project.preview" :alt="project.title" />
                  <div class="logo d-none d-lg-block">
                    <img :src="store.imgPath + project.logo" alt="logo">
                  </div>
                </div>
                <!-- card content -->
                <div class="my-card__content rounded-bottom-4 bg-light py-3">
                  <h3 class="my-card__title text-center">
                    {{ project.title }}
                  </h3>
                  <!-- buttons -->
                  <div class="my-card__buttons px-4">
                    <button class="btn rounded-pill">
                      <a :href="project.github" target="_blank">
                        link Github
                        <i class="fa-brands fa-github"></i>
                      </a>
                    </button>
                    <button class="btn rounded-pill">
                      <router-link :to="`/`">
                        dettagli progetto
                        <i class="fa-solid fa-hand-pointer"></i>
                      </router-link>
                    </button>
                  </div>
                </div>
              </div>
            </li>

          </ul>
        </div>
        <div class="controls" data-glide-el="controls">
          <button class="btn go-left" data-glide-dir="<">
            <img src="/src/assets/img/indicator.png" alt="go-left">
          </button>
          <button class="btn go-right" data-glide-dir=">">
            <img src="/src/assets/img/indicator.png" alt="go-left">
          </button>
        </div>
      </div>
    </div>
    <!-- call to action -->
    <div>
      <router-link :to="`/projects`" class="butt">
        Vedi tutti i progetti
      </router-link>
    </div>
  </div>
</template>

<script>
import { store } from '@/store';
import Glide from '@glidejs/glide';
import VanillaTilt from 'vanilla-tilt';
export default {
  name: 'CarouselProjectsHomeComponent',
  data() {
    return {
      store,
      activeIndex: 0,
      isVisibleTitle: false,
      isVisibleCarousel: false,
    }
  },
  methods: {
    initGlideJs() {
      this.$nextTick(() => {
        const glide = new Glide('.glide', {
          type: 'carousel',
          perView: 1,
        });

        glide.mount();
      })
    },
    setupObserverTitle() {
      const title = this.$refs.title;
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.isVisibleTitle = true;
          } else {
            this.isVisibleTitle = false;
          }
        },
          {
            root: null,
            rootMargin: "0px",
            threshold: 0.6,
          });
      });
      observer.observe(title);
    },
    setupObserverCarousel() {
      const carousel = this.$refs.carousel;
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.isVisibleCarousel = true;
          } else {
            this.isVisibleCarousel = false;
          }
        });
      }, {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      });
      observer.observe(carousel);
    },

    initVanillaTilt() {
      this.$nextTick(() => {
        const cardElements = document.querySelectorAll('.my-card');
        cardElements.forEach(element => {
          VanillaTilt.init(element, {
            max: 4,
            speed: 400,
            glare: true,
            "max-glare": 0.17,
            perspective: 1000,
            transition: false,
            speed: 800,
            easing: "cubic-bezier(.03,.98,.52,.99)"
          });
        });
      });
    }
  },
  mounted() {
    if (store.projects.length > 1) {
      this.initGlideJs();
      this.initVanillaTilt();
    }

    window.addEventListener('load', () => {
      this.initGlideJs();
      this.initVanillaTilt();
    });
    this.setupObserverCarousel();
    this.setupObserverTitle();

  }
}
</script>

<style lang="scss" scoped>
@use '/src/assets/styles/partials/variables' as *;
@import "node_modules/@glidejs/glide/src/assets/sass/glide.core";

#carousel-home {
  padding: 150px 0;
}

#carousel {
  transition: all 1s ease;
  opacity: 0;
  scale: 0.6;
  transform: translateX(-200px);
}

#carousel.visibleCarousel {
  opacity: 1;
  scale: 1;
  transform: translateX(0);
}

h2 {
  background-color: $titles;
  padding: 20px;
  text-transform: uppercase;
  color: $green;
  font-size: 3em;
  box-shadow: inset 0 0 4px 1px #14e956;
  margin: 10px 0;
  border-radius: 15px;
  transition: all 0.5s ease;
  transform: skew(4deg, 8deg);
  opacity: 0;
}

h2.visibleTitle {
  animation: title-animation 1s ease forwards;

  @keyframes title-animation {
    0% {
      transform: skew(4deg, 8deg);
      opacity: 0;
    }

    25% {
      transform: skew(-4deg, -8deg);
      opacity: 0.50;
    }

    50% {
      transform: skew(2deg, 4deg);
      opacity: 0.75;
    }

    75% {
      transform: skew(-2deg, -2deg);
      opacity: 1;
    }

    100% {
      transform: skew(0deg, 0deg);
      opacity: 1;
    }

  }
}

.my-card {
  box-shadow: 0px 0px 3px 5px $green;
  transform-style: preserve-3d;
}

.my-card__image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.609);
  border-radius: 20px;
}

.logo {
  position: absolute;
  left: 10px;
  bottom: 10px;
  width: 200px;
  z-index: 3;
  transform: translateZ(50px);

  img {
    width: 100%;
  }
}

.my-card__title {
  font-size: 2.4rem;
  font-weight: 800;
  text-transform: uppercase;
  color: $green;
  text-shadow: 4px 4px 3px #000000;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}

.bg-img {
  position: absolute;
  width: 100vw;
  top: 0;
  z-index: -1;
  filter: blur(9px);
}

.my-card__buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    font-size: 0.9em;
  }

  .btn:nth-child(1) {
    transition: all 0.2s ease-in-out;
    background-color: #1F2127;

    a {
      color: white;
    }
  }

  .btn:nth-child(1):hover {
    background-color: rgba(0, 128, 0, 0.533);

    a {
      color: #1F2127;
    }

  }

  .btn:nth-child(2) {
    transition: all 0.2s ease-in-out;
    border: 2px solid #1F2127;
    color: black;

    a {
      color: black;
    }
  }

  .btn:nth-child(2):hover {
    background-color: #1F2127;

    a {
      color: white;
    }

    i {
      color: white;
    }
  }

}

.controls {
  img {
    width: 200px;
  }

  .go-left {
    transition: all 0.3s ease-in-out;
    position: absolute;
    left: 0;
    top: 50%;
    transform: rotate(-60deg);
    border: none;
  }

  .go-left:hover {
    transform: rotate(-50deg);
  }

  .go-right {
    transition: all 0.3s ease-in-out;
    position: absolute;
    right: 0;
    top: 50%;
    transform: rotate(60deg);
    border: none;
  }

  .go-right:hover {
    transform: rotate(50deg);
  }
}

.butt {
  display: block;
  background-color: #14e956;
  background-image: linear-gradient(315deg, #14e956, #72f29a);
  border: none;
  border-radius: 7px;
  box-shadow: 9px 7px 32px -11px rgba(20, 233, 86, .74);
  font-size: 2.2rem;
  font-weight: 800;
  outline: none;
  padding: 1rem 3rem;
  margin: 30px 0;
  position: relative;
  text-transform: uppercase;
  transition: all .3s ease-in-out 0s;
  color: black;
  text-decoration: none;
  text-align: center;
}

.butt::after {
  animation: ring 1.5s infinite;
  border: 6px solid #14e956;
  border-radius: 7px;
  content: "";
  height: 30px;
  left: 50%;
  position: absolute;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 30px;
  z-index: 1;
}

.butt:hover {
  transform: translateY(-5px);
  scale: 1.1;
}

.butt:hover.butt::after {
  display: none;
}

@keyframes ring {
  0% {
    height: 30px;
    opacity: 1;
    width: 30px;
  }

  100% {
    height: 120px;
    opacity: 0;
    width: 650px;
  }
}
</style>