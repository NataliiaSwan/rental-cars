// import React, { useEffect } from 'react';
// import { Outlet } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { getCamperById as fetchCamperById } from '../../redux/campers/operations.js';
// import css from './CamperDetailsPage.module.css';

// import Features from '../../components/Features/Features';
// import Reviews from '../../components/Reviews/Reviews.jsx';
// import BookingForm from '../../components/BookingForm/BookingForm';

// const CamperDetailsPage = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();

//   const camper = useSelector((state) => state.campers.selectedItem);
//   const status = useSelector((state) =>
//     state.campers.isLoading ? 'loading' : 'idle'
//   );
//   const error = useSelector((state) => state.campers.isError);
//   const notFound = useSelector((state) => state.campers.notFound);

//   useEffect(() => {
//     if (status === 'idle') {
//       dispatch(fetchCamperById(id));
//     }
//   }, [id, status, dispatch]);

//   if (status === 'loading') {
//     return <p>Loading camper data...</p>;
//   }

//   if (notFound) {
//     return <p>Camper not found.</p>;
//   }

//   if (status === 'failed') {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <>
//       <div className={css.camperDetails}>
//         <h2>{camper.name}</h2>

//         <div className={css.ratingLocation}>
//           <svg className={css.iconStar}>
//             <use href="/assets/icons/symbol-defs.svg#icon-star"></use>
//           </svg>

//           <p className={css.rating}>Rating: {camper.rating}</p>
//           <svg width="20" height="20">
//             <use href="/assets/icons/symbol-defs.svg#icon-map"></use>
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
//       <div className={css.featursForm}>
//         <Features features={camper.features} />
//         <Reviews reviews={camper.reviews} />
//         <BookingForm camper={camper} />
//         <Outlet />
//       </div>
//     </>
//   );
// };

// export default CamperDetailsPage;
