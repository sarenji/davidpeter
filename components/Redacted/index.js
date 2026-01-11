import React from "react";
import styles from "./Redacted.module.css";

const Redacted = ({ text = "redacted" }) => {
  return <span className={styles.redacted}>[{text}]</span>;
};

export default Redacted;
