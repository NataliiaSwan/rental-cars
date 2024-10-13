import React from 'react';
import { Link } from 'react-router-dom';
import css from './CamperCard.module.css';
import Categories from '../../components/Categories/Categories';
import { useNavigate } from 'react-router-dom';

const CamperCard = ({ camper }) => {
  const navigate = useNavigate();

  const handleShowMore = () => {
    navigate(`/catalog/${camper.id}`);
  };
  console.log('Camper data:', camper);
  return (
    <div className={css.card}>
      <div className={css.imageCard}>
        <img
          src={camper.gallery[0].thumb}
          alt={camper.name}
          className={css.image}
        />
      </div>
      <div className={css.cardPage}>
        <div className={css.titleBox}>
          <h2>{camper.name}</h2>
          <p className={css.price}> ${camper.price}</p>
          <svg width="26" height="24">
            <use href="src/assets/icons/symbol-defs.svg#icon-heart"></use>
          </svg>
        </div>
        <div className={css.ratingLocation}>
          <svg className={css.iconStar}>
            <use href="src/assets/icons/symbol-defs.svg#icon-star"></use>
          </svg>
          <p className={css.rating}>Rating: {camper.rating}</p>

          <p className={css.location}>Location: {camper.location}</p>
        </div>
        <p className={css.description}>Description: {camper.description}</p>
        <Categories
          categories={[
            'Automatic',
            'AC',
            'Petrol',
            'Kitchen',
            'Radio',
            'Bathroom',
            '2 adults',
          ]}
        />
        <button className={css.buttonCard} onClick={handleShowMore}>
          Show more
        </button>
      </div>
    </div>
  );
};

export default CamperCard;
