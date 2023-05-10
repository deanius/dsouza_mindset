import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <h3>The Dean Dsouza Mindset</h3>
        <p>Copyright © {new Date().getFullYear()}</p>
      </div>
      <div>
        <h3>Links</h3>
        <ul>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/guides">Guides</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/support">Support</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
