import { Fragment } from "react";

import MetaInfo from "@dpeter/components/MetaInfo";

const withPost = ({ title, date, wordCount }) => ({ children }) => {
  return (
    <Fragment>
      <h1>{title}</h1>
      <MetaInfo date={date} wordCount={wordCount} />
      {children}
    </Fragment>
  );
};

export default withPost;
