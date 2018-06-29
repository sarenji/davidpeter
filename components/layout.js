import Link from "next/link";
import Head from "next/head";

import styled from 'styled-components';

const Container = styled.div`
  margin: 1em auto;
  max-width: 640px;
  font: 100% "PT Sans", "Helvetica Neue", sans-serif;
  color: #344;
`;

/**
 * MENU
 */

const Menu = () => (
  <MenuDiv>
    <MenuSection>
      <MenuHeading>Work</MenuHeading>
      <MenuList>
        <li><MenuLink href="/photos">photos</MenuLink></li>
        <li><MenuLink href="/stories">stories</MenuLink></li>
        <li><MenuLink href="/projects">projects</MenuLink></li>
      </MenuList>
    </MenuSection>
    <MenuSection>
      <MenuHeading>Follow</MenuHeading>
      <MenuList>
        <li>
          <MenuLink href="https://github.com/sarenji">GitHub</MenuLink>
        </li>
        <li>
          <MenuLink href="https://twitter.com/davidnoob">Twitter</MenuLink>
        </li>
        <li>
          <MenuLink href="https://facebook.com/about.xhtm">Facebook</MenuLink>
        </li>
      </MenuList>
    </MenuSection>
    <MenuSection big>
      <MenuHeading>Biography</MenuHeading>
      <div>
        I code and write. Once upon a time, I liked making things.
              {' '}
        <MenuLink href="/resume">See resume &raquo;</MenuLink>
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

const MenuLink = ({ children, ...props }) =>
  <Link passHref {...props}><MenuA>{children}</MenuA></Link>;

const MenuA = styled.a`
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
export default ({ children, title = "David Peter" }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Lobster|PT+Sans:400,400i,700|PT+Serif:400,400i,700" rel="stylesheet"/>
    </Head>
    <Container>
      <header>
        <Logo/>
        <Menu/>
      </header>

      {children}

    </Container>
  </div>
);
