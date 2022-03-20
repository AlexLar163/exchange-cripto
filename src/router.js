import Vue from "vue";
import Router from "vue-router";
import VwHome from "@/views/VwHome.vue";
import VwAbout from "@/views/VwAbout.vue";
import VwError from "@/views/VwError.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: VwHome,
    },
    {
      path: "/about",
      name: "about",
      component: VwAbout,
    },
    {
      path: "*",
      name: "error",
      component: VwError,
    },
  ],
});
