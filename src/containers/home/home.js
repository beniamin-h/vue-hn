import newsListing from 'components/newsListing/newsListing.vue'

export default {
  name: 'home',
  components: {
    newsListing
  },
  mounted: function () {
    this.$store.dispatch('LOAD_ITEMS')
    setInterval(() => this.$store.dispatch('UPDATE_ITEMS'), 2000)
    setInterval(() => this.$store.dispatch('UPDATE_AGO'), 1000)
  },
}
