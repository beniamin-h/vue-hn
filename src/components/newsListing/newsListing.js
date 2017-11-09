
function loadItems() {

}

export default {
  name: 'newsListing',
  props: ['type'],
  data () {
    return {
      headers: [
        {
          text: 'Title',
          align: 'left',
          sortable: true,
          value: 'title'
        },
        {
          text: 'Time',
          align: 'center',
          sortable: true,
          value: 'time'
        },
        {
          text: 'Score',
          align: 'center',
          sortable: true,
          value: 'score'
        },
      ]
    }
  },
  computed: {
    items () {
      return this.$store.getters[`${this.type}/items`]
    }
  },
  watch: {
    type() {
      this.loadItems()
    }
  },
  mounted() {
    this.intervals = {
      UPDATE_ITEMS: null,
      UPDATE_NEWS_AGO: null,
    }
    this.loadItems = () => {
      this.clearIntervals()
      const type = this.type
      if (type === 'newstories') {
        this.$store.dispatch(`${type}/LOAD_ITEMS`)
        this.intervals.UPDATE_ITEMS = setInterval(() => this.$store.dispatch(`${type}/UPDATE_ITEMS`), 2000)
        this.intervals.UPDATE_ITEMS_AGO = setInterval(() => this.$store.dispatch(`${type}/UPDATE_ITEMS_AGO`), 1000)
      }
      else if (type === 'topstories') {
        this.$store.dispatch(`${type}/LOAD_ITEMS`)
        this.intervals.UPDATE_ITEMS = setInterval(() => this.$store.dispatch(`${type}/UPDATE_ITEMS`), 15000)
      }
    }
    this.clearIntervals = () => {
      Object.entries(this.intervals).forEach(([intervalKey, interval]) => {
        if (interval !== null) {
          clearInterval(interval)
          this.intervals[intervalKey] = null
        }
      })
    }

    this.loadItems()
  },
}
