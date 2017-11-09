class ItemsBase {
  constructor () {
    this.namespaced = true

    this.state = {
      items: [],
      lastMaxItemId: 0,
      loaded: false
    }

    this.getters = {
      items (state) {
        return state.items
      }
    }

    this.mutations = {}

    this.actions = {}
  }

  storiesUrl () {

  }

  maxItemUrl () {
    return 'https://hacker-news.firebaseio.com/v0/maxitem.json'
  }

  itemUrl (id) {
    return `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  }

  onStoreInstanceSet (store) {

  }

  setStoreInstance (store) {
    this.store = store
    this.onStoreInstanceSet(store)
  }
}

export default ItemsBase
