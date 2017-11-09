import * as TA from 'time-ago'

function subscribe (inst) {
  inst.subscribe((mutation) => {
    if (mutation.type === 'APPEND_ITEM' || mutation.type === 'UPSERT_ITEM') {
      updateAgo(inst.state, mutation.payload)
    }
  })
  inst.actions.UPDATE_ITEM_AGO = ({commit}, {item}) => {
    commit('UPDATE_ITEM_AGO', {item})
  }
}

function updateAgo (state, item) {
  const ta = TA()
  const now = (new Date()).getTime()
  const idx = state.items.indexOf(item)
  state.items[idx] = {
    ...item,
    ago: item.time * 1000 < now ? ta.ago(item.time * 1000) : 'Now'
  }
}

export function addItemAgoUpdater (inst) {
  subscribe(inst)
}
