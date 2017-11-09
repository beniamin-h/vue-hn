import axios from 'axios'

const LIMIT = 50

function addAction (inst) {
  inst.actions.LOAD_ITEMS = ({commit, state, dispatch}) => {
    if (state.loaded) {
      return
    }
    state.loaded = true
    axios.get(inst.storiesUrl())
      .then(
        ({data: items}) => items.slice(0, LIMIT).forEach(
          (id) => axios.get(inst.itemUrl(id)).then(({data: item}) => {
            if (item.url) {
              commit('APPEND_ITEM', {item})
            }
          }, (err) => {
            console.error(err)
          })
        ),
        (err) => {
          console.error(err)
        }
      )
  }
}

function addMutation (inst) {
  inst.mutations.APPEND_ITEM = (state, { item }) => {
    state.items.push(item)
  }
}

export function addItemsLoader (inst) {
  addAction(inst)
  addMutation(inst)
}
