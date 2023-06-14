import Link from "next/link";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import ThemeToggle from "../../Common/ThemeToggle";
import styles from "./Header.module.css";
import NavMenu from "../NavMenu/NavMenu";
import AvatarCpt from "../../Common/Avatar/Avatar";

const Header = (avatar: any) => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(avatar)
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <AvatarCpt img={avatar} />
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
