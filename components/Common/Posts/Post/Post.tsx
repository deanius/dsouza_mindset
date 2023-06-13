import React from "react";
import styles from "../Posts.module.css";
import Button from "../../Buttons/Button";
import Link from "next/link";

const Post = ({
  id,
  title,
  category,
  content,
  img,
  preview,
  date,
  slug,
}: any) => {
  console.log(slug)
  return (
    <div className={styles.post} key={id}>
      <div className={styles.titleContain}>
        <img src={img} alt="ok" />
        <h3>{title}</h3>
      </div>
      <div className={styles.postContent}>{preview}</div>
      <Button name="Read More" location={`/blog/${slug}`} />
    </div>
  );
};

export default Post;
