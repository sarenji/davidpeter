import Link from "next/link";
import css from "./index.less";

const Logo = () => (
  <h1 className={css.logoHeader}>
    <Link passHref href="/">
      <a className={css.logo}>
        david<span>.</span>
      </a>
    </Link>
  </h1>
);

export default Logo;
