<template>
  <div class="container-fluid overflow-hidden">
    <div v-for="project in store.projects" class="row">
      <!-- card -->
      <div class="col-12 col-xxl-6 d-flex justify-content-center align-items-center">
        <div class="img-container">
          <img :src="store.imgPath + project.preview" :alt="project.title">
        </div>
      </div>
      <!-- info -->
      <div class="col-12 col-xxl-6">
        <div class="info-container">
          <h2>
            {{ project.title }}
          </h2>
          <p class="text-light text-center">
            {{ project.description }}
          </p>
          <!-- type -->
          <h3 class="text-center">
            {{ project.type }}
          </h3>
          <!-- technologies -->
          <ul>
            <li v-for="technology in project.technologies">
              <i :class="technology.icon"></i>
              <h5>
                {{ technology.name }}
              </h5>
            </li>
          </ul>
          <!-- status & teamwork -->
          <div class="w-100 d-flex justify-content-between status-team">
            <div class="d-flex align-items-center">
              <h4 class="me-4">
                status
              </h4>
              <span class="status">
                {{ getStatus(project.status) }}
              </span>
            </div>
            <div class="d-flex align-items-center">
              <span class="team">
                {{ getTeam(project.team) }}
              </span>
              <h4 class="ms-4">
                Metodo
              </h4>
            </div>
          </div>
          <!-- links -->
          <div class="links">
            <a class="github btn rounded-pill" :href="project.github" target="_blank">
              link github
              <i class="fab fa-github"></i>
            </a>
            <a class="site btn rounded-pill" :href="project.site" target="_blank">
              Esplora
              <i class="fas fa-globe"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { store } from '@/store';
export default {
  name: 'ProjectsRowComponent',
  data() {
    return {
      store: store
    }
  },
  methods: {
    getStatus(status) {
      if (status == 1) {
        return 'completato'
      } else {
        return 'in corso'
      }
    },
    getTeam(team) {
      if (team == 1) {
        return 'team-work'
      } else {
        return 'solo'
      }
    },
    mounted() {
    }

  }
}
</script>

<style lang="scss" scoped>
@use '/src/assets/styles/partials/variables' as *;

.row {
  padding-top: 170px;
  padding-bottom: 170px;
}

.row:nth-child(even) {
  flex-direction: row-reverse;

  .info-container {
    margin-right: 0;
    margin-left: auto;
  }

  .img-container {
    img {
      transform: perspective(800px) rotateY(-25deg) scale(.8) rotateX(10deg);
      transition: all .6s ease;

      &:hover {
        transform: perspective(800px) rotateY(15deg) translateY(-50px) rotateX(10deg) scale(1);
      }
    }

  }
}

.img-container {
  width: 70%;
  padding: 100px 0;

  img {
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 60px 123px -25px hsla(225, 2%, 62%, .42), 0 35px 75px -35px hsla(225, 2%, 62%, .08);
    transform: perspective(800px) rotateY(25deg) scale(.8) rotateX(10deg);
    transition: all .6s ease;

    &:hover {
      transform: perspective(800px) rotateY(-15deg) translateY(-50px) rotateX(10deg) scale(1);
    }
  }
}

.info-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 88%;
  margin-right: auto;

  h2 {
    border: 3px solid #14e956;
    box-shadow: 6px 6px 0 0 #14e956;
    color: #14e956;
    font-family: Cyborg;
    font-weight: 700;
    font-weight: 900;
    margin-bottom: 3rem;
    padding: 0.7rem 1.1rem;
    text-transform: uppercase;
  }

  p {
    font-size: 0.75rem;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3.3rem;

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      padding: 0 20px;

      h5 {
        font-size: 0.9rem;
        position: absolute;
        top: 100%;
        opacity: 0;
        transition: all 0.3s ease-in;
        color: white;
      }

      i {
        font-size: 2rem;
        color: $green;
        transition: all 0.3s ease-in;

        &:hover {
          transform: translateY(-5px);
        }
      }

    }

    li:hover h5 {
      opacity: 1;
    }
  }

  h3 {
    font-size: 1.4rem;
    border: 3px solid rgb(12, 124, 193);
    box-shadow: -6px -6px 0 0 rgb(12, 124, 193);
    color: white;
    font-weight: 700;
    padding: 0.7rem 1.1rem;
    margin: 3rem 0;
    text-transform: uppercase;
  }

  .status-team {
    margin-bottom: 3rem;

    h4 {
      font-size: 1rem;
      color: white;
      border-top: 1px solid white;
      border-bottom: 1px solid white;
      margin: 0;
      padding: 3px 0;
      text-transform: uppercase;
    }

    .status {
      font-size: 0.9rem;
      color: rgb(203, 232, 13);
      font-weight: 600;
      padding: 0.7rem 1.1rem;
      border: 3px solid rgb(203, 232, 13);
      box-shadow: 6px -6px 0 0 rgb(203, 232, 13);
    }

    .team {
      font-size: 0.9rem;
      color: rgb(165, 21, 204);
      font-weight: 600;
      padding: 0.7rem 1.1rem;
      border: 3px solid rgb(165, 21, 204);
      box-shadow: -6px 6px 0 0 rgb(165, 21, 204);
    }
  }

  .links {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      text-decoration: none;
      font-size: 0.8rem;

      i {
        font-size: 1.2rem;
        vertical-align: middle;
      }
    }

    a.github {
      transition: all 0.2s ease-in-out;
      color: white;
      border: 1px solid white;
    }

    a.github:hover {
      background-color: white;
      color: #1F2127;
    }

    a.site {
      background-color: white;
      transition: all 0.2s ease-in-out;
      color: #1F2127;
      background-color: white;
    }

    a.site:hover {
      background-color: transparent;
      color: white;
      border: 1px solid white;
    }
  }

}
</style>