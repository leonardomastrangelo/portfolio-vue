<template>
  <section id="technologies-home">
    <h2 class="my-5" ref="title" :class="{ 'visibleTitle': isVisibleTitle }">
      tecnologie
    </h2>
    <div ref="techBox" class="container py-5" :class="{ 'visibleTechBox': isVisibleTech }">
      <div class="row justify-content-center">
        <div class="col-6 col-lg-4 col-xl-3" v-for="technology in store.technologies">
          <div ref="tech" class="tech mx-auto d-flex flex-column justify-content-center align-items-center py-4 my-4">
            <i class="pb-3" :class="technology.icon"></i>
            <h3 class="fs-5">{{ technology.name }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { store } from '@/store';
import VanillaTilt from 'vanilla-tilt';
export default {
  name: 'TechnologiesHomeComponent',
  data() {
    return {
      store,
      isVisibleTitle: false,
      isVisibleTech: false,
    }
  },
  methods: {
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
    setupObserverTech() {
      const tech = this.$refs.techBox;
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.isVisibleTech = true;
          } else {
            this.isVisibleTech = false;
          }
        },
          {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
          });
      });
      observer.observe(tech);
    },
    initVanillaTilt() {
      this.$nextTick(() => {
        const techElements = this.$refs.techBox.querySelectorAll('.tech');
        techElements.forEach(element => {
          VanillaTilt.init(element, {
            max: 25,
            speed: 400,
            glare: true,
            "max-glare": 0.07,
            perspective: 1000,
            transition: true,
            speed: 800,
            reset: false,
            easing: "cubic-bezier(.03,.98,.52,.99)"
          });
        });
      });
    }
  },
  mounted() {
    this.setupObserverTitle();
    this.setupObserverTech();
    this.initVanillaTilt();

    window.addEventListener('load', () => {
      this.initVanillaTilt();
    });
  },

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

#technologies-home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 150px 0;

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

  .container {
    transform: translateX(-600px);
    scale: 0.5;
    transition: 1s ease;
  }

  .container.visibleTechBox {
    transform: translateX(0);
    scale: 1;
  }

  .row {
    background-color: #0B8C35;
    border-radius: 20px;
    padding: 0 12px;
  }

  .tech {
    background-color: #031709;
    border-radius: 20px;

    transform-style: preserve-3d;

    i {
      font-size: 4em;
      color: $green;
      transform: translateZ(20px)
    }


    h3 {
      color: white;
      transform: translateZ(20px)
    }
  }
}
</style>