import React from 'react';
import icon from '../../images/icons.svg';
import styles from './SocialLinks.module.css';

const SocialLinks = () => {
  return (
    <div>
      <ul className={styles.socialLinksBar}>
        <li className={styles.fbIcon}>
          <a href="/public/page404.html" target="_blank">
            <svg width="12" height="21" fill="#fff" aria-label="Facebook">
              <use xlinkHref={`${icon}#facebook`} />
            </svg>
          </a>
        </li>
        <li className={styles.twitterIcon}>
          <a href="/public/page404.html" target="_blank" aria-label="Twitter">
            <svg width="20" height="17" fill="#fff">
              <use xlinkHref={`${icon}#twitter`} />
            </svg>
          </a>
        </li>
        <li className={styles.telegramIcon}>
          <a href="/public/page404.html" target="_blank" aria-label="Telegram">
            <svg width="20" height="16" fill="#fff">
              <use xlinkHref={`${icon}#telegram`} />
            </svg>
          </a>
        </li>
        <li className={styles.pinterestIcon}>
          <a href="/public/page404.html" target="_blank" aria-label="Pinterest">
            <svg width="15" height="21" fill="#fff">
              <use xlinkHref={`${icon}#pinterest`} />
            </svg>
          </a>
        </li>
        <li className={styles.faceIcon}>
          <a href="/public/page404.html" target="_blank">
            <svg width="19" height="19" fill="#fff" aria-label="Face">
              <use xlinkHref={`${icon}#face`} />
            </svg>
          </a>
        </li>
        <li className={styles.heartIcon}>
          <a href="/public/page404.html" target="_blank">
            <svg width="16" height="15" fill="#fff" aria-label="Heart">
              <use xlinkHref={`${icon}#heart`} />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
