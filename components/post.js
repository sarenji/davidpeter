const Post = () => <p>hello world</p>;

// import styled from 'styled-components';
// import Markdown from 'react-remarkable';
// import format from 'date-fns/format';

// import StyledLink from 'components/StyledLink';
// import Body from 'components/styled-body';

// const Spacing = styled.div`
//   margin-top: 2em;
//   margin-bottom: 2em;
// `;

// const Caption = styled.div`
//   font-size: 12px;
//   line-height: 24px;
//   text-transform: uppercase;
//   letter-spacing: 1px;
// `;

// const Post = ({ post: { title, slug, body, publishedAt, tagId }, tags }) => {
//   const tag = tags && tags.filter(tag => tag.id === tagId)[0];
//   return (
//     <Spacing>
//       <Body>
//         <Markdown>
//           {body}
//         </Markdown>
//       </Body>
//       <Caption>
//         {slug && tag && tag.slug ?
//           <StyledLink href={`/${tag.slug}/${slug}`}>{title}</StyledLink>
//         :
//           <>{title}</>
//         }
//         {publishedAt &&
//           <>
//           {' '}&middot;{' '}
//           {format(publishedAt, 'MMMM YYYY')}
//           </>
//         }
//         {tag &&
//           <>
//             {' '}&middot;{' '}
//             Stashed in <StyledLink href={tag.slug}>{tag.title}</StyledLink>
//           </>
//         }
//       </Caption>
//     </Spacing>
//   );
// };

export default Post;
