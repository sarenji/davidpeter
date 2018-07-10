import fetch from 'isomorphic-unfetch';

// FIXME: Can we not hardcode localhost:3000?
export const getJSON = async (isServer) => {
  const dbPath = '/static/data/db.json';
  const url = (isServer) ? `http://localhost:3000${dbPath}` : dbPath;
  const res = await fetch(url);
  const json = await res.json();
  return json;
};

export const getPostsFromJSON = (json) => {
  if (json && json.posts && json.posts.length > 0) {
    return [ ...json.posts ];
  }
  return [];
};

export const getTagsFromJSON = (json) => {
  if (json && json.tags && json.tags.length > 0) {
    return [ ...json.tags ];
  }
  return [];
};
