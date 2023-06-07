import Image from "next/image";
import styles from "./Hero.module.css";
import Button from "../../Common/Buttons/Button";

const Hero = () => {
  return (
    <div className={styles.heroContain}>
      <Image
        className={styles.heroImg}
        src="/hero.png"
        alt="Hero Image of Dean"
        width={342}
        height={388}
      />
      <div className={styles.heroInfo}>
        <h1>The Dean Dsouza Mindset</h1>
        <p className="subheading">The mission statement for the website.</p>
        <div className={styles.btnContain}>
          <Button name="About Me" location="about" />
          <Button name="View Blog" location="blog" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
