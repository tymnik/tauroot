import React from "react";
import styles from "./FooterLists.module.css";

const FooterLists = () => {
  return (
    <div className={styles.footerLists}>
      <div className={styles.footerListCateghory}>
        <h3 className={styles.categhoryTitle}>Categhory</h3>
        <ul className={styles.categhoryItems}>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
          <li>item 5</li>
        </ul>
      </div>
      <div className={styles.footerListPlay}>
        <h3 className={styles.playTitle}>Play better</h3>
        <ul className={styles.playItems}>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
          <li>item 5</li>
        </ul>
      </div>
      <div className={styles.footerListLinks}>
        <h3 className={styles.linksTitle}>Useful links</h3>
        <ul className={styles.linksItems}>
          <li>
            <a href="/">link</a>
          </li>
          <li>
            <a href="/">link</a>
          </li>
          <li>
            <a href="/">link</a>
          </li>
          <li>
            <a href="/">link</a>
          </li>
          <li>
            <a href="/">link</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterLists;
