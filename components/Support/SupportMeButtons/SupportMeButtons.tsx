import React from "react";
import styles from "./SupportMeButtons.module.css";

const SupportMeButtons = ({ active }: any) => {
  return (
    <div className={styles.supportMeButtons}>
      <a
        href="https://wishlist.com/l/gZkpZN"
        className={styles.wishlist}
        target="_blank"
        rel="noopener noreferrer"
      >
        My Wishlist
      </a>
      <a
        href="/hi"
        className={styles.patreon}
        target="_blank"
        rel="noopener noreferrer"
      >
        [In Development] Patreon 
      </a>
      <a
        href="/hi"
        className={styles.gofundme}
        target="_blank"
        rel="noopener noreferrer"
      >
        [In Development] GoFundMe
      </a>
    </div>
  );
};

export default SupportMeButtons;
