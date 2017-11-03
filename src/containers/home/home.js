import newsListing from 'components/newsListing/newsListing.vue'

export default {
  name: 'home',
  components: {
    newsListing
  },
  mounted: function () {
    this.$store.dispatch('LOAD_NEWS')
  },
}
