import React, { useState } from 'react';
import css from './LocationInput.module.css';

const LocationInput = () => {
  const [location, setLocation] = useState('City');

  const handleLocationChange = () => {
    setLocation('Kyiv, Ukraine');
  };

  const isActive = location !== 'City';

  return (
    <div className={css.locationContainer}>
      <h4>Location</h4>
      <div className={css.inputBox} onClick={handleLocationChange}>
        <svg
          className={`${css.icon} ${isActive ? css.activeIcon : ''}`}
          width="20"
          height="20"
        >
          <use href="src/assets/icons/symbol-defs.svg#icon-map"></use>
        </svg>
        <span className={isActive ? css.activeText : ''}>{location}</span>
      </div>
    </div>
  );
};

export default LocationInput;
