import { withRouter } from "next/router";

import Link from "#components/Link";
import Logo from "#components/Logo";
import css from "./index.module.css";

const Header = ({ router }) => (
  <header>
    <div className={css.header}>
      <div className={css.left}>
        <Logo />
      </div>
      <div className={css.right}>
        I write. Sometimes with code, sometimes with words.{" "}
        <Link href="/about">About me &raquo;</Link>
      </div>
    </div>
  </header>
);

export default withRouter(Header);
