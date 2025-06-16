import { Field } from 'formik';
import css from './VehicleTypeFilters.module.css';
import sprite from '../../assets/icons/symbol-defs.svg';
import { vehicleTypeOptions } from '../../contants/contants.js';

function VehicleTypeFilters() {
  return (
    <div className={css.options}>
      {vehicleTypeOptions.map((type) => (
        <div key={type} className={css.box}>
          <Field
            className={css.input}
            type="checkbox"
            name="vehicleType"
            value={type}
            id={type}
          />
          <label className={css.label} htmlFor={type}>
            <svg height={32} width={32} className={css.svg}>
              <use
                href={`${sprite}#icon-${type.toLowerCase().replace(/ /g, '')}`}
              />
            </svg>

            <span>{type}</span>
          </label>
        </div>
      ))}
    </div>
  );
}

export default VehicleTypeFilters;
