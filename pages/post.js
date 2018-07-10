import Layout from 'components/layout';
import Post from 'components/post';
import { getPost, getTags } from 'utils/data';

const Page = ({ post, tags }) => (
  <Layout tags={tags}>
    {post ?
      <Post post={post} tags={tags}/>
    :
      <>Nothing to be found here!</>
    }
  </Layout>
);

Page.getInitialProps = async ({ query: { id } }) => {
  const post = getPost({ id });
  const tags = getTags();

  return { post, tags };
};

export default Page;