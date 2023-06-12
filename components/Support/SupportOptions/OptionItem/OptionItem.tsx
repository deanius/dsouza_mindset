import React from "react";
import styles from "./OptionItem.module.css";

const OptionItem = ({ data }: any) => {
  console.log(data.fields);
  return (
    <div className={styles.optionItem}>
      <div className={styles.optionInfo}>
        <h4>
          {data.fields.creatorName
            ? data.fields.creatorName
            : data.fields.charityName}
        </h4>
        <p>{data.fields.about}</p>
        <a href={data.fields.link}>Learn More</a>
      </div>
      <div className={styles.optionImg}>
        <img src={data.fields.image.fields.file.url} alt="" />
      </div>
    </div>
  );
};

export default OptionItem;
