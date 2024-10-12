// import React, { useEffect } from 'react';

// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCamperById } from '../../redux/campers/slice.js';
// import Header from '../../components/Header/Header';
// import Details from '../../components/Details/Details';

// const CamperDetailsPage = ({ match }) => {
//   const dispatch = useDispatch();
//   const { selectedCamper, loading, error } = useSelector(
//     (state) => state.campers
//   );

//   useEffect(() => {
//     const { id } = match.params;
//     dispatch(fetchCamperById(id));
//   }, [dispatch, match.params]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;
//   return (
//     <div>
//       <Header />
//       <Details camper={selectedCamper} />{' '}

//       <VehicleDetails camper={selectedCamper} />{' '}

//       <BookingForm camper={selectedCamper} />{' '}

//       <Reviews camperId={selectedCamper?.id} />{' '}

//     </div>
//   );
// };

// export default CamperDetailsPage;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCamperById } from '../../redux/campers/campersDetailsSlice.js';
import { useParams } from 'react-router-dom';
// import Reviews from '../components/Reviews/Reviews';
import BookingForm from '../../components/BookingForm/BookingForm';

const CamperDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector((state) => state.camperDetails.camper);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  return (
    <div>
      <Header />
      <h1>{camper.name}</h1>
      <p>{camper.reviews}</p>
      <p>{camper.location}</p>
      <p>{camper.price}</p>
      <img src={camper.image} alt={camper.name} />
      <p>{camper.description}</p>
      <Features features={camper.features} />
      {/* <Reviews reviews={camper.reviews} /> */}
      <BookingForm camper={camper} />
    </div>
  );
};

export default CamperDetailsPage;
