import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import format from 'date-fns/format';

import Link from 'next/link';

const Caption = styled.div`
  font-size: 12px;
  line-height: 24px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Post = ({ post: { title, slug, body, publishedAt, tagId }, tags }) => {
  const tag = tags && tags.filter(tag => tag.id === tagId)[0];
  return (
    <div>
      <ReactMarkdown>
        {body}
      </ReactMarkdown>
      <Caption>
        {slug && tag && tag.slug ?
          <Link href={`/${tag.slug}/${slug}`}><a>{title}</a></Link>
        :
          <>{title}</>
        }
        {publishedAt &&
          <>
          {' '}&middot;{' '}
          {format(publishedAt, 'MMMM YYYY')}
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
};

export default Post;
