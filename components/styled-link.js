import Link from 'next/link';
import styled from 'styled-components';

export default ({ children, ...props }) =>
  <Link passHref {...props}><StyledA>{children}</StyledA></Link>;

export const StyledA = styled.a`
  color: #c65;
  text-decoration: none;
  padding: 6px 0 3px;
  transition: background-color 100ms linear, color 100ms linear;

  &:hover {
    background: #344;
    color: #fff;
    border-radius: 2px;
  }
`;
