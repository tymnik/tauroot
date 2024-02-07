import React, { useState } from 'react';
import styles from './Widget.module.css';

import ProgressBarCircle from './ProgressBarCircle/ProgressBarCircle';
import ProgressBarRange from './ProgressBarRange/ProgressBarRange';

const Widget = () => {
  const [userVote, setUserVote] = useState(0);

  const handleVoteChange = vote => {
    setUserVote(vote);
  };

  return (
    <div className={styles.widget}>
      <div className={styles.widgetWrapper}>
        <div>
          <ProgressBarCircle />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.widgetUsers}>Players</h2>
          <p className={styles.widgetUsersAmount}>12 votes</p>
          <h3 className={styles.widgetUserRating}>
            Your rating:
            <span className={styles.userRatingScale}>{userVote}</span>
          </h3>
        </div>
      </div>
      <div className={styles.widgetRange}>
        <ProgressBarRange onVoteChange={handleVoteChange} />
      </div>
    </div>
  );
};

export default Widget;
