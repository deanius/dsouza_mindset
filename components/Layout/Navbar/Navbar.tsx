import Link from "next/link";
import styles from "./Navbar.module.css"


const Navbar = () => {
  return (
    <nav>
      <ul className={styles.navList}>
        <li>
          <Link className={styles.navLink} href="/about">About</Link>
        </li>
        <li>
          <Link className={styles.navLink} href="/blog">Blog</Link>
        </li>
        <li>
          <Link className={styles.navLink} href="/guides">Guides</Link>
        </li>
        <li>
          <Link className={styles.navLink} href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link className={styles.navLink} href="/contact">Contact</Link>
        </li>
        <li>
          <Link className={styles.navLink} href="/support">Support</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
