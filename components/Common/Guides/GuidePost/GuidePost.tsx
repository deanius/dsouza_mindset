import React from "react";
import styles from "../Guides.module.css";

const GuidePost = () => {
  return (
    <div className={styles.guidePost}>
      <div className={styles.postImg}>
        <img
          src="https://images.unsplash.com/photo-1642425146609-6c8ff4589d18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxJT1N3UklhMVREOHx8ZW58MHx8fHx8&w=1000&q=80"
          alt=""
        />
      </div>
      <div className={styles.postInfo}>
        <span>22nd May</span>
        <h4>Eating Healthy - A Guide to Nourishing your body.</h4>
        <p>Travel Guide</p>
      </div>
    </div>
  );
};

export default GuidePost;
