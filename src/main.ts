import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createApp } from "vue";
import App from "./App.vue";

// Vuetify
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";

const vuetify = createVuetify({
  components,
  directives
});

const app = createApp(App);
app.use(vuetify);
app.mount("#app");
