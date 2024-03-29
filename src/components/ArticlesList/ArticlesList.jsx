import React from "react";
import styles from "./ArticlesList.module.css";

import ArticlesListItem from './ArticlesListItem/ArticlesListItem';

const SimilarArticles = () => {
  return (
    <section className={styles.articlesBlock}>
        <h2 className={styles.articlesBlockTitle}>Similar articles</h2>
        <ul className={styles.articlesList}>
          <li>
            <ArticlesListItem />
          </li>
          <li>
            <ArticlesListItem />
          </li>
          <li>
            <ArticlesListItem />
          </li>
          <li>
            <ArticlesListItem />
          </li>
        </ul>
    </section>
  );
};

export default SimilarArticles;
