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
  const calculateReadingTime = (text: string): string => {
    // Assuming an average reading speed of 200 words per minute
    const wordsPerMinute = 200;
    const words = text.split(" ");
    const readingTime = Math.ceil(words.length / wordsPerMinute);

    return `${readingTime} minute read`;
  };
  console.log(slug)
  return (
    <div className={styles.post} key={id}>
      <div className={styles.titleContain}>
        <img src={img} alt="ok" />
        <h3>{title}</h3>
      </div>
      <div className={styles.postContent}>{preview}</div>
      <div className={styles.readingTime}>
        {calculateReadingTime(content)}
      </div>
      <Button name="Read More" location={`/blog/${slug}`} />
    </div>
  );
};

export default Post;
