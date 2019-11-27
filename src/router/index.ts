import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'
import { Path, RouterName, RouterPrefix } from './router-type'

Vue.use(Router)

export const RouterMap: RouteConfig[] = [
    {
        path: Path.HOME,
        name: RouterPrefix(RouterName.Home),
        component: () => import('../views/layout/layout.vue')
    }
]

export default new Router({
    routes: RouterMap
})
