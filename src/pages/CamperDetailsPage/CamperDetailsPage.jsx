import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCamperById as fetchCamperById } from '../../redux/campers/operations.js';
import css from './CamperDetailsPage.module.css';

import Features from '../../components/Features/Features.jsx';
import Reviews from '../../components/Reviews/Reviews.jsx';
import BookingForm from '../../components/BookingForm/BookingForm.jsx';

const CamperDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const {
    selectedItem: camper,
    isLoading,
    // isError,
    notFound,
  } = useSelector((state) => state.campers);

  useEffect(() => {
    if (id && camper?.id !== id) {
      dispatch(fetchCamperById(id));
    }
  }, [id, camper?.id, dispatch]);

  if (notFound) {
    return <p>Camper not found.</p>;
  }

  if (isLoading || !camper) {
    return <p>Loading camper data...</p>;
  }

  return (
    <>
      <div className={css.camperDetails}>
        <h2>{camper.name}</h2>

        <div className={css.ratingLocation}>
          <svg className={css.iconStar}>
            <use href="/assets/icons/symbol-defs.svg#icon-star" />
          </svg>
          <p className={css.rating}>Rating: {camper.rating}</p>

          <svg width="20" height="20">
            <use href="/assets/icons/symbol-defs.svg#icon-map" />
          </svg>
          <p className={css.location}>Location: {camper.location}</p>
        </div>

        <p className={css.price}>${camper.price}</p>

        {Array.isArray(camper.gallery) && camper.gallery.length > 0 && (
          <div className={css.gallery}>
            {camper.gallery.map((image, index) => (
              <img
                key={index}
                className={css.image}
                src={image.original}
                alt={`${camper.name} ${index + 1}`}
              />
            ))}
          </div>
        )}

        <p className={css.description}>Description: {camper.description}</p>
      </div>
      <div className={css.titleFeaturesReviews}>
        <p className={css.titleFeatures}>Features</p>
        <p className={css.titleReviews}>Reviews</p>
      </div>
      <hr />

      <div className={css.featuresForm}>
        <Features features={camper.features} />
        <Reviews reviews={camper.reviews} />
        <BookingForm camper={camper} />
        <Outlet />
      </div>
    </>
  );
};

export default CamperDetailsPage;
