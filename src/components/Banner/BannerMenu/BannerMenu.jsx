import React from "react";
import styles from "./BannerMenu.module.css";

const BannerMenu = ({ items, active, setActive }) => {
  return (
    <div
      className={active ? `${styles.bannerMenu} ${styles.active}` : styles.menu}
      onClick={() => setActive(false)}
    >
      <ul className={styles.bannerContent}>
        {items.map((item, index) => (
          <li key={index}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default BannerMenu;
