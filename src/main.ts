import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/index.less";

console.log(process.env.VUE_APP_TITLE);

createApp(App).use(store).use(router).mount("#app");
