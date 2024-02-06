import React from 'react'
import icon from '../../../images/icons.svg';
import styles from './MenuListHeader.module.css'

const MenuListHeader = () => {
 return (
   <ul className={styles.menuListHeader}>
     <li>
       <svg width="9" height="14" fill="var(--white)">
         <use xlinkHref={`${icon}#phone`} />
       </svg>
       <p>Menu item 1</p>
     </li>
     <li>
       <svg width="12" height="14" fill="var(--white)">
         <use xlinkHref={`${icon}#filter`} />
       </svg>
       <p>Menu item 2</p>
     </li>
     <li>
       <svg width="12" height="14" fill="var(--white)">
         <use xlinkHref={`${icon}#android`} />
       </svg>
       <p>Menu item 3</p>
     </li>
     <li>
       <svg width="12" height="14" fill="var(--white)">
         <use xlinkHref={`${icon}#ios`} />
       </svg>
       <p>Menu item 4</p>
     </li>
   </ul>
 );
}

export default MenuListHeader