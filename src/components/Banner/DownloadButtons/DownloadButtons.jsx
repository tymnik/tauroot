import React from 'react';
import icon from '../../../images/icons.svg';
import styles from './DownloadButtons.module.css';

const DownloadButtons = () => {
  const handleDownload = platform => {
    switch (platform) {
      case 'android':
        break;
      case 'ios':
        break;
      case 'pc':
        break;
      default:
        break;
    }
  };

  return (
    <ul className={styles.buttonsList}>
      <li>
        <button
          onClick={() => handleDownload('android')}
          className={styles.androidBtn}
          aria-label="Download for Android"
        >
          <span>
            <svg width="11" height="13" fill="var(--white)">
              <use xlinkHref={`${icon}#android`} />
            </svg>
          </span>
          Android
        </button>
      </li>
      <li>
        <button
          onClick={() => handleDownload('ios')}
          className={styles.iosBtn}
          aria-label="Download for iOS"
        >
          <span>
            <svg width="12" height="13" fill="var(--white)">
              <use xlinkHref={`${icon}#ios`} />
            </svg>
          </span>
          iOS
        </button>
      </li>
      <li>
        <button
          onClick={() => handleDownload('pc')}
          className={styles.pcBtn}
          aria-label="Download for PC"
        >
          <span>
            <svg width="17" height="15" fill="var(--white)">
              <use xlinkHref={`${icon}#download`} />
            </svg>
          </span>
          Download on PC
        </button>
      </li>
    </ul>
  );
};

export default DownloadButtons;
