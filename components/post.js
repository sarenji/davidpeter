import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import format from 'date-fns/format';

import StyledLink from 'components/styled-link';
import Body from 'components/styled-body';

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
      <Body>
        <ReactMarkdown>
          {body}
        </ReactMarkdown>
      </Body>
      <Caption>
        {slug && tag && tag.slug ?
          <StyledLink href={`/${tag.slug}/${slug}`}>{title}</StyledLink>
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
            Stashed in <StyledLink href={tag.slug}>{tag.title}</StyledLink>
          </>
        }
      </Caption>
    </div>
  );
};

export default Post;
