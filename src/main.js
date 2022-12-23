import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

// UI framework bootstrap 5
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";
import VueAxios from "vue-axios";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);

// app.config.globalProperties.$authUser = JSON.parse(
//   localStorage.getItem("loginUser")
// );

app.mount("#app");
