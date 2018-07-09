import fetch from 'isomorphic-unfetch';

import Layout from 'components/layout';
import Post from 'components/post';

const Index = ({ post }) => (
  <Layout>
    {post ?
      <Post {...post}/>
    :
      <>Nothing to be found here!</>
    }
  </Layout>
);

// Get the latest post.
Index.getInitialProps = async ({ req }) => {
  if (req) {
    const res = await fetch('http://localhost:3002/posts?_order=desc,_limit=1');
    const json = await res.json();
    if (json.length > 0) {
      return { post: json[0] };
    }
  }
  return {};
};

export default Index;