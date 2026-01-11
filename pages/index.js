import { Fragment } from "react";
import Link from "#components/Link";
import MetaInfo from "#components/MetaInfo";
import stories from "#preval/stories";

console.log(stories);

const latestStories = [...stories].sort(
  ({ meta: { date: a } }, { meta: { date: b } }) => {
    return new Date(b) - new Date(a);
  }
);

export default () => (
  <Fragment>
    <h1>Personal writing</h1>
    {latestStories.map(({ url, meta: { date, spoiler, title, wordCount } }) => {
      return (
        <div key={url}>
          <h2>
            <Link href={url}>{title}</Link>
          </h2>
          <MetaInfo date={date} wordCount={wordCount} />
          <p>{spoiler}</p>
        </div>
      );
    })}
  </Fragment>
);
