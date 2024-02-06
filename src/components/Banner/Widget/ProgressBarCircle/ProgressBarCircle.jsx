import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import styles from './ProgressBarCircle.module.css';

function GradientSVG() {
  const idCSS = 'linear-gradient-id';
  const gradientTransform = `rotate(90)`;
  return (
    <svg styles={{ height: 0 }}>
      <defs>
        <linearGradient id={idCSS} gradientTransform={gradientTransform}>
          <stop offset="16.29%" stopColor="#FCC539" />
          <stop offset="85.56%" stopColor="#DC4A19" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const ProgressBarCircle = () => {
  const value = 6.4;
  return (
    <div className={styles.circularBarContainer}>
      <GradientSVG />
      <div
        className={styles.circularBackground}
        style={{ width: '70px', height: '70px' }}
      />
      <div className={styles.circularBar}>
        <CircularProgressbar
          strokeWidth={10}
          value={value}
          maxValue={7.5}
          styles={{
            path: {
              stroke: `url(#linear-gradient-id)`,
              height: '100%',
              strokeLinecap: 'butt',
              transition: 'stroke-dashoffset 0.5s ease 0s',
              transformOrigin: 'center center',
            },
            trail: {
              stroke: 'rgba(0, 0, 0, 0.44)',
            },
          }}
        />
      </div>
      <div className={styles.barTextContent}>{value}</div>
    </div>
  );
};

export default ProgressBarCircle;
