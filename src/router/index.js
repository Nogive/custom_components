import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import dragMap from "@/components/dragMap.vue";
import HelloWorld from "@/components/HelloWorld.vue";
export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/dragMap",
      name: "dragMap",
      component: dragMap
    }
  ]
});
