import Link from "next/link";
import css from "./index.less";

const Logo = () => (
  <div className={css.logoHeader}>
    <Link passHref href="/">
      <a className={css.logo}>
        david<span>.</span>
      </a>
    </Link>
  </div>
);

export default Logo;
