import { createApp } from "vue";
import { Quasar } from "quasar";
// Import icon libraries
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";
// Import Quasar css
import "quasar/src/css/index.sass";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

const myApp = createApp(App);

myApp.use(Quasar, {
  plugins: {},
});

// Assumes you have a <div id="app"></div> in your index.html
myApp.use(router).use(createPinia()).mount("#app");
