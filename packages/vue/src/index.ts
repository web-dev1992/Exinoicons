import type { App } from "vue";
import ExinoiconsIcon from "./components/ExinoiconsIcon.vue";

export { default as ExinoiconsIcon } from "./components/ExinoiconsIcon.vue";
export * from "./types";

export const ExinoiconsPlugin = {
  install: (app: App) => {
    app.component("ExinoiconsIcon", ExinoiconsIcon);
  },
};

export default ExinoiconsPlugin;
