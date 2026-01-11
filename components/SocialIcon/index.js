import instagram from "simple-icons/icons/instagram";
import twitter from "simple-icons/icons/twitter";
import github from "simple-icons/icons/github";
import facebook from "simple-icons/icons/facebook";

import css from "./index.module.css";

const lookup = {
  instagram,
  twitter,
  github,
  facebook
};

const SocialIcon = ({ icon, size = 24 }) => {
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

export default SocialIcon;
