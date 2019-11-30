import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'
import { Path, RouterName, RouterPrefix } from './router-type'

Vue.use(Router)

export const RouterMap: RouteConfig[] = [
    {
        path: Path.HOME,
        name: RouterPrefix(RouterName.Home),
        meta: { index: 0 },
        component: () => import('../views/layout/layout.vue'),
        children: [{
            path: Path.AddressBook,
            name: RouterPrefix(RouterName.AddressBook),
            meta: { index: 1 },
            component: () => import('../components/address-book/address-book.vue'),
        }, {
            path: Path.CommonLink,
            name: RouterPrefix(RouterName.CommonLink),
            meta: { index: 2 },
            component: () => import('../components/common-link/common-link.vue'),
        }]
    }
]

export default new Router({
    routes: RouterMap
})
