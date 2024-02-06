import React from 'react';
import styles from './ProgressBarRange.module.css';

const ProgressBarRange = () => {
  return (
    <div className={styles.progressBarRange}>
      <input
        type="range"
        className={styles.barToggle}
        min="1"
        max="10"
        step="1"
      />
      <div className={styles.barScale}>
        <p>Note</p>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
        </ul>      
      </div>
    </div>
  );
};

export default ProgressBarRange;
