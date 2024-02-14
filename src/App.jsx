import React, { Suspense} from 'react';
import styles from 'App.module.css';

import Loader from './components/Loader/Loader';
import SocialLinks from 'components/SocialLinks/SocialLinks';
import Ads from 'components/Ads/Ads';

import Header from 'components/Header/Header';
import Banner from 'components/Banner/Banner';
import CurrentArticle from 'components/CurrentArticle/CurrentArticle';
import SimilarArticles from 'components/ArticlesList/ArticlesList';
import Footer from 'components/Footer/Footer';

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
