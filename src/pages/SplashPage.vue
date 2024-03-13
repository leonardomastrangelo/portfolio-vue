<template>
  <section id="splash">
    <!------------ Starry Sky------------------------>
    <div class="stars"></div>
    <div class="twinkling"></div>
    <!------------ End - Starry Sky------------------>
    <div class="wrapper">
      <!------------ Parallax Scene-------------------->
      <ul ref="scene" id="scene" class="scene">
        <li class="layer" data-depth="0.00"></li>
        <li class="layer" data-depth="0.30">
          <router-link :to="'/home'">
            vai alla home
          </router-link>
        </li>
        <li class="layer" data-depth="0.60"><a href="#1" class="moveUp">P</a></li>
        <li class="layer" data-depth="0.90"><a href="#2" class="moveDown">O</a></li>
        <li class="layer" data-depth="0.70"><a href="#3" class="moveUp">R</a></li>
        <li class="layer" data-depth="0.20"><a href="#4" class="moveDown">T</a></li>
        <li class="layer" data-depth="0.30"><a href="#5" class="moveUp">F</a></li>
        <li class="layer" data-depth="0.20"><a href="#6" class="moveDown">O</a></li>
        <li class="layer" data-depth="0.60"><a href="#7" class="moveUp">L</a></li>
        <li class="layer" data-depth="0.90"><a href="#8" class="moveDown">I</a></li>
        <li class="layer" data-depth="0.70"><a href="#9" class="moveUp">O</a></li>
      </ul>
      <!------------ End - Parallax Scene------------->

    </div>

    <!-- me -->
    <div class="me d-flex align-items-end">
      <img src="../assets/img/me.png" alt="me" class="me-img pe-3">
      <div>
        <h1 class="fs-2">
          Leo Mastrangelo
        </h1>
        <h2 class="fs-5">
          Web Developer
        </h2>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'SplashPage',
  data() {
    return {
    }
  },
  mounted() {
    this.$nextTick(() => {
      new Parallax(this.$refs.scene);
    })
  }
}
</script>

<style lang="scss" scoped>
@use '/src/assets/styles/partials/variables' as *;

/*================================================================
Default Styles
================================================================*/
#splash {
  position: relative;
  overflow: hidden;

  .me {
    position: absolute;
    bottom: -100%;
    left: 0;
    width: 220px;
    z-index: 1;
    animation: pop 2s ease-in forwards;

    @keyframes pop {
      0% {
        bottom: -100%;
      }

      50% {
        bottom: 0;
      }

      75% {
        bottom: 30px;
      }

      100% {
        bottom: 0;
      }
    }

    img {
      width: 100%;
    }

    h1,
    h2 {
      display: inline-block;
      background-color: $titles;
      padding: 20px;
      text-transform: uppercase;
      color: $green;
      box-shadow: inset 0 0 4px 1px #14e956;
      margin: 10px 0;
      border-radius: 15px;
      transition: all 0.5s ease;
      opacity: 1;
    }
  }
}

.wrapper {
  width: 100%;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  position: relative;
  z-index: 2;
  scale: 0.8;
  opacity: 0;
  animation: bloop 1s ease-in forwards;

  @keyframes bloop {
    0% {
      scale: 0.4;
      opacity: 0;
    }

    100% {
      scale: 1;
      opacity: 1;
    }
  }
}

.scene {
  padding: 0;
  margin: 0;
}

/*================================================================
Starry Sky
Trick created by Andrey https://www.script-tutorials.com/night-sky-with-twinkling-stars/
================================================================*/
@keyframes move-twink-back {
  from {
    background-position: 0 0;
  }

  to {
    background-position: -10000px 5000px;
  }
}

@-webkit-keyframes move-twink-back {
  from {
    background-position: 0 0;
  }

  to {
    background-position: -10000px 5000px;
  }
}

@-moz-keyframes move-twink-back {
  from {
    background-position: 0 0;
  }

  to {
    background-position: -10000px 5000px;
  }
}

@-ms-keyframes move-twink-back {
  from {
    background-position: 0 0;
  }

  to {
    background-position: -10000px 5000px;
  }
}

.stars,
.twinkling {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
}

.stars {
  background: #000 url(https://www.land-of-web.com/wp-content/uploads/2016/08/stars.png) repeat top center;
  z-index: 0;
}

.twinkling {
  background: transparent url(https://www.land-of-web.com/wp-content/uploads/2016/08/twinkling.png) repeat top center;
  z-index: 1;
  -moz-animation: move-twink-back 200s linear infinite;
  -ms-animation: move-twink-back 200s linear infinite;
  -o-animation: move-twink-back 200s linear infinite;
  -webkit-animation: move-twink-back 200s linear infinite;
  animation: move-twink-back 200s linear infinite;
}

/*================================================================
Animation - Move Up and Move Down Letters
================================================================*/
/*================================================================
Move Up
================================================================*/
@keyframes moveUp {
  0% {
    transform: translate3d(0px, 0px, 0px);
    animation-timing-function: ease-in;
  }

  50% {
    transform: translate3d(0px, 10px, 0px);
    animation-timing-function: ease-out;
  }

  100% {
    transform: translate3d(0px, 0px, 0px);
    animation-timing-function: ease-in;
  }
}

@-webkit-keyframes moveUp {
  0% {
    transform: translate3d(0px, 0px, 0px);
    animation-timing-function: ease-in;
  }

  50% {
    transform: translate3d(0px, 10px, 0px);
    animation-timing-function: ease-out;
  }

  100% {
    transform: translate3d(0px, 0px, 0px);
    animation-timing-function: ease-in;
  }
}

@-moz-keyframes moveUp {
  0% {
    transform: translate3d(0px, 0px, 0px);
    animation-timing-function: ease-in;
  }

  50% {
    transform: translate3d(0px, 10px, 0px);
    animation-timing-function: ease-out;
  }

  100% {
    transform: translate3d(0px, 0px, 0px);
    animation-timing-function: ease-in;
  }
}

@-ms-keyframes moveUp {
  0% {
    transform: translate3d(0px, 0px, 0px);
    animation-timing-function: ease-in;
  }

  50% {
    transform: translate3d(0px, 10px, 0px);
    animation-timing-function: ease-out;
  }

  100% {
    transform: translate3d(0px, 0px, 0px);
    animation-timing-function: ease-in;
  }
}

.moveUp {
  animation: moveUp 2s infinite;
}

/*================================================================
Move Down
================================================================*/
@keyframes moveDown {
  0% {
    transform: translate3d(0px, 0px, 0px);
    animation-timing-function: ease-in;
  }

  50% {
    transform: translate3d(0px, -10px, 0px);
    animation-timing-function: ease-out;
  }

  100% {
    transform: translate3d(0px, 0px, 0px);
    animation-timing-function: ease-in;
  }
}

@-webkit-keyframes moveDown {
  0% {
    transform: translate3d(0px, 0px, 0px);
    animation-timing-function: ease-in;
  }

  50% {
    transform: translate3d(0px, -10px, 0px);
    animation-timing-function: ease-out;
  }

  100% {
    transform: translate3d(0px, 0px, 0px);
    animation-timing-function: ease-in;
  }
}

@-moz-keyframes moveDown {
  0% {
    transform: translate3d(0px, 0px, 0px);
    animation-timing-function: ease-in;
  }

  50% {
    transform: translate3d(0px, -10px, 0px);
    animation-timing-function: ease-out;
  }

  100% {
    transform: translate3d(0px, 0px, 0px);
    animation-timing-function: ease-in;
  }
}

@-ms-keyframes moveDown {
  0% {
    transform: translate3d(0px, 0px, 0px);
    animation-timing-function: ease-in;
  }

  50% {
    transform: translate3d(0px, -10px, 0px);
    animation-timing-function: ease-out;
  }

  100% {
    transform: translate3d(0px, 0px, 0px);
    animation-timing-function: ease-in;
  }
}

.moveDown {
  animation: moveDown 2s infinite;
}

/*================================================================
PARALLAX
================================================================*/
ul#scene {
  list-style-type: none;
}

.layer {
  display: block;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  position: absolute;
}

li.layer a {
  color: blueviolet;
  text-decoration: none;
  text-shadow: 3px 3px 3px green;
  display: block;
}

li.layer:nth-child(1) {}

/*1 item*/

/*-----Logotype----------------*/
li.layer:nth-child(2) a {
  text-transform: uppercase;
  font-size: 1.5vw;
  color: green;
  text-shadow: 2px 2px 2px blueviolet;
  padding: 7px;
  border: 2px solid green;
  border-radius: 5px;
  box-shadow: 2px 2px 2px blueviolet;
  position: absolute;
  top: 40vh;
  left: 40vw;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
}

li.layer:nth-child(2) a:hover {
  font-size: 1.7vw;
}

/*-----P----------------------*/
li.layer:nth-child(3) a {
  font-size: 5vw;
  position: absolute;
  top: 15vh;
  left: 15vw;
}

/*-----O---------------------*/
li.layer:nth-child(4) a {
  font-size: 8vw;
  position: absolute;
  top: 40vh;
  left: 22vw;
}

/*-----R---------------------*/
li.layer:nth-child(5) a {
  font-size: 6vw;
  position: absolute;
  top: 70vh;
  left: 35vw;
}

/*-----T---------------------*/
li.layer:nth-child(6) a {
  font-size: 3.5vw;
  position: absolute;
  top: 60vh;
  left: 47vw;
}

/*-----F---------------------*/
li.layer:nth-child(7) a {
  font-size: 3.5vw;
  position: absolute;
  top: 18vh;
  left: 40vw;
}

/*-----O---------------------*/
li.layer:nth-child(8) a {
  font-size: 3.5vw;
  position: absolute;
  top: 18vh;
  left: 55vw;
}

/*-----L---------------------*/
li.layer:nth-child(9) a {
  font-size: 5vw;
  position: absolute;
  top: 15vh;
  right: 20vw;
}

/*-----I---------------------*/
li.layer:nth-child(10) a {
  font-size: 6vw;
  position: absolute;
  top: 35vh;
  right: 30vw;
}

/*-----O---------------------*/
li.layer:nth-child(11) a {
  font-size: 6.5vw;
  position: absolute;
  top: 65vh;
  right: 37vw;
}
</style>