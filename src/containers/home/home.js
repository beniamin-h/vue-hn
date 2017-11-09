import newsListing from 'components/newsListing/newsListing.vue'

export default {
  name: 'home',
  props: ['type'],
  components: {
    newsListing
  }
}
