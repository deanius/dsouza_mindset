import Image from "next/image";
import styles from "./Hero.module.css";
import Button from "../../Common/Buttons/Button";

const Hero = ({ title, statement, img }: any) => {
  return (
    <div className={styles.heroContain}>
      <img
        className={styles.heroImg}
        src={`https:${img}`}
        alt="Hero Image of Dean"
        width={342}
        height={388}
      />
      <div className={styles.heroInfo}>
        <h1>{title}</h1>
        <p className="subheading">{statement}</p>
        <div className={styles.btnContain}>
          <Button name="About Me" location="about" />
          <Button name="View Blog" location="blog" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
