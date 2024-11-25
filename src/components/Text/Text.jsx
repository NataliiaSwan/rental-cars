import css from './Text.module.css';

function Text({ text }) {
  return <h3 className={css.text}>{text}</h3>;
}
export default Text;
