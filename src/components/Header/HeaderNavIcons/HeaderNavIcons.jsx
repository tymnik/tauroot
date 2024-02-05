import React from "react";
import icon from "../../../images/icons.svg";
import styles from "./HeaderNavIcons.module.css";

const HeaderNavIcons = () => {
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
            <svg width="8" height="16">
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
            <svg width="15" height="12">
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
            <svg width="14" height="14">
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
            <svg width="18" height="12">
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
            <svg width="21" height="17">
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
            <svg width="14" height="14">
              <use xlinkHref={`${icon}#rss`} />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HeaderNavIcons;
