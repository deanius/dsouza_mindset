import Link from "next/link";
import styles from "./Button.module.css";

type ButtonProps = {
  name: string | any;
  location: string | any;
};

const Button = ({ name, location }: ButtonProps) => {
  return (
    <Link href={location}>
      <button className={styles.button}>{name}</button>
    </Link>
  );
};

export default Button;
