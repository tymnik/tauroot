import React, { useState } from 'react';
import icon from '../../../images/icons.svg';
import styles from './SearchBar.module.css';

//Для реалізації роботи пошуку статей я би використала react-router-dom:
//створити папку для роботи з api, де зберігається логіка
//тоді ми переписуємо App.jsx під маршрутизацію

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(inputValue);
  };
  return (
    <div className={styles.searchBar}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.searchContainer}>
          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search for..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <i>
            <svg
              width="19"
              height="20"
              fill="#E1541B"
              className={styles.searchIcon}
            >
              <use xlinkHref={`${icon}#search`}></use>
            </svg>
          </i>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
