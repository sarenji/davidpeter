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
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
  }
`;

export default Body;
