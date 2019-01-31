import cx from "classnames";

import Link from "@dpeter/components/Link";
import SocialIcon from "@dpeter/components/SocialIcon";
import css from "./index.less";

const SocialIcons = () => {
  return (
    <div className={css.footer}>
      <div className="sr-only">Follow me</div>
      <ul className={css.list}>
        <li>
          <Link href="https://github.com/sarenji">
            <SocialIcon icon="github" />
            <span className="sr-only">GitHub</span>
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/davidnoob">
            <SocialIcon icon="twitter" />
            <span className="sr-only">Twitter</span>
          </Link>
        </li>
        <li>
          <Link href="https://facebook.com/about.xhtm">
            <SocialIcon icon="facebook" />
            <span className="sr-only">Facebook</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <SocialIcons />
      <a className={cx("sr-only sr-only-focusable", css.backToTop)} href="#top">
        Back to top
      </a>
    </footer>
  );
};

export default Footer;
