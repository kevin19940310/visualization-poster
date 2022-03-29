import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Index from "@/views/index/index.vue";
import Home from "@/views/home/index.vue";
import Works from "@/views/works/index.vue";
import Template from "@/views/template/index.vue";
import Editor from "@/views/editor/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    component: Index,
    children: [
      { path: "", name: "home", component: Home },
      { path: "template/:id", name: "template", component: Template },
      { path: "works", name: "works", component: Works },
    ],
  },
  {
    path: '/editor',
    name: 'editor',
    component: Editor
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
