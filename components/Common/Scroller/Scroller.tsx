import React from "react";
import styles from "./Scroller.module.css"

const Scroller = () => {
  return (
    <div className={styles.scroller}>
      <svg
        width="25"
        height="41"
        viewBox="0 0 25 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1"
          y="40"
          width="39"
          height="23"
          rx="11.5"
          transform="rotate(-90 1 40)"
          stroke="#242556"
          stroke-width="2"
        ></rect>
        <line
          x1="12"
          y1="29"
          x2="12"
          y2="21"
          stroke="#242556"
          stroke-width="2"
          stroke-linecap="round"
        ></line>
      </svg>
    </div>
  );
};

export default Scroller;
