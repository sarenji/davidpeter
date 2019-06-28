import React from "react";
import PropTypes from "prop-types";
import styles from "./Redacted.less";

const Redacted = ({ text = "redacted" }) => {
  return <span className={styles.redacted}>[{text}]</span>;
};

Redacted.propTypes = {
  text: PropTypes.string
};

export default Redacted;
