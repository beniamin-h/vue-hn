import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import * as types from './types'

Vue.use(Vuex)

// data endpoints
const HS = {
  newstories: 'https://hacker-news.firebaseio.com/v0/newstories.json',
  maxitem: 'https://hacker-news.firebaseio.com/v0/maxitem.json',
  item: (id) => `https://hacker-news.firebaseio.com/v0/item/${id}.json`
}

const LIMIT = 20

const options = {
  state: {
    news: [],
    lastMaxItemId: 0
  },
  mutations: {
    [types.APPEND_ITEM]: (state, { item }) => {
      state.news.push(item)
    },
    [types.UPSERT_ITEM]: (state, { item }) => {
      const itemIndex = state.news.findIndex((elem) => elem.id === item.id)
      if (itemIndex > -1) {
        state.news[itemIndex] = item
      } else {
        state.news.push(item)
      }
    }
  },
  getters: {
    news: state => {
      return state.news
    }
  },
  actions: {
    [types.LOAD_ITEMS]: ({ commit }) => {
      axios.get(HS.newstories)
        .then(
          ({ data: items }) => items.slice(0, LIMIT).map(
            (id) => axios.get(HS.item(id)).then(({ data: item }) => {
              commit(types.APPEND_ITEM, { item })
            }, (err) => {
              console.log(err)
            })
          ),
          (err) => {
            console.log(err)
          }
        )
    },
    [types.UPDATE_ITEMS]: ({ commit, state }) => {
      axios.get(HS.maxitem)
        .then(
          ({ data: maxItemIdStr }) => {
            const maxItemId = parseInt(maxItemIdStr, 10)
            if (state.lastMaxItemId) {
              while (state.lastMaxItemId++ < maxItemId) {
                axios.get(HS.item(state.lastMaxItemId))
                  .then(({ data: item }) => {
                    if (item && item.type === 'story') {
                      commit(types.UPSERT_ITEM, { item })
                    }
                  })
              }
            }
            state.lastMaxItemId = maxItemId
          },
          (err) => {
            console.log(err)
          }
        )
    }
  }
}

const store = new Vuex.Store({ ...options })

export default store
