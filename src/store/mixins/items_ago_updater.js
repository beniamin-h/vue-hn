import * as TA from 'time-ago'

function addAction (inst) {
  inst.actions.UPDATE_ITEMS_AGO = ({commit}) => {
    commit('UPDATE_ITEMS_AGO')
  }
}

function addMutation (inst) {
  inst.mutations.UPDATE_ITEMS_AGO = (state) => {
    const ta = TA()
    const now = (new Date()).getTime()
    state.items = state.items.map((item) => (
      {
        ...item,
        ago: item.time * 1000 < now ? ta.ago(item.time * 1000) : 'Now'
      }
    ))
  }
}

export function addItemsAgoUpdater (inst) {
  addAction(inst)
  addMutation(inst)
}
