import Layout from 'components/layout';
import Post from 'components/post';
import { getPosts, getTags } from 'utils/data';

const Page = ({ post, tags }) => (
  <Layout tags={tags}>
    {post ?
      <Post post={post} tags={tags}/>
    :
      <>Nothing to be found here!</>
    }
  </Layout>
);

Page.getInitialProps = async () => {
  // Find latest post
  const posts = getPosts({ order: 'desc', sortBy: 'id' });
  const post = posts[0];
  const tags = getTags();

  return { post, tags };
};

export default Page;