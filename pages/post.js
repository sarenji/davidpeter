import Layout from 'components/layout';
import Post from 'components/post';
import { getJSON, getPostsFromJSON, getTagsFromJSON } from 'utils/data';

const Page = ({ post, tags }) => (
  <Layout tags={tags}>
    {post ?
      <Post post={post} tags={tags} />
      :
      <>Nothing to be found here!</>
    }
  </Layout>
);

// Get the categories and the latest post.
Page.getInitialProps = async ({ req, query }) => {
  const json = await getJSON(!!req);

  // Find post with matching slug
  const posts = getPostsFromJSON(json);
  const post = posts.filter(post => post.slug === query.slug)[0];

  // Find tags
  const tags = getTagsFromJSON(json);

  // Now return them!
  return {
    post,
    tags
  };
};

export default Page;