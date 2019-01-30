import { Fragment } from "react";

const Error = () => {
  return (
    <Fragment>
      <h1>404</h1>
      <p>
        This page could not be found! Maybe you should{" "}
        <a href="https://instagram.com/roxiethemuffin">
          follow my cat on Instagram
        </a>{" "}
        instead?
      </p>
    </Fragment>
  );
};

export default Error;
