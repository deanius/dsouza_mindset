import React from "react";
import styles from "./SupportMeButtons.module.css";

const SupportMeButtons = ({ active }: any) => {
  return (
    <div className={styles.supportMeButtons}>
      <a href="/hi" className={styles.patreon}>
        Patreon
      </a>
      <a href="/hi" className={styles.gofundme}>
        GoFundMe
      </a>
      <a href="/hi" className={styles.wishlist}>
        My Wishlist
      </a>
    </div>
  );
};

export default SupportMeButtons;
