import React from 'react';
import FooterNavIcons from '../FooterNavIcons/FooterNavIcons';
import styles from './FooterCard.module.css';

const FooterCard = () => {

  return (
    <div className={styles.footerCard}>
      <a href="/">
        <h2 className={styles.footerLogo}>LOGOTYPE</h2>
      </a>
      <div className={styles.footerCardTextBlock}>
        <p className={styles.footerCardText}>Lorem Ipsum is simply dummy</p>
        <p className={styles.footerCardText}>
          when an unknown printer took a galley of type and scrambled it
          <span>
            to make a type specimen book. It has survived not only five
          </span>
        </p>
      </div>
      <FooterNavIcons />
    </div>
  );
};

export default FooterCard;
