import css from './CamperList.module.css';
import { selectCampers } from '../../redux/campers/selectors.js';
import CamperCard from '../../components/CamperCard/CamperCard.jsx';
import { useSelector } from 'react-redux';

const CamperList = () => {
  const campers = useSelector(selectCampers);
  // console.log(
  //   'Campers IDs:',
  //   campers.map((camper) => camper.id)
  // );
  return (
    <ul className={css.container}>
      {campers.map((camper) => {
        return (
          <li key={camper.id} className={css.item}>
            {<CamperCard camper={camper} />}
          </li>
        );
      })}
    </ul>
  );
};
export default CamperList;
