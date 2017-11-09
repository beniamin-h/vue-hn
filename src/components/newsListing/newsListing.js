import * as TA from 'time-ago';

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
      const ta = TA()
      return this.$store.state.news.map((news) => (
        {
          ...news,
          ago: ta.ago(news.time * 1000)
        }
      ))
    }
  }
}
