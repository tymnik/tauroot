import React from 'react';
import styles from './CurrentArticle.module.css';

const CurrentArticle = () => {
  return (
    <section className={styles.articlesSection}>
      <div className={styles.articlesNavigation}>
        <a href="/">Home</a>
        <span>&#x3e;</span>
        <a href="/">Lorem Ipsum is</a>
        <span>&#x3e;</span>
        <a href="/" className={styles.articleLinkCurrent}>
          Lorem Ipsum is simply dummy
        </a>
      </div>
      <div className={styles.articleBlock}>
        <h1 className={styles.articleTitle}>Lorem Ipsum is simply dummy</h1>
        <p className={styles.articleText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </section>
  );
};

export default CurrentArticle;
