import React, { Suspense, lazy } from 'react';
import Loader from './components/Loader/Loader';
import Ads from 'components/Ads/Ads';
import styles from 'App.module.css';

const Header = lazy(() => import('./components/Header/Header'));
const Banner = lazy(() => import('./components/Banner/Banner'));
const CurrentArticle = lazy(() =>
  import('./components/CurrentArticle/CurrentArticle')
);
const SimilarArticles = lazy(() =>
  import('./components/ArticlesList/ArticlesList')
);
const Footer = lazy(() => import('./components/Footer/Footer'));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Banner />
      <div className={styles.pageContent}>
        <div>
          <CurrentArticle />
          <SimilarArticles />
        </div>
        <aside>
          <Ads />
        </aside>
      </div>
      <Footer />
    </Suspense>
  );
};

export default App;
