import React from "react";
import styles from "./Mission.module.css";

const Mission = () => {
  return (
    <div className={styles.mission}>
      <h2>Mission Statement </h2>
      <p>
      With The Dean Dsouza Mindset, our mission is to <b>inspire and empower</b> individuals on their journey to wellness, positivity, and mental health. 
      We believe that true strength lies in embracing ourselves for who we are, <b>strengths and flaws</b>.
      We aim to illuminate the power of <b>positivity and hope</b>, as extraordinary forces that can transform lives. 
      Through our platform, we strive to dismantle the stigma surrounding <b>mental health</b> and advocate for the exploration of <b>vulnerabilities</b>,
      as we believe it is a path towards personal growth and resilience. Join us as we embark on a transformative journey of self-discovery and embrace the beauty of being human.
      </p>
      <h3> Disclaimer</h3>
      <p style={{ fontSize: "10px" }}>
        I am not a licensed mental health professional, psychologist, or psychiatrist. 
        The information and suggestions provided on this website are entirely anecdotal and based solely on my personal experiences. 
        They are not intended as professional advice, diagnosis, or treatment for any mental health condition.
      </p>
      <p style={{ fontSize: "10px" }}>
        The content on this website is purely informational and should not be considered a substitute for seeking professional help or advice. 
        If you are experiencing mental health issues or concerns, 
        I strongly encourage you to consult a qualified mental health professional or healthcare provider.
      </p>
      <p style={{ fontSize: "10px" }}>
        By using this website and its content, you acknowledge and agree that any actions you take based on the information provided are at your own risk. 
        I disclaim any liability or responsibility for any damages or losses resulting from your use of this website or reliance on its content.
      </p>
    </div>
  );
};

export default Mission;
