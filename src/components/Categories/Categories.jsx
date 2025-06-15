import css from './Categories.module.css';
import sprite from '../../assets/icons/symbol-defs.svg';

function Categories({ iconId, text }) {
  return (
    <div className={css.category}>
      <svg className={css.icon}>
        {/* <use href={`src/assets/icons/symbol-defs.svg#${iconId}`}></use> */}
        <use href={`${sprite}#${iconId}`} />
      </svg>

      <p className={css.text}>{text}</p>
    </div>
  );
}

export default Categories;
