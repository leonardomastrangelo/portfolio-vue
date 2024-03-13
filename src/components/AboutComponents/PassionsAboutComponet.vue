<template>
  <section id="passions" v-show="store.passions.length > 0">
    <h1>
      Passioni
    </h1>
    <div class="container-fluid">
      <!-- Coding -->
      <div ref="coding" :class="{ 'visibleCoding': isVisibleCoding }" id="coding"
        class="row flex-column justify-content-center align-items-center">
        <!-- top -->
        <div class="col-11 col-lg-10 col-xl-9 col-xxl-6 mb-5">
          <h2>
            {{ store.passions[0].name }}
          </h2>
          <p>
            {{ store.passions[0].description }}
          </p>
        </div>
        <!-- bottom -->
        <div class="col-11 col-lg-10 col-xl-9 col-xxl-6">
          <swiper :direction="'vertical'" :slidesPerView="1" :spaceBetween="30" :mousewheel="true" :pagination="{
    clickable: true
  }" :loop="true" :effect="'fade'" :modules="modulesCoding">
            <swiper-slide v-for="projectImg in store.passions[0].passion_images">
              <img :src="store.imgPath + projectImg.path" alt="">
            </swiper-slide>

          </swiper>
        </div>
      </div>

      <!-- photography -->
      <div ref="photography" :class="{ 'visiblePhotography': isVisiblePhotography }" id="photography"
        class="row flex-column justify-content-center align-items-center">
        <!-- left -->
        <div class="col-11 col-lg-10 col-xl-9 col-xxl-6 mb-5">
          <h2>
            {{ store.passions[1].name }}
          </h2>
          <p>
            {{ store.passions[1].description }}
          </p>
        </div>
        <!-- right -->
        <div class="col-8 col-lg-7 col-xl-6 col-xxl-6">
          <swiper :effect="'cards'" :grabCursor="true" :rewind="true" :modules="modulesPhotography" class="mySwiper">
            <swiper-slide v-for="projectImg in store.passions[1].passion_images">
              <img :src="store.imgPath + projectImg.path" alt="">
            </swiper-slide>
          </swiper>
        </div>
      </div>

      <!-- food -->
      <div ref="food" :class="{ 'visibleFood': isVisibleFood }" id="food"
        class="row flex-column justify-content-center align-items-center">
        <!-- left -->
        <div class="col-11 col-lg-10 col-xl-9 col-xxl-6 mb-5">
          <h2>
            {{ store.passions[2].name }}
          </h2>
          <p>
            {{ store.passions[2].description }}
          </p>
        </div>
        <!-- right -->
        <div class="col-8 col-lg-7 col-xl-6 col-xxl-6">
          <swiper :effect="'cube'" :grabCursor="true" :cubeEffect="{
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  }" :pagination="true" :modules="modulesFood" class="mySwiper">
            <swiper-slide v-for="projectImg in store.passions[2].passion_images">
              <img :src="store.imgPath + projectImg.path" alt="">
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>

  </section>

</template>
<script>
import { store } from '@/store';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-cube';

// import required modules
import { Mousewheel, Pagination, EffectFade, EffectCards, EffectCube, Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modulesCoding: [Mousewheel, Pagination, EffectFade],
      modulesPhotography: [EffectCards],
      modulesFood: [EffectCube, Pagination]
    };
  },
  data() {
    return {
      store,
      isVisibleCoding: false,
      isVisiblePhotography: false,
      isVisibleFood: false,
    };
  },
  methods: {
    setupObserverCoding() {
      const coding = this.$refs.coding
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isVisibleCoding = true;
          } else {
            this.isVisibleCoding = false;
          }
        })
      },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.2,
        });
      observer.observe(coding);
    },
    setupObserverPhotography() {
      const photography = this.$refs.photography
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isVisiblePhotography = true;
          } else {
            this.isVisiblePhotography = false;
          }
        })
      },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.2,
        });
      observer.observe(photography);
    },
    setupObserverFood() {
      const food = this.$refs.food
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isVisibleFood = true;
          } else {
            this.isVisibleFood = false;
          }
        })
      },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.2,
        });
      observer.observe(food);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.setupObserverCoding();
      this.setupObserverPhotography();
      this.setupObserverFood();
    })

    window.addEventListener('load', () => {
      this.setupObserverCoding();
      this.setupObserverPhotography();
      this.setupObserverFood();
    });

  }
};
</script>
<style lang="scss" scoped>
@use '/src/assets/styles/partials/variables' as *;

#passions {
  background-color: #0F0317;
  overflow: hidden;

  .row {
    padding-top: 200px;
    padding-bottom: 200px;
  }

  h1 {
    font-size: 3.2rem;
    text-align: center;
    font-weight: 800;
    padding: 15px;
    color: blueviolet;
    text-shadow: 5px 5px 0px $green;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: black;
    padding-top: 100px;
    text-transform: uppercase;
  }

  h2 {
    font-size: 2.5rem;
    text-align: center;
    font-weight: 800;
    padding: 15px;
    color: $green;
    text-shadow: 7px 7px 0px blueviolet;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: black;
  }

  p {
    text-align: center;
    color: white;
    font-size: 0.9rem;
  }

  #coding {
    transition: all 1s ease-in;
    opacity: 0;
    transform: translateX(-500px);

    &.visibleCoding {
      opacity: 1;
      transform: translateX(0px);
    }

    .swiper {
      width: 100%;
      height: 200px;
      transform: perspective(900px) rotateY(10deg) rotateX(10deg);
      border-radius: 30px;
      box-shadow: 0 60px 123px -25px hsla(225, 2%, 62%, .42), 0 35px 75px -35px hsla(225, 2%, 62%, .08);
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      border-radius: 30px;
    }

    @media screen and (min-width: 768px) {
      .swiper {
        height: 300px;
      }

    }

    @media screen and (min-width: 992px) {
      .swiper {
        height: 400px;
      }

      .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
      }
    }
  }


  #photography {
    transition: all 1s ease-in;
    opacity: 0;
    transform: translateX(500px);

    &.visiblePhotography {
      opacity: 1;
      transform: translateX(0px);
    }

    .swiper {
      width: 100%;
      height: 600px;
      transform: perspective(900px) rotateY(-10deg) rotateX(10deg);
      box-shadow: 0 60px 123px -25px hsla(225, 2%, 62%, .42), 0 35px 75px -35px hsla(225, 2%, 62%, .08);
      border-radius: 30px;
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 30px;
    }
  }

  #food {
    transition: all 1s ease-in;
    opacity: 0;
    transform: rotate(10deg);

    &.visibleFood {
      opacity: 1;
      transform: rotate(0);
    }

    .swiper {
      width: 100%;
      height: 500px;
      transform: perspective(900px) rotateY(0) rotateX(30deg);
      box-shadow: 0 60px 123px -25px hsla(225, 2%, 62%, .42), 0 35px 75px -35px hsla(225, 2%, 62%, .08);
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;

    }
  }
}
</style>