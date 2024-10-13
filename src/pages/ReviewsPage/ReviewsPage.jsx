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
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { fetchCamperById } from '../../redux/campers/campersDetailsSlice';
// import css from './CamperDetailsPage.module.css';
// import Headers from '../../components/Header/Header';
// import Reviews from '../../components/Reviews/Reviews';

// import BookingForm from '../../components/BookingForm/BookingForm';

// const CamperDetailsPage = () => {
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
//     <>
//       <Headers />
//       <div className={css.camperDetails}>
//         <h2>{camper.name}</h2>

//         <div className={css.ratingLocation}>
//           <svg className={css.iconStar}>
//             <use href="src/assets/icons/symbol-defs.svg#icon-star"></use>
//           </svg>
//           <p className={css.rating}>Rating: {camper.rating}</p>
//           <svg width="20" height="20">
//             <use href="src/assets/icons/symbol-defs.svg#icon-map"></use>
//           </svg>
//           <p className={css.location}>Location: {camper.location}</p>
//         </div>

//         <p className={css.price}>${camper.price}</p>

//         {camper.gallery && camper.gallery.length > 0 && (
//           <div className={css.gallery}>
//             {camper.gallery.map((image, index) => (
//               <img
//                 key={index}
//                 className={css.image}
//                 src={image.original}
//                 alt={`${camper.name} ${index + 1}`}
//               />
//             ))}
//           </div>
//         )}
//         <p className={css.description}>Description: {camper.description}</p>
//       </div>
//       <Reviews features={camper.features} />

//       <BookingForm camper={camper} />
//     </>
//   );
// };

// export default CamperDetailsPage;
