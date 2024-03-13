import "./assets/styles/main.scss";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./js/parallax_splash";

const app = createApp(App);

app.use(router);

app.mount("#app");
