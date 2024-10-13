import React from 'react';
import css from './Features.module.css';
// import Reviews from '../../components/Reviews/Reviews';

const Features = () => {
  const categories = ['Automatic', 'AC', 'Petrol', 'Kitchen', 'Radio'];

  const vehicleDetails = {
    length: '5.4 m',
    width: '2.01 m',
    height: '2.05 m',
    tank: '132 L',
    consumption: '12.4 L/100km',
  };

  return (
    <div className={css.featuresContainer}>
      <div className={css.navigation}>
        <h2 className={css.link}>Features</h2>
        <h2 className={css.link}>Reviews</h2>
      </div>
      <hr className={css.thinLine} />
      <div className={css.featureBox}>
        <div className={css.categories}>
          {categories.map((category, index) => (
            <span key={index} className={css.category}>
              {category}
            </span>
          ))}
        </div>
        <h2 className={css.detailsTitle}>Vehicle Details</h2>
        <hr className={css.line} />
        <ul className={css.detailsList}>
          <li>
            <strong>Length:</strong> {vehicleDetails.length}
          </li>
          <li>
            <strong>Width:</strong> {vehicleDetails.width}
          </li>
          <li>
            <strong>Height:</strong> {vehicleDetails.height}
          </li>
          <li>
            <strong>Tank:</strong> {vehicleDetails.tank}
          </li>
          <li>
            <strong>Consumption:</strong> {vehicleDetails.consumption}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
