import css from './ButtonLoadMore.module.css';

function ButtonLoadMore({ onClick }) {
  return (
    <button className={css.button} onClick={onClick}>
      Load more
    </button>
  );
}
export default ButtonLoadMore;
