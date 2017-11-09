import axios from 'axios'

const LIMIT = 50

function getIds (newItemIds, oldItems) {
  return [...new Set([...newItemIds.slice(0, LIMIT),
    ...oldItems.map((item) => item.id)])]
}

function addAction (inst) {
  inst.actions.UPDATE_ITEMS = ({ commit, state, dispatch }) => {
    axios.get(inst.storiesUrl())
      .then(
        ({data: items}) => {
          getIds(items, state.items)
            .forEach((id) => {
              axios.get(inst.itemUrl(id)).then(({data: item}) => {
                if (item.url) {
                  commit('UPSERT_ITEM', {item})
                }
              }, (err) => {
                console.error(err)
              })
            })
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

export function addItemsUpdaterReload (inst) {
  addAction(inst)
  addMutation(inst)
}
