import React from "react";
import icon from "../../../images/icons.svg";
import CardImg from "../../../images/Card/card-img-tablet-2x.jpg";
import styles from "./ArticlesListItem.module.css";

const ArticlesListItem = () => {
  return (
    <div className={styles.articleCard}>
      <img
        src={CardImg}
        alt="Article illustration"
        className={styles.cardImg}
      />
      <h4 className={styles.cardTitle}>Lorem Ipsum is simply dummy</h4>
      <ul className={styles.cardDetails}>
        <li className={styles.cardDetailsContent}>
          <svg width="10" height="13" fill="var(--article-subtext)">
            <use xlinkHref={`${icon}#person`} />
          </svg>
          <h5 className={styles.cardSubtext}>Alco</h5>
        </li>
        <li className={styles.cardDetailsContent}>
          <svg width="12" height="12" fill="var(--article-subtext)">
            <use xlinkHref={`${icon}#clock`} />
          </svg>
          <h5 className={styles.cardSubtext}>26 janvier 2023</h5>
        </li>
      </ul>
    </div>
  );
};

export default ArticlesListItem;
