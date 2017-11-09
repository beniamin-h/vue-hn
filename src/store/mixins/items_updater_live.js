import axios from 'axios'

function addAction (inst) {
  inst.actions.UPDATE_ITEMS = ({ commit, state, dispatch }) => {
    axios.get(inst.maxItemUrl())
      .then(
        ({ data: maxItemIdStr }) => {
          const maxItemId = parseInt(maxItemIdStr, 10)
          if (state.lastMaxItemId) {
            while (state.lastMaxItemId++ < maxItemId) {
              axios.get(inst.itemUrl(state.lastMaxItemId))
                .then(({ data: item }) => {
                  if (item && item.type === 'story' && item.url) {
                    commit('UPSERT_ITEM', { item })
                  }
                })
            }
          }
          state.lastMaxItemId = maxItemId
        },
        (err) => {
          console.error(err)
        }
      )
  }
}

function addMutation (inst) {
  inst.mutations.UPSERT_ITEM = (state, {item}) => {
    const itemIndex = state.items.findIndex((elem) => elem.id === item.id)
    if (itemIndex > -1) {
      state.items[itemIndex] = item
    } else {
      state.items.push(item)
    }
  }
}

export function addItemsUpdaterLive (inst) {
  addAction(inst)
  addMutation(inst)
}
