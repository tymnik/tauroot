import React, { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import avatar from "../../images/Banner/banner-ava.png";
import BannerMenu from "./BannerMenu/BannerMenu";
import styles from "./Banner.module.css";

const Banner = () => {
  const [isOpenBannerMenu, setIsOpenBannerMenu] = useState(false);
  const onOpenBannerMenu = () => setIsOpenBannerMenu(!isOpenBannerMenu);

  const [isOpen, setOpen] = useState(false);

  return (
    <section className={styles.hero}>
      <div className={styles.banner}>
        <img src={avatar} alt="User avatar" className={styles.ava} />
        <h2 className={styles.bannerText}>Lorem Ipsum is simply dummy</h2>
      </div>
      <div className={styles.bannerMenu}>
        <h3 className={styles.bannerMenuText}>More info</h3>
        <button
          type="button"
          className={styles.bannerMenuOpen}
          onClick={() => onOpenBannerMenu()}
        >
          <Hamburger
            color="#707070"
            toggled={isOpen}
            size={20}
            rounded
            toggle={setOpen}
            label="Show menu"
          />
        </button>
        <BannerMenu isOpenBannerMenu={isOpen} setIsOpenBannerMenu={setOpen} />
      </div>
    </section>
  );
};

export default Banner;
