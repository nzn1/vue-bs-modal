import { App } from "vue";
import plugin, { modal } from "./service/modal-service";

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(plugin);
}

export default {
  install(app: App) {
    app.config.globalProperties.$modal = modal;
  },
};
