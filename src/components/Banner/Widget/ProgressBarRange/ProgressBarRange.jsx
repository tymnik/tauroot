import React, {useRef} from 'react';
import styles from './ProgressBarRange.module.css';

const ProgressBarRange = () => {
  const rangeRef = useRef(null);

  const handleRangeClick = value => {
    rangeRef.current.value = value;
  };

  return (
    <div className={styles.progressBarRange}>
      <input
        ref={rangeRef}
        type="range"
        className={styles.barToggle}
        min="1"
        max="10"
        step="1"
        aria-label="A range field for voting"
      />
      <div className={styles.barScale}>
        <p>Note</p>
        <ul>
          <li onClick={() => handleRangeClick(1)}>1</li>
          <li onClick={() => handleRangeClick(2)}>2</li>
          <li onClick={() => handleRangeClick(3)}>3</li>
          <li onClick={() => handleRangeClick(4)}>4</li>
          <li onClick={() => handleRangeClick(5)}>5</li>
          <li onClick={() => handleRangeClick(6)}>6</li>
          <li onClick={() => handleRangeClick(7)}>7</li>
          <li onClick={() => handleRangeClick(8)}>8</li>
          <li onClick={() => handleRangeClick(9)}>9</li>
          <li onClick={() => handleRangeClick(10)}>10</li>
        </ul>
      </div>
    </div>
  );
};

export default ProgressBarRange;
