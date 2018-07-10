import Layout from 'components/layout';
import Post from 'components/post';
import { getJSON, getPostsFromJSON, getTagsFromJSON } from 'utils/data';

const Page = ({ post, tags }) => (
  <Layout tags={tags}>
    {post ?
      <Post post={post} tags={tags}/>
    :
      <>Nothing to be found here!</>
    }
  </Layout>
);

// Get the categories and the latest post.
// FIXME: Would be nice to build up an immutable object.
Page.getInitialProps = async ({ req }) => {
  const json = await getJSON(!!req);

  // Find latest post
  const posts = getPostsFromJSON(json)
    // Descending order.
    .sort((a, b) => b.id - a.id);
  const post = posts[0];

  // Find tags
  const tags = getTagsFromJSON(json);

  // Now return them!
  return {
    post,
    tags
  };
};

export default Page;