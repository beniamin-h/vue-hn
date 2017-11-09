export default {
  name: 'newsListing',
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
    news () {
      return this.$store.state.news
    }
  },
}
