import React, { useRef, useState } from 'react';
import styles from './ProgressBarRange.module.css';

const ProgressBarRange = ({ onVoteChange }) => {
  const sliderRef = useRef(null);
  const [background, setBackground] = useState('');

  const handleInput = event => {
    const { value } = event.target;
    const percent = (value / event.target.max) * 100;
    setBackground(
      `linear-gradient(to right, #DC4A19 , #FCC539 ${percent}%, var(--progress-range-bg)${percent}%)`
    );

    onVoteChange(value);
  };

    return (
    <div>
      <div className={styles.fieldGroup}>
        <label htmlFor="range" className={styles.rangeLabel}>
          <p className={styles.barScaleTitle}>Note</p>
          <ul className={styles.barScale}>
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
        </label>
        <input
          ref={sliderRef}
          type="range"
          name="range"
          id="range"
          className={styles.rangeField}
          min={1}
          max={10}
          onInput={handleInput}
          style={{ background }}
          aria-label="A range field for voting"
        />
      </div>
    </div>
  );
};

export default ProgressBarRange;
