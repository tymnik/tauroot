import React from "react";
import styles from "./BannerMenu.module.css";

const BannerMenu = ({ setIsOpenBannerMenu, isOpenBannerMenu }) => {
  return (
    <div
      className={`${styles.bannerMenu} ${
        isOpenBannerMenu ? styles.isOpen : ""
      }`}
    >
      <ul className={styles.bannerList}>
        <li className={styles.currentItem}>Lorem Ipsum is simply dummy</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </ul>
    </div>
  );
};

export default BannerMenu;
