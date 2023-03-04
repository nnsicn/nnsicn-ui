import router from "./router";
import {  asyncRoutes} from "./router/index.js";
import store from "./store";
import { getToken } from "@/utils/token";
// 全局路由拦截器
const whiteList = ["/login", "/codemirror"];
router.beforeEach(async (to, from, next) => {
  const hasToken = getToken();
  if (hasToken) {
    if (to.path === "/login") {
      next();
    } else {
      const hasRoles = store.getters.roles && store.getters.roles.length > 0;
      if (hasRoles) {
        next();
      } else {
        // console.log(to);
        // router.addRoutes(asyncRoutes)
        next()
        // next({ ...to, replace: true })
        // const roles = await store.dispatch("user/getInfo");
        // if (Array.isArray(roles) && roles.length > 0) {
        //   const accessRoutes = await store.dispatch(
        //     "permission/generateRoutes",
        //     { roles }
        //   );
        //   router.addRoutes()
        //   next()
        // }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login`);
    }
  }
});
