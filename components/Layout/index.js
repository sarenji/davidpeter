import Head from "next/head";
import cx from "classnames";
import Logo from "@dpeter/components/Logo";
import Menu from "@dpeter/components/Menu";
import css from "./index.less";

const Layout = ({ children }) => (
  <div id="top" tabIndex={-1} className="relative">
    <Head>
      <title>David Peter</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Lobster|Libre+Baskerville"
        rel="stylesheet"
      />
    </Head>

    <div className={css.body}>
      <header>
        <a
          className={cx("sr-only sr-only-focusable", css.skipNav)}
          href="#content"
        >
          Skip navigation
        </a>
        <Logo />
        <Menu />
      </header>

      <main id="content">{children}</main>
    </div>

    <footer>
      <a className={cx("sr-only sr-only-focusable", css.backToTop)} href="#top">
        Back to top
      </a>
    </footer>
  </div>
);

export default Layout;
