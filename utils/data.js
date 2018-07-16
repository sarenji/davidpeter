import json from 'static/data/db.json';

/**
 * Returns an array of posts.
 * @param {enum} order     - 'asc' or 'desc'. 'asc' by default.
 * @param {string} sortBy  - 'id' by default.
 * @param {string} type    - if provided, filters posts by this type, e.g. 'stories'.
 */
export const getPosts = ({ order, sortBy = 'publishedAt', type } = {}) => {
  let posts = (json && json.posts) || [];
  if (type) {
    const tags = getTags();
    // Find posts whose tag.slug matches `type`.
    posts = posts.filter(post => {
      const tag = tags.filter(tag => tag.id === post.tagId)[0];
      return tag.slug === type;
    });
  }

  const transform = posts.map(post => [ post[sortBy], post ]);

  if (order === 'desc') {
    transform.sort(([a,], [b,]) => (a < b) ? 1 : (a > b) ? -1 : 0);
  } else {
    transform.sort(([a,], [b,]) => (a < b) ? -1 : (a > b) ? 1 : 0);
  }

  return transform.map(([ , post ]) => post);
};

/**
 * Returns the first post that matches certain conditions.
 * @param {number} id   - the post id
 * @param {string} slug - the post slug
 */
export const getPost = ({ id, slug, order, sortBy, type }) => {
  let posts = getPosts({ order, sortBy, type });
  if (id) {
    posts = posts.filter(post => post.id === id);
  }
  if (slug) {
    posts = posts.filter(post => post.slug === slug);
  }
  return posts[0];
};

/**
 * Returns an array of all tags.
 */
export const getTags = () => {
  const tags = (json && json.tags) || [];
  return tags;
};
