import fetch from 'isomorphic-unfetch';

import Layout from 'components/layout';
import Post from 'components/post';

const Index = ({ post, tags }) => (
  <Layout tags={tags}>
    {post ?
      <Post {...post}/>
    :
      <>Nothing to be found here!</>
    }
  </Layout>
);

// Get the categories and the latest post.
// FIXME: Would be nice to build up an immutable object.
// FIXME: Can we not hardcode localhost:3000?
Index.getInitialProps = async ({ req }) => {
  const dbPath = '/static/data/db.json';
  const url = (req) ? `http://localhost:3000${dbPath}` : dbPath;
  const res = await fetch(url);
  const json = await res.json();

  let props = {};

  // Check posts for the latest post
  if (json && json.posts && json.posts.length > 0) {
    const posts = [ ...json.posts ]
      // Sort posts by descending.
      .sort((a, b) => b.id - a.id);
    props = { ...props, post: posts[0] };
  }

  // Add in categories
  if (json && json.tags && json.tags.length > 0) {
    props = { ...props, tags: json.tags };
  }
  return props;
};

export default Index;