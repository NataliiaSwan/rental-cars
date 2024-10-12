import React from 'react';
import css from './VehicleDetails.module.css';

const VehicleDetails = () => {
  return (
    <div className={css.vehicleDetailsContainer}>
      {/* Vehicle features */}
      <div className={css.featuresSection}>
        <h3>Vehicle Features</h3>
        <ul className={css.featuresList}>
          <li>Automatic</li>
          <li>AC</li>
          <li>Petrol</li>
          <li>Kitchen</li>
          <li>Radio</li>
        </ul>
      </div>

      {/* Vehicle details */}
      <div className={css.detailsSection}>
        <h3>Vehicle Details</h3>
        <ul className={css.detailsList}>
          <li>
            <span>Form:</span> Panel truck
          </li>
          <li>
            <span>Length:</span> 5.4 m
          </li>
          <li>
            <span>Width:</span> 2.01 m
          </li>
          <li>
            <span>Height:</span> 2.05 m
          </li>
          <li>
            <span>Tank:</span> 132 l
          </li>
          <li>
            <span>Consumption:</span> 12.4 l/100km
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VehicleDetails;
