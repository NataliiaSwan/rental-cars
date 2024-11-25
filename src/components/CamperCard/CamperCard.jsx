import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './CamperCard.module.css';
import FeaturesList from '../../components/FeaturesList/FeaturesList.jsx';
import ButtonHeart from '../../components/ButtonHeart/ButtonHeart.jsx';
import { setFavorite } from '../../redux/favorites/slice.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorites/selector.js';

const defaultImg = '/img/white-sedan-car-isolated-white-background.png';

function CamperCard({ camper }) {
  const dispatch = useDispatch();

  const handleSetFavorite = () => {
    dispatch(setFavorite(camper));
  };

  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.some(
    (item) => item.id === camper.id && item.name === camper.name
  );

  return (
    <div className={css.div}>
      <img
        className={css.image}
        src={
          camper.gallery && camper.gallery[0]
            ? camper.gallery[0].original
            : defaultImg
        }
        alt={camper.name}
      />
      <div className={css.rightSide}>
        <div>
          <div className={css.nameDiv}>
            <p className={css.name}>{camper.name}</p>
            <div className={css.priceDiv}>
              <p className={css.price}>€{camper.price.toFixed(2)}</p>
              <ButtonHeart
                onClick={handleSetFavorite}
                isFavorite={isFavorite}
              />
            </div>
          </div>
          <div className={css.ratingDiv}>
            {/* Заміна ReviewLocation для рейтингу */}
            <div className={css.iconWrapper}>
              <svg className={css.iconStar}>
                <use href="src/assets/icons/symbol-defs.svg#icon-star"></use>
              </svg>
              <p className={css.rating}>
                {camper.rating} ({camper.reviews.length} Reviews)
              </p>
            </div>

            {/* Заміна ReviewLocation для локації */}
            <div className={css.iconWrapper}>
              <svg className={css.iconMap}>
                <use href="src/assets/icons/symbol-defs.svg#icon-map"></use>
              </svg>
              <p className={css.location}>{camper.location}</p>
            </div>
          </div>
        </div>
        <p className={css.description}>{camper.description}</p>
        <FeaturesList camper={camper} />
        <NavLink className={css.btn} to={`/catalog/${camper.id}`}>
          Show more
        </NavLink>
      </div>
    </div>
  );
}

export default CamperCard;
