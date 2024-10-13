// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import CamperCard from '../CampersCards/CamperCard';
// import { fetchCampers } from '../../redux/campers/CampersSlice.js';
// import css from './CamperList.module.css';

// const CamperList = () => {
//   const dispatch = useDispatch();

//   const campers = useSelector((state) => state.campers.items);
//   const status = useSelector((state) => state.campers.status);
//   const error = useSelector((state) => state.campers.error);

//   useEffect(() => {
//     if (status === 'idle') {
//       console.log('Dispatching fetchCampers');
//       dispatch(fetchCampers());
//     }
//   }, [status, dispatch]);

//   if (status === 'loading') {
//     return <p>Завантаження кемперів...</p>;
//   }

//   if (status === 'failed') {
//     return <p>Сталася помилка: {error}</p>;
//   }

//   console.log('Campers:', campers);

//   return (
//     <div className={css.container}>
//       {campers && campers.length > 0 ? (
//         campers.map((camper) => <CamperCard key={camper.id} camper={camper} />)
//       ) : (
//         <p>Немає кемперів для відображення.</p>
//       )}
//     </div>
//   );
// };

// export default CamperList;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CamperCard from '../CampersCards/CamperCard';
import { fetchCampers } from '../../redux/campers/CampersSlice.js';
import css from './CamperList.module.css';
import { useNavigate } from 'react-router-dom'; // Імпортуємо useNavigate

const CamperList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Використовуємо useNavigate для навігації
  const campers = useSelector((state) => state.campers.items);
  const status = useSelector((state) => state.campers.status);
  const error = useSelector((state) => state.campers.error);

  useEffect(() => {
    if (status === 'idle') {
      console.log('Dispatching fetchCampers');
      dispatch(fetchCampers());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <p>Завантаження кемперів...</p>;
  }

  if (status === 'failed') {
    return <p>Сталася помилка: {error}</p>;
  }

  console.log('Campers:', campers);

  return (
    <div className={css.container}>
      {campers && campers.length > 0 ? (
        campers.map((camper) => (
          <CamperCard
            key={camper.id}
            camper={camper}
            onShowMore={() => navigate(`/catalog/${camper.id}`)} // Передаємо функцію для переходу
          />
        ))
      ) : (
        <p>Немає кемперів для відображення.</p>
      )}
    </div>
  );
};

export default CamperList;
