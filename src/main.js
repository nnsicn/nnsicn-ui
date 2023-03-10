import Vue from "vue";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/style/index.scss";
import "./register"; //register components
import * as echarts from "echarts";
import "echarts-gl";

import App from "./App.vue";
import "./permission";
import store from "./store";
import router from "./router";

Vue.prototype.$echarts = echarts;
function open(component, arg) {
  return new Promise((resolve, reject) => {
    let dialog = Vue.extend(component);
    let vm = new dialog({
      el: document.createElement("div"),
      // router,
      // store,
      // eventBus: new Vue(),
    });
    vm.open(arg).then(
      res => {
        resolve(res);
      },
      err => {
        reject(err);
      }
    );
  });
}

Vue.prototype.$openDialog = function (component, arg) {
  return open(component, arg);
};
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount("#app");
