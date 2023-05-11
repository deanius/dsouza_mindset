import Link from "next/link";
import styles from "./NavMenu.module.css"

const NavMenu = ({setMenuOpen}:any) => {
  return (
    <nav className={styles.navMenu}>
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
      <div onClick={()=>{
        setMenuOpen(false)
      }}>close</div>
    </nav>
  );
};

export default NavMenu;
