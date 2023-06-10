import Link from "next/link";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import ThemeToggle from "../../Common/ThemeToggle";
import styles from "./Header.module.css";
import NavMenu from "../NavMenu/NavMenu";
import AvatarCpt from "../../Common/Avatar/Avatar";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <AvatarCpt />
        The Dean Dsouza Mindset
      </Link>
      <Navbar />
      {menuOpen && <NavMenu setMenuOpen={setMenuOpen} />}
      <div
        className={styles.hamburger}
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        Menu
      </div>
    </header>
  );
};

export default Header;
