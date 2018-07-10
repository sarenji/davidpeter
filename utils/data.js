import json from 'static/data/db.json';

/**
 * Returns an array of posts.
 * @param {enum} order     - 'asc' or 'desc'. 'asc' by default.
 * @param {string} sortBy  - 'id' by default.
 * @param {string} type    - if provided, filters posts by this type, e.g. 'stories'.
 */
export const getPosts = ({ order, sortBy = 'id', type } = {}) => {
  let posts = (json && json.posts) || [];
  if (type) {
    posts = posts.filter(post => post.type === type);
  }
  if (order === 'desc') {
    posts.sort((a, b) => b[sortBy] - a[sortBy]);
  } else {
    posts.sort((a, b) => a[sortBy] - b[sortBy]);
  }
  return posts;
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
