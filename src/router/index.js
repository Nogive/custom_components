import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import dragMap from "@/components/dragMap.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import takephoto from "@/components/takePhoto.vue";
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
    },
    {
      path: "/takephoto",
      name: "takephoto",
      component: takephoto
    }
  ]
});
