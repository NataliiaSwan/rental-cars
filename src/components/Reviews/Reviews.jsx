import css from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  return (
    <div className={css.reviewsContainer}>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className={css.review}>
            <div className={css.reviewHeader}>
              <span className={css.reviewerName}>{review.reviewer_name}</span>
              <span className={css.reviewerRating}>
                {/* Відображення зірок */}
                {Array.from({ length: 5 }, (_, i) => (
                  <svg key={i} className={css.iconStar} width="16" height="16">
                    <use href="src/assets/icons/symbol-defs.svg#icon-star"></use>
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
        <p>Ще немає відгуків на цей кемпер.</p>
      )}
    </div>
  );
};

export default Reviews;
