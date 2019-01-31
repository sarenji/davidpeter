import { withRouter } from "next/router";
import cx from "classnames";

import Link from "@dpeter/components/Link";
import Logo from "@dpeter/components/Logo";
import css from "./index.less";

const Header = ({ router }) => (
  <header>
    <a href="#content" className={cx("sr-only sr-only-focusable", css.skipNav)}>
      Skip navigation
    </a>
    <div className={css.header}>
      <div className={css.left}>
        <Logo />
      </div>
      {router.pathname === "/" && (
        <div className={css.right}>
          I write. Sometimes with code, sometimes with words.{" "}
          <Link href="/about">About me &raquo;</Link>
        </div>
      )}
    </div>
  </header>
);

export default withRouter(Header);
