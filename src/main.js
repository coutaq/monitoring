import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import Bootstrap from "bootstrap";
let app = createApp(App);
app.config.globalProperties.window = window;
app.use(Bootstrap).mount("#app");
