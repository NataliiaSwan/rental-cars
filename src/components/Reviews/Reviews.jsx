import React from 'react';
import css from './Reviews.module.css';

const Reviews = () => {
  return (
    <div className={css.reviewsContainer}>
      <h2>User Reviews</h2>
      {/* Відгук від Alice */}
      <div className={css.review}>
        <h3>Alice</h3>
        <p className={css.comment}>
          The Mavericks panel truck was a perfect choice for my solo road trip.
          Compact, easy to drive, and had all the essentials. The kitchen
          facilities were sufficient, and the overall experience was fantastic.
        </p>
      </div>

      {/* Відгук від Bob */}
      <div className={css.review}>
        <h3>Bob</h3>
        <p className={css.comment}>
          A decent option for solo travel. The Mavericks provided a comfortable
          stay, but the lack of bathroom facilities was a drawback. Good for
          short trips where simplicity is preferred.
        </p>
      </div>
    </div>
  );
};

export default Reviews;
