// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import SubHeadingVue from "@/components/SubHeading.vue";
import App from "./App";

Vue.config.productionTip = false;
Vue.directive("bg", {
  bind(el, binding, vnode) {
    el.style.background = `url(${binding.value})`;
  }
});
Vue.component("sub-heading", SubHeadingVue);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
