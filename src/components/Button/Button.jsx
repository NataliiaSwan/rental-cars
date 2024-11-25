import css from './Button.module.css';

function Button({ text, onClick }) {
  return (
    <button className={css.button} onClick={onClick}>
      {text}
    </button>
  );
}
export default Button;
