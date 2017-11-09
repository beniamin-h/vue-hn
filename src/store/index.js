import Vue from 'vue'
import Vuex from 'vuex'

import * as modules from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    newstories: modules.news,
    topstories: modules.top
  }
})

Object.values(modules).forEach((module) => {
  module.setStoreInstance(store)
})

export default store
