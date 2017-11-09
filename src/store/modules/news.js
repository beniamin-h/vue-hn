import ItemsBase from '../items_base'
import { addItemsLoader } from '../mixins/items_loader'
import { addItemsUpdaterLive } from '../mixins/items_updater_live'
import { addItemsAgoUpdater } from '../mixins/items_ago_updater'
import { addItemAgoUpdater } from '../mixins/item_ago_updater'

class NewItems extends ItemsBase {

  constructor () {
    super()
    addItemsLoader(this)
    addItemsUpdaterLive(this)
    addItemsAgoUpdater(this)
  }

  onStoreInstanceSet (store) {
    addItemAgoUpdater(this, store)
  }

  storiesUrl () {
    return 'https://hacker-news.firebaseio.com/v0/newstories.json'
  }
}

const news = new NewItems()

export default news
