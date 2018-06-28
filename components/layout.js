import Link from "next/link";
import Head from "next/head";

export default ({ children, title = "David Peter" }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Lobster|PT+Sans:400,400i,700|PT+Serif:400,400i,700" rel="stylesheet"/>
    </Head>
    <div className="container">
      <header>
        <h1>
          <Link href="/">
            <a>david<span>.</span></a>
          </Link>
        </h1>
        <div className="info">
          <div className="box">
            <h2>Work</h2>
            <ul>
              <li><Link href="/photos"><a>photos</a></Link></li>
              <li><Link href="/stories"><a>stories</a></Link></li>
              <li><Link href="/projects"><a>projects</a></Link></li>
            </ul>
          </div>
          <div className="box">
            <h2>Follow</h2>
            <ul>
              <li>
                <a href="https://github.com/sarenji">GitHub</a>
              </li>
              <li>
                <a href="https://twitter.com/davidnoob">Twitter</a>
              </li>
              <li>
                <a href="https://facebook.com/about.xhtm">Facebook</a>
              </li>
            </ul>
          </div>
          <div class="box big">
            <h2>Biography</h2>
            <p>
              I code and write. Once upon a time, I liked making things.
              {' '}
              <Link href="/resume"><a>See resume &raquo;</a></Link>
            </p>
          </div>
        </div>
      </header>

      {children}

    </div>
    <style jsx>{`
      .container {
        margin: 1em auto;
        max-width: 640px;
        font: 100% "PT Sans","Helvetica Neue",sans-serif;
        color: #344;
      }
      h1 {
        font-size: 2.7em;
        line-height: 1.019em;
        font-weight: normal;
        font-family: Lobster, cursive;
        margin: 0;
      }
      h1 a {
        color: #344;
        text-decoration: none;
        transition: color 100ms linear;
      }
      h1 a:hover {
        color: #679;
        background: none;
      }
      h1 a span {
        padding-left: .05em;
        color: #c65;
      }

      .info {
        font-size: 0.875em;
        margin-top: 1em;
        padding: 1em 0;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
      }

      .info .box {
        flex-grow: 1;
        width: 25%;
      }

      .info .box.big {
        flex-grow: 2;
        width: auto;
      }

      .info h2 {
        font-size: 1em;
        font-weight: normal;
        line-height: 1.375em;
        margin: 0 0 0.5em 0;
        text-transform: uppercase;
        letter-spacing: 0.1em;
      }

      .info ul {
        list-style: square outside;
        padding: 0;
        margin: 0;
      }

      .info p {
        padding: 0;
        margin: 0;
      }

      a {
        position: relative;
        color: #c65;
        text-decoration: none;
        padding: 6px 0 3px;
        transition: background-color 100ms linear, color 100ms linear;
      }

      a:hover {
        background: #344;
        color: #fff;
        text-decoration: none;
        border-radius: 2px;
      }
    `}</style>
  </div>
);
