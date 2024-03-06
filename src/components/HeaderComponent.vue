<template>
  <!-- COMPRESSED NAV -->
  <nav ref="compressedNav" id="compressed-nav" class="py-3">
    <div class="container-fluid d-flex justify-content-between align-items-center">
      <!-- logo -->
      <div class="ps-5">
        <i class="fa-solid fa-dice-d20 fs-1"></i>
      </div>
      <!-- hamburger -->
      <button @click="showExpandedNav" id="hamburger" class="pe-5 d-flex align-items-end flex-column btn border-0">
        <span class="first"></span>
        <span class="second"></span>
        <span class="third"></span>
      </button>
    </div>
  </nav>

  <!-- EXPANDED NAV -->
  <nav ref="expandedNav" id="expanded-nav" class="d-none container-fluid">
    <div class="row h-100">

      <!-- left : links -->
      <div class="col-12 col-lg-6 order-2 order-lg-1 p-0">
        <ul class="left-links d-flex h-100">
          <li class="col-3 d-flex align-items-center justify-content-center" v-for="link in links">
            <a class="d-flex align-items-center" target="_blank" :href="link.url">
              <i class="pe-4" :class="link.icon"></i>
              {{ link.name }}
            </a>
          </li>
        </ul>
      </div>

      <!-- right : router-links -->
      <div
        class="col-12 col-lg-6 order-1 order-lg-2 d-flex justify-content-center flex-column position-relative pe-5 h-100">
        <!-- close -->
        <button @click="showCompressedNav" class="x btn border-0">
          <i class="fa-solid fa-xmark"></i>
        </button>

        <!-- pages -->
        <ul class="right-links d-flex flex-column align-items-end pt-5 mt-5">
          <li v-for="link in routerLinks">
            <div class="thumb" exact :class="{ 'active': $route.path === link.url }">
              <i class="fa-solid fa-hand-point-right"></i>
            </div>
            <router-link class="display-1" to="/">
              {{ link.name }}
            </router-link>
          </li>

        </ul>

      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      links: [
        {
          name: "Github",
          url: "https://github.com/leonardomastrangelo",
          icon: "fa-brands fa-github",
        },
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/in/leonardo-mastrangelo-b629282b1/",
          icon: "fa-brands fa-linkedin",
        },
        {
          name: "Email",
          url: "/",
          icon: "fa-solid fa-envelope",
        },
        {
          name: "Call",
          url: "/",
          icon: "fa-solid fa-phone",
        }
      ],
      routerLinks: [
        {
          name: "Home",
          url: "/",
        },
        {
          name: "About",
          url: "/about",
        },
        {
          name: "Projects",
          url: "/projects",
        },
        {
          name: "Contact",
          url: "/contact",
        }
      ]
    }
  },
  methods: {
    showExpandedNav() {
      this.$refs.compressedNav.classList.add("d-none");
      this.$refs.expandedNav.classList.remove("d-none");
    },
    showCompressedNav() {
      this.$refs.expandedNav.classList.add("d-none");
      this.$refs.compressedNav.classList.remove("d-none");
    }
  }

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

#compressed-nav {
  background-color: $green;

  .first,
  .second,
  .third {
    width: 60px;
    height: 8px;
    border-radius: 4px;
    background-color: $black;
    margin: 3px 0;
    transition: all 0.3s ease-in-out;
  }

  .second {
    width: 45px;
  }

  .third {
    width: 35px;
  }

  #hamburger:hover .second {
    margin: 5px 0;
  }

}

#expanded-nav {
  height: 100%;
  background-color: $black;

  .left-links {
    list-style: none;
    padding: 0;
    margin: 0;

    a {
      text-decoration: none;
      transform: rotate(270deg);
      font-size: 4em;
      font-weight: 700;
      color: white;

      i {
        opacity: 0.4;
      }
    }

    li:nth-child(1) {
      background-color: $github;
      animation: zoom 0.3s ease forwards;
    }

    li:nth-child(2) {
      background-color: $linkedin;
      animation: zoom 0.5s ease forwards;
    }

    li:nth-child(3) {
      background-color: $email;
      animation: zoom 0.7s ease forwards;
    }

    li:nth-child(4) {
      background-color: $call;
      animation: zoom 0.9s ease forwards;
    }

    li {
      height: 650px;
      opacity: 1;
      transform: translateZ(0);
      transition: opacity 0.5s;
    }

    @keyframes zoom {
      0% {
        opacity: 0;
        transform: scale3d(.3, .3, .3);
      }

      50% {
        opacity: 1;
      }
    }
  }

  .x {
    position: absolute;
    top: 10px;
    right: 35px;

    .fa-xmark {
      background-color: $green;
      font-size: 60px;
      padding: 10px 20px;
      margin: 15px 0;
      border-radius: 50%;

    }
  }

  .right-links {
    list-style: none;
    padding: 0;

    li {
      display: flex;
      align-items: center;

      a {
        font-weight: 700;
        text-decoration: none;
        color: $green;
      }
    }

    li:nth-child(1) {
      padding-top: 50px;
    }

    .thumb {
      font-size: 4em;
      padding-right: 20px;
      color: $green;
      opacity: 0;
    }

    .active {
      opacity: 1;
    }

    li:hover .thumb {
      opacity: 1;
    }
  }
}

@media screen and (min-width: 992px) {
  #expanded-nav {
    height: 80vh;

    .left-links {
      li {
        height: 100%;
      }
    }
  }
}
</style>