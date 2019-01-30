import Link from "@dpeter/components/Link";
import css from "./index.less";

const Menu = () => (
  <div className={css.menu}>
    {/* {tags && (
      <div>
        <h2 className={css.heading}>Work</h2>
        <ul className={css.list}>
          {tags.map(tag => (
            <li key={tag.id}>
              <Link href={`/${tag.slug}`}>{tag.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    )} */}
    <div className={css.section}>
      <h2 className={css.heading}>Follow me</h2>
      <ul className={css.list}>
        <li>
          <Link href="https://github.com/sarenji">GitHub</Link>
        </li>
        <li>
          <Link href="https://twitter.com/davidnoob">Twitter</Link>
        </li>
        <li>
          <Link href="https://facebook.com/about.xhtm">Facebook</Link>
        </li>
      </ul>
    </div>
    <div className={css.section}>
      <h2 className={css.heading}>Biography</h2>
      <div>
        I write. Sometimes with code, sometimes with words.{" "}
        <Link href="/about">About me &raquo;</Link>
      </div>
    </div>
  </div>
);

export default Menu;
