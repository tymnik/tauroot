import React, { useState} from 'react';
import MenuListHeader from './MenuListHeader/MenuListHeader';
import HeaderNavIcons from './HeaderNavIcons/HeaderNavIcons';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';
import MobMenu from './MobMenu/MobMenu';
import SearchBar from '../Header/SearchBar/SearchBar';
import ItemsList from '../Header/ItemsList/ItemsList';
import MenuList from '../Header/MenuList/MenuList';
import icon from '../../images/icons.svg';
import logoLight from '../../images/logo-dark.png';
import logoDark from '../../images/logo-light.png';
import styles from './Header.module.css';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { value: <SearchBar /> },
    { value: <ItemsList /> },
    { value: <MenuList /> },
  ];

   const [darkMode, setDarkMode] = useState(false);

   const handleThemeChange = newDarkMode => {
     setDarkMode(newDarkMode);
   };

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerTopWrapper}>
          <div className={styles.headerTop}>
            <div className={styles.menuListWideScreen}>
              <MenuListHeader />
            </div>
            <HeaderNavIcons />
            <ThemeSwitcher onThemeChange={handleThemeChange} />
          </div>
        </div>
        <div className={styles.headerBottomWrapper}>
          <div className={styles.headerBottom}>
            <a href="/">
              <img
                src={darkMode ? logoDark : logoLight}
                alt="logo"
                className={styles.logo}
              />
            </a>
            <button
              type="button"
              className={styles.burgerButton}
              onClick={() => setMenuActive(!menuActive)}
            >
              <svg width="26" height="22" className={styles.burger} fill='var(--main-blue)'>
                <use xlinkHref={`${icon}#burger`} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <MobMenu items={items} active={!menuActive} setActive={setMenuActive} />
    </header>
  );
};

export default Header;
