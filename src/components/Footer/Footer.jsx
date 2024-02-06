import React from 'react';
import styles from './Footer.module.css';

import FooterCard from './FooterCard/FooterCard';
import FooterLists from './FooterLists/FooterLists';

const Footer = () => {
  return (
    <section className={styles.footerContainer}>
      <div className={styles.footer}>
        <div className={styles.footerWrapper}>
          <FooterCard/>
          <div className={styles.footerSecondBlock}>
            <FooterLists />
            <p className={styles.copyrightText}>
              Copyright &#xa9; 2024. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
