import React from "react";
import styles from "./SupportButtons.module.css";
import Button from "../../Common/Buttons/Button";

const SupportButtons = ({ active, setActive }: any) => {
  return (
    <div className={styles.supportButtons}>
      <div
        onClick={() => {
          active !== "creators" ? setActive("creators") : setActive("");
        }}
        className={active === "creators" ? styles.inactive : ""}
      >
        <Button name="Creators" location="#" />
      </div>
      <div
        onClick={() => {
          active !== "charities" ? setActive("charities") : setActive("");
        }}
        className={active === "charities" ? styles.inactive : ""}
      >
        <Button name="Charities" location="#" />
      </div>
      <div
        onClick={() => {
          active !== "supportMe" ? setActive("supportMe") : setActive("");
        }}
        className={active === "supportMe" ? styles.inactive : ""}
      >
        <Button name="Support Me" location="#" />
      </div>
    </div>
  );
};

export default SupportButtons;
