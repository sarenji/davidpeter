import { Fragment } from "react";
import format from "date-fns/format";
import stories from "@dpeter/preval/stories";

import css from "./index.less";

const latestStories = [...stories].sort(({ date: a }, { date: b }) => {
  return new Date(b) - new Date(a);
});

const EstimatedReadTime = ({ wordCount }) => {
  // People read on average 200-250 words per minute.
  const minutes = wordCount / 250;
  const minutesRounded = Math.ceil(minutes);
  const coffees = Math.max(1, Math.floor(minutesRounded / 5));
  return (
    <Fragment>
      {new Array(coffees).fill(0).map(() => "☕️")}
      {minutesRounded === 1 ? "1 minute" : `${minutesRounded} minutes`}
    </Fragment>
  );
};

const Index = () => (
  <Fragment>
    <h1>Personal writing</h1>
    {latestStories.map(({ date, spoiler, title, url, wordCount }) => {
      return (
        <div key={url}>
          <h2>
            <a href={url}>{title}</a>
          </h2>
          <p className={css.meta}>
            {format(date, "MMMM YYYY")} &middot;{" "}
            <EstimatedReadTime wordCount={wordCount} />
          </p>
          <p>{spoiler}</p>
        </div>
      );
    })}
  </Fragment>
);

export default Index;
