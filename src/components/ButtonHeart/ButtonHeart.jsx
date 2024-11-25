import clsx from 'clsx';
import css from './ButtonHeart.module.css';

const ButtonHeart = ({ onClick, isFavorite }) => {
  const makeLinksClass = clsx(css.icon, isFavorite && css.favorite);

  return (
    <button type="button" onClick={onClick} className={css.button}>
      <svg width="26" height="24">
        <use href="src/assets/icons/symbol-defs.svg#icon-heart"></use>
      </svg>
    </button>
  );
};

export default ButtonHeart;
