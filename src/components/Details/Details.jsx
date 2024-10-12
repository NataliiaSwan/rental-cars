import React from 'react';

const Details = () => {
  return (
    <div className={css.detailsContainer}>
      <h2 className={css.detailsName}>{camper.name}</h2>
      <p className={css.detailsDescription}>{camper.description}</p>
      <p className={css.detailsText}>
        Embrace simplicity and freedom with the Mavericks panel truck, an ideal
        choice for solo travelers or couples seeking a compact and efficient way
        to explore the open roads. This no-frills yet reliable panel truck
        offers the essentials for a comfortable journey, making it the perfect
        companion for those who value simplicity and functionality.
      </p>
    </div>
  );
};

export default Details;
