import React from 'react';
import { Link } from 'react-router-dom';
import css from './CamperCard.module.css'; // Переконайтеся, що стилі імпортуються правильно

const CamperCard = ({ camper }) => {
  console.log('Camper data:', camper); // Лог даних кемпера

  return (
    <div className={css.card}>
      {/* Вибираємо перше зображення з галереї */}
      <div className={css.imageCard}>
        <img
          src={camper.gallery[0].thumb} // Переконайтеся, що цей шлях правильний
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
          <p className={css.rating}>Rating: {camper.rating}</p>

          <p className={css.location}>Location: {camper.location}</p>
        </div>
        <p className={css.description}>Description: {camper.description}</p>

        <Link to={`/catalog/${camper.id}`}>
          <button className={css.buttonCard}>Show more</button>
        </Link>
      </div>
    </div>
  );
};

export default CamperCard;
