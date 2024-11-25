import React from 'react';
import css from './ReviewLocation.module.css';

function ReviewLocation({
  text,
  isUnderlined = false,
  iconId,
  iconColorClass,
}) {
  return (
    <div
      className={`${css.features} ${iconColorClass ? css[iconColorClass] : ''}`}
    >
      <svg className={css[iconId]}>
        <use href={`src/assets/icons/symbol-defs.svg#${iconId}`}></use>
      </svg>
      <p className={`${css.text} ${isUnderlined ? css.line : ''}`}>{text}</p>
    </div>
  );
}

export default ReviewLocation;
