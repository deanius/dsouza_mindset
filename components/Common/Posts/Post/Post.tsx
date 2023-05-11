import React from "react";
import styles from "../Posts.module.css";
import Button from "../../Buttons/Button";

const Post = ({ id, title, content, img, date }: any) => {
  return (
    <div className={styles.post} key={id}>
      <div className={styles.titleContain}>
        <img src={img} alt="ok" />
        <h3>{title}</h3>
      </div>
      <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: content }}></div>
      <Button name="Learn More" location="/about" />
    </div>
  );
};

export default Post;
