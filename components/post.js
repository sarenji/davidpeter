import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import Link from 'next/link';

const Caption = styled.div`
  font-size: 12px;
  line-height: 24px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Post = ({ title, slug, body, publishedAt, tag }) => (
  <div>
    <ReactMarkdown>
      {body}
    </ReactMarkdown>
    <Caption>
      {slug ?
        <Link href={slug}><a>{title}</a></Link>
      :
        <>{title}</>
      }
      {publishedAt &&
        <>
        {' '}&middot;{' '}
        {publishedAt}
        </>
      }
      {tag &&
        <>
          {' '}&middot;{' '}
          Stashed in <Link href={tag.slug}><a>{tag.title}</a></Link>
        </>
      }
    </Caption>
  </div>
);

export default Post;
