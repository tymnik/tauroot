import React, { Suspense, lazy } from "react";
import Loader from "./components/Loader/Loader";

const Header = lazy(() => import("./components/Header/Header"));
const Banner = lazy(() => import("./components/Banner/Banner"));
const CurrentArticle = lazy(() =>
  import("./components/CurrentArticle/CurrentArticle")
);
const SimilarArticles = lazy(() =>
  import("./components/ArticlesList/ArticlesList")
);
const Footer = lazy(() => import("./components/Footer/Footer"));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Banner />
      <CurrentArticle />
      <SimilarArticles />
        <Footer />
    </Suspense>
  );
};

export default App;