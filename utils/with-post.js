import { Fragment } from "react";
import Head from "next/head";

import MetaInfo from "@dpeter/components/MetaInfo";

const withPost = ({ title, date, spoiler, wordCount }) => ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>{title} | David Peter</title>
        <meta name="description" content={spoiler} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={spoiler} />
      </Head>
      <h1>{title}</h1>
      <MetaInfo date={date} wordCount={wordCount} />
      {children}
    </Fragment>
  );
};

export default withPost;
