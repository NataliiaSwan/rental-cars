import React from 'react';
import css from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  const reviewList = reviews || [];

  return (
    <div className={css.reviewsContainer}>
      <h2>Reviews</h2>
      {reviewList.length > 0 ? (
        reviewList.map((review, index) => (
          <div key={index} className={css.review}>
            <div className={css.reviewHeader}>
              <span className={css.reviewerName}>{review.reviewer_name}</span>
              <span className={css.reviewerRating}>
                {/* Відображення зірок */}
                {Array.from({ length: 5 }, (_, i) => (
                  <svg key={i} className={css.iconStar} width="16" height="16">
                    {i < review.reviewer_rating ? (
                      <use href="src/assets/icons/symbol-defs.svg#icon-star-full" />
                    ) : (
                      <use href="src/assets/icons/symbol-defs.svg#icon-star-empty" />
                    )}
                  </svg>
                ))}
                <span className={css.ratingValue}>
                  {review.reviewer_rating}
                </span>
              </span>
            </div>
            <p className={css.reviewComment}>{review.comment}</p>
          </div>
        ))
      ) : (
        <p>There are no reviews for this camper</p>
      )}
    </div>
  );
};

export default Reviews;
