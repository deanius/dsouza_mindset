import React from "react";
import styles from "./Activity.module.css";
import Button from "../../Common/Buttons/Button";

const Activity = () => {
  return (
    <div className={styles.activity}>
      <div className={styles.activityRow}>
        <div className={styles.activityInner}>
          <h3>Currently Watching:</h3>
          <div className={styles.activityItem}>
            <div className={styles.activityImg}>
              <img
                src="https://flxt.tmsimg.com/assets/p15455205_b_v8_ab.jpg"
                alt=""
              />
            </div>
            <div className={styles.itemInfo}>
              <h4>Succession</h4>
              <span>Series</span>

              <Button name="Letterboxd" location="" />
            </div>
          </div>
        </div>
        <div className={styles.activityInner}>
          <h3>Currently Reading:</h3>
          <div className={styles.activityItem}>
            <div className={styles.activityImg}>
              <img
                src="https://upload.wikimedia.org/wikipedia/it/c/cb/Chainsaw_Man_Volume_1.jpg"
                alt=""
              />
            </div>
            <div className={styles.itemInfo}>
              <h4>Chainsaw Man</h4>
              <span>Comic Series</span>

              <Button name="Goodreads" location="" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.activityRow}>
        <div className={styles.activityInner}>
          <h3>Currently Listening:</h3>
          <div className={styles.activityItem}>
            <div className={styles.activityImg}>
              <img
                src="https://cdn.theathletic.com/app/uploads/2023/01/03115107/Tifo_New_Podcast_Monogram_3000px_2022-1.png"
                alt=""
              />
            </div>
            <div className={styles.itemInfo}>
              <h4>Tifo Podcast</h4>
              <span>Podcast</span>
              <Button name="Spotify" location="" />
            </div>
          </div>
        </div>
        <div className={styles.activityInner}>
            <h3></h3>
          <div className={styles.activityItem}>
            <div className={styles.activityImg}>
              <img
                src="https://images.genius.com/f486d98c29e55b11cfb7b7d22d1ede47.1000x1000x1.jpg"
                alt=""
              />
            </div>
            <div className={styles.itemInfo}>
              <h4>KAYTRAMINÉ</h4>
              <span>Album</span>
              <Button name="Spotify" location="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
