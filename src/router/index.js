import Vue from "vue";
import Router from "vue-router";
import Layout from "@/layout/index.vue";
Vue.use(Router);

// 防止不需要权限的路由
export const constantRoutes = [
  {
    path: "/",
    component: Layout,
    redirect: "/dashBoard",
    meta: { title: "CodeMirror", icon: "el-icon-platform-eleme" },
    children: [
      {
        path: "dashBoard",
        component: () => import("@/views/dashBoard/index"),
        meta: { title: "DashBoard", icon: "el-icon-platform-eleme" },
        hidden: false,
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    // hidden: true
  },
  {
    path: "/codemirror",
    component: Layout,
    redirect: "/codemirror/index",
    meta: { title: "CodeMirror", icon: "el-icon-warning-outline" },
    children: [
      {
        path: "index",
        component: () => import("@/views/CodeMirror/index"),
        meta: { title: "CodeMirror", icon: "el-icon-s-goods" },
        hidden: false,
      },
    ],
  },
  {
    path: "/system",
    component: Layout,
    redirect: "/system/page",
    name: "system",
    children: [
      {
        path: "page",
        component: () => import("@/views/system/page"),
        name: "PageSystem",
      },
      {
        path: "directive",
        component: () => import("@/views/system/directive"),
        name: "DirectiveSystem",
      },
      {
        path: "role",
        component: () => import("@/views/system/menu/index.vue"),
        name: "MenuSystem",
      },
    ],
  },
];
// 防止需要权限的路由
export const asyncRoutes = [
  {
    path: "/",
    component: Layout,
    redirect: "/dashBoard",
    meta: { title: "DashBoard", icon: "el-icon-platform-eleme" },
    children: [
      {
        path: "dashBoard",
        component: () => import("@/views/dashBoard/index"),
        meta: { title: "DashBoard", icon: "el-icon-platform-eleme" },
        hidden: false,
      },
    ],
  },
  {
    path: "/system",
    component: Layout,
    redirect: "/system/page",
    name: "system",
    meta: { title: "System",icon:"el-icon-info" },
    children: [
      {
        path: "page",
        component: () => import("@/views/system/page"),
        meta: { title: "Page" },
        hidden:false,
        name: "PageSystem",
      },
      {
        path: "directive",
        component: () => import("@/views/system/directive"),
        meta: { title: "Directive" },
        hidden:false,
        name: "DirectiveSystem",
      },
      {
        path: "role",
        component: () => import("@/views/system/menu/index.vue"),
        meta: { title: "Menu" },
        hidden:false,
        name: "menuSystem",
      },
    ],
  },
  {
    path: "/codemirror",
    component: Layout,
    redirect: "/codemirror/index",
    meta: { title: "CodeMirror", icon: "el-icon-warning-outline" },
    children: [
      {
        path: "index",
        component: () => import("@/views/CodeMirror/index"),
        meta: { title: "CodeMirror", icon: "el-icon-s-goods" },
        hidden: false,
      },
    ],
    // hidden: true
  },
];

const createRouter = () =>
  new Router({
    scrollBehavior: () => ({ y: 0 }), //每次切换路由,保存滚动条在顶部
    routes: constantRoutes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
