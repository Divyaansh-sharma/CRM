import React from "react";
import styles from "../styles/pageNotFound.module.css";

export const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404: Page Not Found</h1>
      <p className={styles.message}>
        Oops! The page you're looking for doesn't exist.
      </p>
    </div>
  );
};
