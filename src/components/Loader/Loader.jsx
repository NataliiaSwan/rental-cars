import { InfinitySpin } from 'react-loader-spinner';
import css from './Loader.module.css';

function Loader() {
  return (
    <div className={css.loader}>
      <InfinitySpin
        visible={true}
        width="200"
        color="#D84343"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
}
export default Loader;
