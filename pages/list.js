import Layout from 'components/layout';
import Post from 'components/post';
import { getPosts, getTags } from 'utils/data';

const Page = ({ posts, tags }) => (
  <Layout tags={tags}>
    {posts.length > 0 && posts.map(post =>
      <Post key={post.id} post={post} tags={tags}/>
    )}
    {posts.length === 0 &&
      <>Nothing to be found here!</>
    }
  </Layout>
);

Page.getInitialProps = ({ query: { type } }) => {
  const posts = getPosts({ order: 'desc', type });
  const tags = getTags();

  return { posts, tags };
};

export default Page;
