import Link from "next/link";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import ThemeToggle from "../../ThemeToggle";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.headerContainer}>
      <Link className={styles.logo} href="/">
        The Dean Dsouza Mindset
      </Link>
      <Navbar  />
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
