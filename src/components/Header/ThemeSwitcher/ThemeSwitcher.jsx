import React from "react";
import styles from "./ThemeSwitcher.module.css";
import icon from "../../../images/icons.svg";

const ThemeSwitcher = () => {

  const setDarkMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'dark')
  }

   const setLightMode = () => {
     document.querySelector("body").setAttribute("data-theme", "light");
  };
  const toggleTheme = e => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  }
  return (
    <div className={styles.toggleContainer}>
      <input
        type="checkbox"
        id="check"
        className={styles.toggle}
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
