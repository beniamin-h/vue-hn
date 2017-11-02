import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

import '../node_modules/vuetify/dist/vuetify.min.css'

import store from './store'
import router from './router'

import App from './App'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
