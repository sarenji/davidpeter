import styled from 'styled-components';
import { aCSS } from 'components/styled-link';

const Body = styled.div`
  font-size: .9375em;
  line-height: 1.6em;
  font-family: "PT Serif", Georgia, serif;

  h1, h2, h3, h4, h5, h6 {
    font-family: "PT Sans", "Helvetica Neue", sans-serif;
  }

  h1 {
    margin-top: 1em;
  }

  dt {
    margin-top: 1em;
  }

  a {
    ${aCSS}
  }

  blockquote {
    border-left: 4px solid #eee;
    margin-left: 0;
    padding-left: 36px;
  }

  hr {
    border: none;
    border-top: 1px solid #eee;
  }
`;

export default Body;
