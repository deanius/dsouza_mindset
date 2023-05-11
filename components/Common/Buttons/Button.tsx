import Link from "next/link";
import styles from "./Button.module.css";

type ButtonProps = {
  name: string | any;
  location: string | any;
};

const Button = ({ name, location }: ButtonProps) => {
  return (
    <button className={styles.button}>
      <Link href={location}>{name}</Link>
    </button>
  );
};

export default Button;
