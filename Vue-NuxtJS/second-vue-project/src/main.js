import { exampleStore } from "./stores/exampleStore";
import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);
app.use(exampleStore);

app.mount("#app");
