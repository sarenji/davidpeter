import instagram from "simple-icons/icons/instagram";
import twitter from "simple-icons/icons/twitter";
import github from "simple-icons/icons/github";
import facebook from "simple-icons/icons/facebook";

import css from "./index.less";

const lookup = {
  instagram,
  twitter,
  github,
  facebook
};

const SocialIcon = ({ icon, size }) => {
  const { svg } = lookup[icon];
  return (
    <span
      className={css.icon}
      style={{ width: size, height: size }}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

SocialIcon.defaultProps = {
  size: 24
};

export default SocialIcon;
