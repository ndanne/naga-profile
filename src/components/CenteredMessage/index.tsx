import React from "react";
import styles from "./index.module.scss";

interface CenteredMessageProps {
  children: React.ReactNode;
}

const CenteredMessage: React.FC<CenteredMessageProps> = ({ children }) => (
  <div className={styles.centeredWrapper}>
    <div className={styles.centeredText}>{children}</div>
  </div>
);

export default CenteredMessage;
