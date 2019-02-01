import Link from "next/link";

export default ({ children, className, ...props }) => (
  <Link {...props}>
    <a className={className}>{children}</a>
  </Link>
);
