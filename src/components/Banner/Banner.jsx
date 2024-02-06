import React, { useState } from 'react';
import avatar from '../../images/Banner/banner-ava.png';
import icon from '../../images/icons.svg';
import styles from './Banner.module.css';

import DownloadButtons from './DownloadButtons/DownloadButtons';
import Widget from 'components/Banner/Widget/Widget';
import ProgressBarRange from './Widget/ProgressBarRange/ProgressBarRange';
import BannerMenu from './BannerMenu/BannerMenu';

const Banner = () => {
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { value: 'Lorem Ipsum is simply dummy' },
    { value: 'item' },
    { value: 'item' },
    { value: 'item' },
    { value: 'item' },
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.banner}>
        <img src={avatar} alt="User avatar" className={styles.ava} />
        <h2 className={styles.bannerText}>Lorem Ipsum is simply dummy</h2>
        <div className={styles.btnsBlock}>
          <DownloadButtons />
        </div>
        <div className={styles.bannerWidget}>
          <Widget />
        </div>
      </div>
      <div className={styles.bannerMenuWrapper}>
        <div className={styles.bannerMenuItemsDesktop}>
          <BannerMenu items={items} />
        </div>
        <div className={styles.bannerMenu}>
          <h3 className={styles.bannerMenuText}>More info</h3>
          <button
            type="button"
            className={styles.bannerMenuOpen}
            onClick={() => setMenuActive(!menuActive)}
            aria-label={menuActive ? 'Close menu' : 'Open menu'}
          >
            <svg width="20" height="16" fill="var(--main-text)">
              <use xlinkHref={`${icon}#banner-burger`} />
            </svg>
          </button>
          <div className={styles.barRangeComponent}>
            <ProgressBarRange />
          </div>
      </div>
      </div>
      <BannerMenu
        items={items}
        active={!menuActive}
        setActive={setMenuActive}
      />
    </section>
  );
};

export default Banner;
