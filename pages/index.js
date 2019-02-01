import { Fragment } from "react";
import Link from "@dpeter/components/Link";
import MetaInfo from "@dpeter/components/MetaInfo";
import stories from "@dpeter/preval/stories";

const latestStories = [...stories].sort(
  ({ meta: { date: a } }, { meta: { date: b } }) => {
    return new Date(b) - new Date(a);
  }
);

const Index = () => (
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

export default Index;
