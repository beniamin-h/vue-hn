import ItemsBase from '../items_base'
import { addItemsLoader } from '../mixins/items_loader'
import { addItemsUpdaterReload } from '../mixins/items_updater_reload'
import { addItemAgoUpdater } from '../mixins/item_ago_updater'

class TopItems extends ItemsBase {

  constructor () {
    super()
    addItemsLoader(this)
    addItemsUpdaterReload(this)
  }

  onStoreInstanceSet (store) {
    addItemAgoUpdater(this, store)
  }

  storiesUrl () {
    return 'https://hacker-news.firebaseio.com/v0/topstories.json'
  }
}

const top = new TopItems()

export default top
