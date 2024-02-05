import React from 'react';
import styles from './Ads.module.css';

const Ads = () => {
  return (
    <div className={styles.adsContainer}>
      <div className={styles.adsTextBlock}>
        <p className={styles.adsText}>ADS</p>
        <p className={styles.adsSize}>300&#xd7;600</p>
      </div>
    </div>
  );
};

export default Ads;

//For external use
// const Ads = () => {
// const adUrl = 'example_URL';
// return (
//   <div>
//     <iframe
//       title="Advertisement"
//       src={adUrl}
//       width="300"
//       height="600"
//     />
//   </div>
// );}
