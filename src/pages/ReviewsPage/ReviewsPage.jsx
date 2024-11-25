// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { fetchCamperById } from '../../redux/campers/campersDetailsSlice';
// import Reviews from '../../components/Reviews/Reviews';
// import css from './ReviewsPage.module.css';

// const ReviewsPage = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();

//   const camper = useSelector((state) => state.camperDetails.camper);
//   const status = useSelector((state) => state.camperDetails.status);
//   const error = useSelector((state) => state.camperDetails.error);

//   useEffect(() => {
//     if (status === 'idle') {
//       dispatch(fetchCamperById(id));
//     }
//   }, [id, status, dispatch]);

//   if (status === 'loading') {
//     return <p>Loading camper data...</p>;
//   }

//   if (status === 'failed') {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <div className={css.reviewsPage}>
//       <h2>{camper.name}</h2>
//       <div className={css.ratingLocation}>
//         <span className={css.rating}>
//           {camper.rating} ({camper.reviews.length} Reviews)
//         </span>
//         <p className={css.location}>{camper.location}</p>
//         <p className={css.price}>€{camper.price}</p>
//       </div>
//       <p>{camper.description}</p>

//       <Reviews reviews={camper.reviews} />
//     </div>
//   );
// };

// export default ReviewsPage;
