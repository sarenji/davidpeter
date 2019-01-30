import { Fragment } from "react";
import stories from "@dpeter/preval/stories";

const latestStories = [...stories].sort(({ date: a }, { date: b }) => {
  return new Date(b) - new Date(a);
});

const Index = () => (
  <Fragment>
    <h1>Personal writing</h1>
    {latestStories.map(({ date, spoiler, title, url }) => {
      return (
        <div key={url}>
          <h2>
            <a href={url}>{title}</a>
          </h2>
          <p>{spoiler}</p>
        </div>
      );
    })}
  </Fragment>
);

export default Index;
