import * as TA from 'time-ago'

function subscribe (inst, storeInst) {
  storeInst.subscribe((mutation) => {
    if (mutation.type.indexOf('/APPEND_ITEM') > -1 || mutation.type.indexOf('/UPSERT_ITEM') > -1) {
      updateAgo(inst.state, mutation.payload)
    }
  })
}

function updateAgo (state, { item }) {
  const ta = TA()
  const now = (new Date()).getTime()
  const idx = state.items.indexOf(item)
  state.items[idx] = {
    ...item,
    ago: item.time * 1000 < now ? ta.ago(item.time * 1000) : 'Now'
  }
}

export function addItemAgoUpdater (inst, storeInst) {
  subscribe(inst, storeInst)
}
