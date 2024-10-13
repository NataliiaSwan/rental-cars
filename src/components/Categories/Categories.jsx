import React from 'react';
import css from './Categories.module.css';

const Categories = ({ categories }) => {
  return (
    <div className={css.categoriesContainer}>
      {categories.map((category, index) => (
        <button key={index} className={css.categoryButton}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
