import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from 'containers/home/home.vue'
import NotFound from 'containers/notFound/notFound.vue'

// application routes
const routes = [
  { path: '/', name: 'home', component: Home, props: { type: 'newstories' } },
  { path: '/:type', name: 'home', component: Home, props: true },
  { path: '*', name: 'notFound', component: NotFound }
]

// export router instance
export default new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'is-active'
})
