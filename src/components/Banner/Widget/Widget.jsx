import React from 'react'
import styles from './Widget.module.css'

import ProgressBarCircle from './ProgressBarCircle/ProgressBarCircle';

const Widget = () => {
  return (
    <>
      <div>
        <ProgressBarCircle />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.widgetUsers}>Players</h2>
        <p className={styles.widgetUsersAmount}>12 votes</p>
        <h3 className={styles.widgetUserRating}>
          Your rating:<span className={styles.userRatingScale}>5.2</span>
        </h3>
      </div>
    </>
  );
}

export default Widget