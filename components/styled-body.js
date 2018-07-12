import styled from 'styled-components';
import { aCSS } from 'components/styled-link';

const Body = styled.div`
  font-size: .9375em;
  line-height: 1.6em;
  font-family: "PT Serif", Georgia, serif;

  h1, h2, h3, h4, h5, h6 {
    font-family: "PT Sans", "Helvetica Neue", sans-serif;
  }

  dt {
    margin-top: 1em;
  }

  a {
    ${aCSS}
  }
`;

export default Body;
