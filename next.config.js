const json = require('./static/data/db.json');

module.exports = {
  exportPathMap: function () {
    const { tags, posts } = json;

    const standardPages = {
      '/': { page: '/' },
      '/about': { page: '/about' }
    };

    const tagIndexPages = tags.reduce((accum, tag) => {
      return Object.assign(accum, {
        [`/${tag.slug}`]: { page: '/list', query: { type: tag.slug } }
      });
    }, {});

    const postShowPages = posts.reduce((accum, post) => {
      const tag = tags.filter(tag => tag.id === post.tagId)[0];
      return Object.assign(accum, {
        [`/${tag.slug}/${post.slug}`]: { page: '/show', query: { id: post.id } }
      });
    }, {});

    const siteMap = Object.assign(standardPages, tagIndexPages, postShowPages);
    return siteMap;
  }
};
