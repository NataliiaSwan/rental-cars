import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCampers } from '../../redux/campers/CampersSlice'; // Імпорт асинхронного запиту
import css from './Filters.module.css';

const Filters = () => {
  const dispatch = useDispatch();

  // Стан для зберігання вибраних фільтрів
  const [filters, setFilters] = useState({
    ac: false,
    automatic: false,
    kitchen: false,
    tv: false,
    bathroom: false,
    van: false,
    'fully integrated': false,
    alcove: false,
  });

  // Оновлення стану фільтрів при зміні чекбоксів
  const handleFilterChange = (e) => {
    const { id, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [id]: checked,
    }));
  };

  // Функція для фільтрації кемперів
  const handleSearch = () => {
    // Передаємо фільтри в запит на бекенд
    dispatch(fetchCampers(filters));
  };

  return (
    <div className={css.filterContainer}>
      <h4 className={css.filterTitle}>Filters</h4>
      <h3 className={css.optionTitle}>Vehicle equipment</h3>
      <hr className={css.separator} />
      <div className={css.filterGroup}>
        <div className={css.optionsGrid}>
          <div className={css.option}>
            <input id="ac" checked={filters.ac} onChange={handleFilterChange} />
            <svg className={css.icon}>
              <use href="src/assets/icons/symbol-defs.svg#icon-AC"></use>
            </svg>

            <label htmlFor="ac">AC</label>
          </div>

          <div className={css.option}>
            <input
              id="automatic"
              checked={filters.automatic}
              onChange={handleFilterChange}
              className={css.checkbox}
            />
            <svg className={css.icon}>
              <use href="src/assets/icons/symbol-defs.svg#icon-automatic"></use>
            </svg>
            <label htmlFor="automatic">Automatic</label>
          </div>
          <div className={css.option}>
            <input
              id="kitchen"
              checked={filters.kitchen}
              onChange={handleFilterChange}
            />
            <svg className={css.icon}>
              <use href="src/assets/icons/symbol-defs.svg#icon-kitchen"></use>
            </svg>
            <label htmlFor="kitchen">Kitchen</label>
          </div>
          <div className={css.option}>
            <input id="tv" checked={filters.tv} onChange={handleFilterChange} />
            <svg className={css.icon}>
              <use href="src/assets/icons/symbol-defs.svg#icon-TV"></use>
            </svg>
            <label htmlFor="tv">TV</label>
          </div>
          <div className={css.option}>
            <input
              id="bathroom"
              checked={filters.bathroom}
              onChange={handleFilterChange}
            />
            <svg className={css.icon}>
              <use href="src/assets/icons/symbol-defs.svg#icon-bathroom"></use>
            </svg>
            <label htmlFor="bathroom">Bathroom</label>
          </div>
        </div>
      </div>
      <h3 className={css.optionTitle}>Vehicle type</h3>
      <hr className={css.separator} />
      <div className={css.optionsGrid}>
        <div className={css.option}>
          <input id="van" checked={filters.van} onChange={handleFilterChange} />
          <svg className={css.icon}>
            <use href="src/assets/icons/symbol-defs.svg#icon-van"></use>
          </svg>
          <label htmlFor="van">Van</label>
        </div>
        <div className={css.option}>
          <input
            id="fully integrated"
            checked={filters['fully integrated']}
            onChange={handleFilterChange}
          />
          <svg className={css.icon}>
            <use href="src/assets/icons/symbol-defs.svg#icon-fully-integrated"></use>
          </svg>
          <label htmlFor="fully integrated">Fully Integrated</label>
        </div>
        <div className={css.option}>
          <input
            id="alcove"
            checked={filters.alcove}
            onChange={handleFilterChange}
          />
          <svg className={css.icon}>
            <use href="src/assets/icons/symbol-defs.svg#icon-alcove"></use>
          </svg>
          <label htmlFor="alcove">Alcove</label>
        </div>
      </div>
      <button className={css.searchButton} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Filters;
