import React from 'react';
import styles from './MobMenu.module.css';

const MobMenu = ({ items, active, setActive }) => {
  return (
    <div
      className={active ? `${styles.mobMenu} ${styles.active}` : styles.menu}
      onClick={()=>setActive(false)}
    >
      <div className={styles.mobMenuContent} onClick={e => e.stopPropagation()}>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item.value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobMenu;
