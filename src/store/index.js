import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import * as types from './types'

Vue.use(Vuex)

// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

// get test data
const HS = {
  newstories: 'https://hacker-news.firebaseio.com/v0/newstories.json',
  item: (id) => `https://hacker-news.firebaseio.com/v0/item/${id}.json`
}

const LIMIT = 20

const options = {
  state: {
    news: []
  },
  mutations: {
    [types.APPEND_NEWS]: (state, { item }) => {
      state.news.push(item)
    }
  },
  getters: {
    news: state => {
      return state.news
    }
  },
  actions: {
    [types.LOAD_NEWS]: ({ commit }) => {
      axios.get(HS.newstories)
        .then(
          ({ data: items }) => items.slice(0, LIMIT).map(
            (id) => axios.get(HS.item(id)).then((item) => {
              commit(types.APPEND_NEWS, { item: item.data })
            }, (err) => {
              console.log(err)
            })
          ),
          (err) => {
            console.log(err)
          }
        )
    }
  }
}

const store = new Vuex.Store({ ...options })

export default store
