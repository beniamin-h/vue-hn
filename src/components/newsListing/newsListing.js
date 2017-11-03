export default {
  name: 'newsListing',
  computed: {
    news: function () {
      return [{
        title: 'Lorem ipsum dolor sept',
        url: 'http://google.com',
        score: 91,
      }, {
        title: 'Nulla ullamcorper nulla aliquet',
        url: 'https://news.ycombinator.com/',
        score: 2,
      }, {
        title: 'Sed tristique cursus lobortis sed ut massa eget velit vehicula posuere',
        url: 'http://nglogic.com',
        score: 699,
      }];
    }
  }
}
