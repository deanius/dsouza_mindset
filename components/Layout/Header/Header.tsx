import Link from "next/link";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import ThemeToggle from "../../ThemeToggle";
import styles from "./Header.module.css";

const Header = () => {
  const isViewportOver768px = window.innerWidth > 768;
  const [isMenuOpen, setIsMenuOpen] = useState(isViewportOver768px ? true : false);

  return (
    <header className={styles.headerContainer}>
      <Link className={styles.logo} href="/">
        The Dean Dsouza Mindset
      </Link>
      {isMenuOpen && <Navbar />}
      <div
        className={styles.hamburger}
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        Menu
      </div>
      <ThemeToggle />
    </header>
  );
};

export default Header;
