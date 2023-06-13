import Link from "next/link";
import styles from "./Navbar.module.css";
import ThemeToggle from "../../Common/ThemeToggle";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const isActive = (path: string) => {
    if (router.pathname.startsWith(path)) {
      return { opacity: 0.3, PointerEvent:"none" }; // Set the active link color
    } else {
      null;
    }
  };

  return (
    <div className={styles.navbar}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link
              style={isActive("/about")}
              className={styles.navLink}
              href="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              style={isActive("/blog")}
              className={styles.navLink}
              href="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              style={isActive("/guides")}
              className={styles.navLink}
              href="/guides"
            >
              Guides
            </Link>
          </li>
          <li>
            <Link
              style={isActive("/portfolio")}
              className={styles.navLink}
              href="/portfolio"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              style={isActive("/contact")}
              className={styles.navLink}
              href="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              style={isActive("/support")}
              className={styles.navLink}
              href="/support"
            >
              Support
            </Link>
          </li>
        </ul>
      </nav>
      <ThemeToggle />
    </div>
  );
};

export default Navbar;
