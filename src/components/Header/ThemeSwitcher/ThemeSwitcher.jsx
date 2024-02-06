import React, { useState, useEffect } from 'react';
import styles from './ThemeSwitcher.module.css';
import icon from '../../../images/icons.svg';

const ThemeSwitcher = ({ onThemeChange }) => {
  const savedTheme = localStorage.getItem('theme');
  const [darkMode, setDarkMode] = useState(savedTheme === 'dark');

  useEffect(() => {
    const currentTheme = document.body.getAttribute('data-theme');
    setDarkMode(currentTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    onThemeChange(newDarkMode);
    document.body.setAttribute('data-theme', newDarkMode ? 'dark' : 'light');

    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  return (
    <div className={styles.toggleContainer}>
      <input
        type="checkbox"
        id="check"
        className={styles.toggle}
        checked={darkMode}
        onChange={toggleTheme}
      />
      <label htmlFor="check">
        <div className={styles.toggleBox}>
          <div className={styles.toggleBall}></div>
          <div className={styles.toggleScenery}>
            <div className={styles.toggleSun}>
              <svg id="sun" width="15" height="15" fill="var(--toggle-bar-bg)">
                <use xlinkHref={`${icon}#sun`} />
              </svg>
            </div>
            <div className={styles.toggleMoon}>
              <svg id="moon" width="17" height="17" fill="var(--toggle-bar-bg)">
                <use xlinkHref={`${icon}#moon`} />
              </svg>
            </div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
