import React from 'react';
import css from './Categories.module.css';

function Categories({ iconId, text }) {
  return (
    <div className={css.category}>
      <svg className={css.icon}>
        <use href={`src/assets/icons/symbol-defs.svg#${iconId}`}></use>
      </svg>
      <p className={css.text}>{text}</p>
    </div>
  );
}

export default Categories;
