import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import LifeCycleView from "@/views/LifeCycleView.vue";
import DataBind from "@/views/DataBindView.vue";
import ExampleStoreView from "@/views/ExampleStoreView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/hakkimizda",
      name: "about",
      component: AboutView,
    },
    {
      path: "/life-cycle",
      name: "lifeCycle",
      component: LifeCycleView,
    },
    {
      path: "/data-bind",
      name: "dataBind",
      component: DataBind,
    },
    {
      path: "/example-store",
      name: "exampleStore",
      component: ExampleStoreView,
    },
  ],
});

export default router;
