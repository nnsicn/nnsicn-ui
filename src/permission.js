import router from "./router";
import store from "./store";
import { getToken } from "@/utils/token";
// 全局路由拦截器
const whiteList = ["/login"]
router.beforeEach(async (to, from, next) => {
  const hasToken = getToken();
  if (hasToken) {
    if (to.path === "/login") {
      next();
    }else{
        const hasRoles = store.getters.roles && store.getters.roles.length > 0;
        if(hasRoles){
            next();
        }else{
            const roles = await store.dispatch('user/getInfo')
        }
    }
  }else{
    if(whiteList.indexOf(to.path) !== -1){
        next()
    }else{
        next(`/login`)
    }
  }
});
