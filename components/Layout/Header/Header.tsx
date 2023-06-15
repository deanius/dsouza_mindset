import Link from "next/link";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import ThemeToggle from "../../Common/ThemeToggle";
import styles from "./Header.module.css";
import NavMenu from "../NavMenu/NavMenu";
import AvatarCpt from "../../Common/Avatar/Avatar";
import Hamburger from "hamburger-react";

const Header = (avatar: any) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <AvatarCpt img={avatar} />
        <p>The Dean Dsouza Mindset</p>
        
      </Link>
      <Navbar />
      {menuOpen && <NavMenu setMenuOpen={setMenuOpen} />}
      <div
        className={styles.hamburger}
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
      </div>
    </header>
  );
};

export default Header;
