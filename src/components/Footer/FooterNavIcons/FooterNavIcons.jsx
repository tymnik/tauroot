import React from "react";
import icon from "../../../images/icons.svg";
import styles from "./FooterNavIcons.module.css";

const FooterNavIcons = () => {
  return (
    <div className={styles.navBar}>
      <ul className={styles.navList}>
        <li>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg width="10" height="20">
              <use xlinkHref={`${icon}#facebook`} />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <svg width="19" height="16">
              <use xlinkHref={`${icon}#twitter`} />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg width="19" height="19">
              <use xlinkHref={`${icon}#instagram`} />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <svg width="23" height="16">
              <use xlinkHref={`${icon}#youtube`} />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google"
          >
            <svg width="28" height="23">
              <use xlinkHref={`${icon}#google`} />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="RSS Feed"
          >
            <svg width="19" height="19">
              <use xlinkHref={`${icon}#rss`} />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterNavIcons;
