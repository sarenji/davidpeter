import { Fragment } from "react";
import format from "date-fns/format";
import css from "./index.less";

const MetaInfo = ({ date, wordCount }) => {
  return (
    <p className={css.meta}>
      {format(date, "MMMM YYYY")} &middot;{" "}
      <EstimatedReadTime wordCount={wordCount} />
    </p>
  );
};

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

export default MetaInfo;
