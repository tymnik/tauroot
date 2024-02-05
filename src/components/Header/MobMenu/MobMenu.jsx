import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import ItemsList from "../ItemsList/ItemsList";
import MenuList from "../MenuList/MenuList";
import styles from "./MobMenu.module.css";

const MobMenu = ({ setIsOpenMobileMenu, isOpenMobileMenu }) => {
  return (
    <div
      className={`${styles.mobileMenu} ${isOpenMobileMenu && styles.isOpen}`}
      >
      <SearchBar />
      <ItemsList />
      <MenuList />
    </div>
  );
};

export default MobMenu;
