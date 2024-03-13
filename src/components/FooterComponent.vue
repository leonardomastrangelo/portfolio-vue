<template>
  <footer>
    <!-- Title -->
    <h3>Contattami!</h3>

    <!-- Links -->
    <div class="container-fluid px-0">
      <ul class="row">
        <li v-for="link in links" class="col-12 col-lg-6 col-xxl-3 py-5 position-relative">
          <a :href="link.url" class="d-flex align-items-center" target="_blank">
            <span class="pe-4">{{ link.name }}</span>
            <i :class="link.icon"></i>
          </a>
        </li>
        <li class="col-12 col-lg-6 col-xxl-3 py-5 position-relative">
          <a href="" download="Leonard-Mastrangelo-CV.pdf" class="d-flex align-items-center" target="_blank">
            <span class="pe-4">CV</span>
            <i class="fa-solid fa-download"></i>
          </a>
        </li>
      </ul>
      <div id="mail" class="text-center py-3">
        <a class="text-decoration-none text-light" href="mailto:leo.mastrangelo.st@gmail.com">
          <span>mandami un'email</span>
          <i class="fas fa-envelope"></i>
        </a>
      </div>
    </div>

    <!-- thanking -->
    <div id="thanking">
      Realizzato attraverso VueJs con <i class="fa-solid fa-heart fa-bounce"></i> © Copyright 2024. Tutti i diritti sono
      riservati.
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
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
          name: "Instagram",
          url: "https://www.instagram.com/_asrael.__._/",
          icon: "fa-brands fa-instagram",
        },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

footer {
  padding-top: 150px;
  overflow: hidden;
  background-color: #0F0317;

  h3 {
    text-align: center;
    -webkit-text-stroke: 2px #000;
    -webkit-text-fill-color: #14e956;
    color: #14e956;
    font-size: 3rem;
    font-weight: 900;
    margin: 0;
    margin-bottom: 80px;
    opacity: .9;
    text-shadow: 3px 3px 0 #14e956, -1px -1px 0 #14e956, 1px -1px 0 #14e956, -1px 1px 0 #14e956, 1px 1px 0 #14e956;
    text-transform: uppercase;
    transform: rotate(4deg);
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    a {
      position: relative;
      z-index: 4;
      text-decoration: none;
      color: white;
      font-size: 3.5rem;
      font-weight: 600;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      transition: all 0.3s ease-in-out;

      &:hover {
        scale: 0.9;
      }

      i {
        opacity: 0.4;
        font-size: 5rem;
      }
    }

    li:nth-child(1) {
      background-color: $github;
    }

    li:nth-child(2) {
      background-color: $linkedin;
    }

    li:nth-child(3) {
      background-color: #ca37bcbe;
    }

    li:nth-child(4) {
      background-color: $call;
    }

    li:hover::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
      z-index: 2;
    }
  }

  #mail {
    position: relative;
    background-color: #14BA45;

    a {
      position: relative;
      z-index: 4;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2rem;
      font-weight: 600;
      text-transform: uppercase;
      transition: all 0.3s ease-in-out;

      &:hover {
        scale: 0.9;
      }

      i {
        padding-left: 50px;
        font-size: 3.8rem;
      }

    }
  }

  #mail:hover::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    z-index: 2;
  }

  #thanking {
    text-align: center;
    background-color: #1F2129;
    color: $green;
    font-size: 1.1rem;
    padding: 40px 0;
  }
}
</style>