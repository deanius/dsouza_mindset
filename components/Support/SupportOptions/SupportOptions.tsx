import React from "react";
import styles from "./SupportOptions.module.css";
import OptionItem from "./OptionItem/OptionItem";

const SupportOptions = ({ active, heading, data }: any) => {
  return (
    <div className={styles.supportOptions}>
      <h2>{heading}</h2>
      {data.map((creator: any) => (
        <>
          <OptionItem data={creator} />
        </>
      ))}
    </div>
  );
};

export default SupportOptions;
