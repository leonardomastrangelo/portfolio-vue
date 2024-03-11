<template>
  <section id="quote-home">
    <!-- Title -->
    <h2 class="my-5" ref="title" :class="{ 'visibleTitle': isVisibleTitle }">
      cit. del giorno
    </h2>

    <!-- Quote -->
    <div ref="quote" id="quote-box" class="w-50 p-5 m-5" :class="{ 'visibleQuote': isVisibleQuote }">
      <p class="fs-4 text-center">{{ currentQuote.cit }}</p>
      <cite class="d-block text-end">{{ currentQuote.autore }}</cite>
      <!-- left -->
      <svg fill="#14E956" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" class="left">
        <path
          d="M 16 5 C 8.28125 5 2 11.28125 2 19 L 2 41 L 22 41 L 22 21 L 11 21 L 11 19 C 11 16.992188 11.617188 15.195313 12.558594 13.941406 C 13.496094 12.691406 14.703125 12 16 12 L 17 12 L 17 5 Z M 42 5 C 34.28125 5 28 11.28125 28 19 L 28 41 L 48 41 L 48 21 L 37 21 L 37 19 C 37 16.992188 37.617188 15.195313 38.558594 13.941406 C 39.496094 12.691406 40.703125 12 42 12 L 43 12 L 43 5 Z M 15 7.203125 L 15 10.265625 C 13.414063 10.574219 11.96875 11.394531 10.957031 12.746094 C 9.726563 14.386719 9 16.589844 9 19 L 9 23 L 20 23 L 20 39 L 4 39 L 4 19 C 4 12.714844 8.855469 7.734375 15 7.203125 Z M 41 7.203125 L 41 10.265625 C 39.414063 10.574219 37.96875 11.394531 36.957031 12.746094 C 35.726563 14.386719 35 16.589844 35 19 L 35 23 L 46 23 L 46 39 L 30 39 L 30 19 C 30 12.714844 34.855469 7.734375 41 7.203125 Z">
        </path>
      </svg>
      <!-- right -->
      <svg fill="#14E956" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" class="right">
        <path
          d="M 2 9 L 2 29 L 13 29 L 13 31 C 13 33.007813 12.382813 34.804688 11.441406 36.058594 C 10.503906 37.308594 9.296875 38 8 38 L 7 38 L 7 45 L 8 45 C 15.71875 45 22 38.71875 22 31 L 22 9 Z M 28 9 L 28 29 L 39 29 L 39 31 C 39 33.007813 38.382813 34.804688 37.441406 36.058594 C 36.503906 37.308594 35.296875 38 34 38 L 33 38 L 33 45 L 34 45 C 41.71875 45 48 38.71875 48 31 L 48 9 Z M 4 11 L 20 11 L 20 31 C 20 37.285156 15.144531 42.265625 9 42.796875 L 9 39.734375 C 10.585938 39.425781 12.03125 38.605469 13.042969 37.253906 C 14.273438 35.613281 15 33.410156 15 31 L 15 27 L 4 27 Z M 30 11 L 46 11 L 46 31 C 46 37.285156 41.144531 42.265625 35 42.796875 L 35 39.734375 C 36.585938 39.425781 38.03125 38.605469 39.042969 37.253906 C 40.273438 35.613281 41 33.410156 41 31 L 41 27 L 30 27 Z">
        </path>
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  name: 'QuoteHomeComponent',
  data() {
    return {
      isVisibleTitle: false,
      isVisibleQuote: false,
      quotes: [
        {
          cit: "La vita è ciò che ti accade mentre sei occupato a fare altri progetti.",
          autore: "John Lennon"
        },
        {
          cit: "L'unica cosa di cui dobbiamo avere paura è la paura stessa.",
          autore: "Franklin D. Roosevelt"
        },
        {
          cit: "La mente è tutto. Tu diventi ciò che pensi.",
          autore: "Buddha"
        },
        {
          cit: "Non c'è niente di buono o di cattivo, ma il pensiero lo rende tale.",
          autore: "William Shakespeare"
        },
        {
          cit: "La vita è 10% ciò che ti accade e 90% come reagisci.",
          autore: "Charles R. Swindoll"
        },
        {
          cit: "La felicità è quando ciò che pensi, ciò che dici e ciò che fai sono in armonia.",
          autore: "Mahatma Gandhi"
        },
        {
          cit: "La vita è troppo breve per spendere il tempo con persone che suggeriscono che sei meglio essere qualcun altro.",
          autore: "Brene Brown"
        },
        {
          cit: "L'unico modo per fare un grande lavoro è amare ciò che fai.",
          autore: "Steve Jobs"
        },
        {
          cit: "Chiunque può iniziare, ma solo i veri appassionati continuano.",
          autore: "Jeff Charbonneau"
        },
        {
          cit: "Sii il cambiamento che vuoi vedere nel mondo.",
          autore: "Mahatma Gandhi"
        }
      ],
      currentQuote: {}
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
    setupObserverQuote() {
      const quote = this.$refs.quote;
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.isVisibleQuote = true;
          } else {
            this.isVisibleQuote = false;
          }
        },
          {
            root: null,
            rootMargin: "0px",
            threshold: 0.1
          });
      });
      observer.observe(quote);
    },
    getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  },
  created() {
    const randomIndex = this.getRndInteger(0, this.quotes.length - 1);
    this.currentQuote = this.quotes[randomIndex];
  },
  mounted() {
    this.setupObserverTitle();
    this.setupObserverQuote();
  }
}
</script>

<style lang="scss" scoped>
@use '/src/assets/styles/partials/variables' as *;

#quote-home {
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

  #quote-box {
    background-image: url('/src/assets/img/quote-bg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 20px;
    position: relative;
    transition: all 0.5s ease;
    transform: scale(0.3);

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      z-index: 1;
    }

    p,
    cite {
      color: white;
      position: relative;
      z-index: 3;
    }

    .left {
      position: absolute;
      width: 80px;
      top: -40px;
      left: 20px;
      z-index: 3;
    }

    .right {
      position: absolute;
      width: 80px;
      bottom: -40px;
      right: 20px;
      z-index: 3;
    }

  }

  #quote-box.visibleQuote {
    transform: scale(1);
  }
}
</style>