import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
var VueTruncate = require("vue-truncate-filter");

Vue.config.productionTip = false;
Vue.use(VueTruncate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
