import React from "react";
import styles from "./AboutSection.module.css";

const AboutSection = ({ question, answer, image }: any) => {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.aboutInfo}>
        <h2>{question}</h2>
        <p>{answer}</p>
      </div>
      <div className={styles.aboutImage}>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default AboutSection;
