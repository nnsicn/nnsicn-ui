import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = [
    {
        path: '/login',
        component: () => import('@/views/login/index'),
        // hidden: true
    },
]

const createRouter = () => new Router({
    scrollBehavior: () => ({ y: 0 }),//每次切换路由,保存滚动条在顶部
    routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router