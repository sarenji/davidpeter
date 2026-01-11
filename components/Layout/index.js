import Head from "next/head";
import Header from "#components/Header";
import Footer from "#components/Footer";
import css from "./index.module.css";

import "./global.css";

const Layout = ({ children }) => (
  <html>
    <body>
      <div id="top" tabIndex={-1} className="relative">
        <Head>
          <title>David Peter</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta
            name="description"
            content="David Peter writes, sometimes with code, sometimes with words."
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@davidnoob" />
          <meta name="twitter:title" content="David Peter" />
          <link
            href="https://fonts.googleapis.com/css?family=Lobster|Libre+Baskerville"
            rel="stylesheet"
          />
        </Head>

        <div className={css.body}>
          <Header />

          <main id="content">{children}</main>

          <Footer />
        </div>
      </div>
    </body>
  </html>
);

export default Layout;
