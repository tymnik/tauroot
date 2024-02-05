import React from "react";
import ArticlesListItem from "./ArticlesListItem/ArticlesListItem";
import styles from "./ArticlesList.module.css";

const SimilarArticles = () => {
  return (
    <section className={styles.articlesBlock}>
        <h3 className={styles.articlesBlockTitle}>Similar articles</h3>
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
