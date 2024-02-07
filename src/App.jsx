import React, { Suspense, lazy} from 'react';
import styles from 'App.module.css';

import Loader from './components/Loader/Loader';
import SocialLinks from 'components/SocialLinks/SocialLinks';
import Ads from 'components/Ads/Ads';

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
      <div className={styles.main}>
        <Banner />
        <aside>
          <SocialLinks />
        </aside>
        <div className={styles.pageContent}>
          <div>
            <CurrentArticle />
            <SimilarArticles />
          </div>
          <aside className={styles.adsElement}>
            <Ads />
          </aside>
        </div>
        <Footer />
      </div>
    </Suspense>
  );
};

export default App;
