import Link from "next/link";
import styles from "./Footer.module.css";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  const isActive = (path: any) => {
    if (router.pathname === path) {
      return { opacity: 0.3 }; // Set the active link color
    } else {
      null;
    }
  };

  return (
    <footer className={styles.footer}>
      <div>
        <h3>The Dean Dsouza Mindset</h3>
        <p>© {new Date().getFullYear()}. All Rights Reserved</p>
      </div>
      <div>
        <ul>
        <li>
            <Link
              style={isActive("/about")}
              href="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              style={isActive("/blog")}
              href="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              style={isActive("/guides")}
              href="/guides"
            >
              Guides
            </Link>
          </li>
          <li>
            <Link
              style={isActive("/portfolio")}
              href="/portfolio"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              style={isActive("/contact")}
              href="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              style={isActive("/support")}
              href="/support"
            >
              Support
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
