import { withRouter } from "next/router";
import cx from "classnames";
import Link from "@dpeter/components/Link";
import css from "./index.less";

const Logo = ({ router }) => {
  const isHome = router.pathname === "/";
  return (
    <div className={css.logoHeader}>
      <Link
        href="/"
        className={cx({
          [css.logo]: isHome,
        })}
      >
        david
      </Link>
      <span aria-hidden="true" className={css.dot}>
        .
      </span>
    </div>
  );
};

export default withRouter(Logo);
