import Link from "next/link";
import Head from "next/head";

import styled from 'styled-components';
import StyledLink from 'components/styled-link';

const TopOfPage = styled.div`
  position: relative;
`;

const Container = styled.div`
  margin: 1em auto;
  max-width: 640px;
  font: 100% "PT Sans", "Helvetica Neue", sans-serif;
  color: #344;
`;

const HiddenA = styled.a`
  top: -50em;
  left: -50em;
  position: absolute;
  border: 1px solid #ccc;
  background: #fff;
  padding: .5em 1em;
  text-decoration: none;
  color: #c65;

  &:focus, &:active {
    top: auto;
    left: auto;
  }
`;

const SkipNav = HiddenA.extend`
  &:focus, &:active {
    top: 1em;
    left: 1em;
  }
`;

const BackToTop = HiddenA.extend`
  &:focus, &:active {
    bottom: 1em;
    right: 1em;
  }
`;

/**
 * MENU
 */

const Menu = ({ tags }) => (
  <MenuDiv>
    {tags &&
      <MenuSection>
        <MenuHeading>Work</MenuHeading>
        <MenuList>
          {tags.map(tag =>
            <li key={tag.id}><StyledLink href={`/${tag.slug}`}>{tag.title}</StyledLink></li>
          )}
        </MenuList>
      </MenuSection>
    }
    <MenuSection>
      <MenuHeading>Follow</MenuHeading>
      <MenuList>
        <li>
          <StyledLink href="https://github.com/sarenji">GitHub</StyledLink>
        </li>
        <li>
          <StyledLink href="https://twitter.com/davidnoob">Twitter</StyledLink>
        </li>
        <li>
          <StyledLink href="https://facebook.com/about.xhtm">Facebook</StyledLink>
        </li>
      </MenuList>
    </MenuSection>
    <MenuSection big>
      <MenuHeading>Biography</MenuHeading>
      <div>
        I write. Sometimes with code, sometimes with words.
        {' '}
        <StyledLink href="/about">About me &raquo;</StyledLink>
      </div>
    </MenuSection>
  </MenuDiv>
);

const MenuDiv = styled.div`
  font-size: 0.875em;
  margin-top: 1em;
  padding: 1em 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
`;

const MenuSection = styled.div`
  flex-grow: ${(prop => prop.big ? 2 : 1)};
  ${(prop) => prop.big && `
    width: 25%;
  `}
`;

const MenuList = styled.ul`
  list-style: square outside;
  padding: 0;
  margin: 0;
`;

const MenuHeading = styled.h2`
  font-size: 1em;
  font-weight: normal;
  line-height: 1.375em;
  margin: 0 0 0.5em 0;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

/**
 * LOGO
 */

const Logo = () => (
  <LogoHeader>
    <Link passHref href="/">
      <LogoA>david<span>.</span></LogoA>
    </Link>
  </LogoHeader>
);

const LogoHeader = styled.h1`
  font-size: 2.7em;
  line-height: 1.019em;
  font-weight: normal;
  font-family: Lobster, cursive;
  margin: 0;
`;

const LogoA = styled.a`
  color: #344;
  text-decoration: none;
  transition: color 100ms linear;
  &:hover {
    color: #679;
  }
  span {
    padding-left: .05em;
    color: #c65;
  }
`;

/**
 * LAYOUT
 */
export default ({ children, tags, title = "David Peter" }) => (
  <TopOfPage id="top">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Lobster|PT+Sans:400,400i,700|PT+Serif:400,400i,700" rel="stylesheet"/>
    </Head>
    <SkipNav href="#content">Skip navigation</SkipNav>
    <Container>
      <header>
        <Logo/>
        <Menu tags={tags}/>
      </header>

      <main id="content">
        {children}
      </main>

    </Container>
    <BackToTop href="#top">Back to top</BackToTop>
  </TopOfPage>
);
