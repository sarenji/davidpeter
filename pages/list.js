import Layout from 'components/layout';
import Post from 'components/post';
import { getPosts, getTags } from 'utils/data';
import styled from 'styled-components';

const Line = styled.hr`
  overflow: visible; /* For IE */
  padding: 0;
  border: none;
  border-top: medium double #333;
  color: #333;
  text-align: center;
  &:after {
    content: "§";
    display: inline-block;
    position: relative;
    top: -0.7em;
    font-size: 1.5em;
    padding: 0 0.25em;
    background: white;
  }
`;

const Page = ({ posts, tags }) => (
  <Layout tags={tags}>
    {posts.length > 0 && posts.map((post, i) =>
      <>
        {i > 0 && <Line/>}
        <Post key={post.id} post={post} tags={tags}/>
      </>
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
