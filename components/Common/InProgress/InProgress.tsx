import Link from "next/link";
import React from "react";
import styles from "./InProgress.module.css";

const InProgress = () => {
  return (
    <div className={styles.inProgress}>
      <h1>Under Construction</h1>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default InProgress;
