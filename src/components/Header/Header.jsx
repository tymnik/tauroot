import React, { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import styles from "./Header.module.css";
import logo from "../../images/logo-dark.png";
import MobMenu from "./MobMenu/MobMenu";
import HeaderNavIcons from "./HeaderNavIcons/HeaderNavIcons";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";

const Header = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const onOpenMobileMenu = () => setIsOpenMobileMenu(!isOpenMobileMenu);

  const [isOpen, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <HeaderNavIcons />
        <ThemeSwitcher />
      </div>
      <div className={styles.headerBottom}>
        <a href="/">
          <img src={logo} alt="logo" className={styles.logo} />
        </a>
        <button
          type="button"
          className={styles.burgerMenuOpen}
          onClick={() => onOpenMobileMenu()}
        >
          <Hamburger
            color="#2A86E5"
            toggled={isOpen}
            size={26}
            rounded
            toggle={setOpen}
            label="Show menu"
          />
        </button>
      </div>
      <MobMenu
        setIsOpenMobileMenu={setIsOpenMobileMenu}
        isOpenMobileMenu={isOpenMobileMenu}
      />
    </header>
  );
};

export default Header;
