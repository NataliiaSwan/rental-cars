import { Field } from 'formik';
import { useState } from 'react';
import css from './Filters.module.css';
import { equipmentOptions, iconMapping } from '../../contants/contants.js';

function Filters() {
  const [expandedOptions, setExpandedOptions] = useState({});
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleToggle = (option) => {
    setExpandedOptions((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  const handleSelection = (mainOption, subOption) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [mainOption]: subOption,
    }));
    setExpandedOptions((prev) => ({
      ...prev,
      [mainOption]: false,
    }));
  };

  return (
    <div className={css.options}>
      {equipmentOptions.map(({ main, defaultText, options }) => (
        <div key={main} className={css.box}>
          <div
            onClick={() => options && handleToggle(main)}
            className={css.labelWrapper}
          >
            <svg height={32} width={32}>
              <use
                href={`/src/assets/icons#icon-${
                  iconMapping[defaultText] || iconMapping[main]
                }`}
              />
            </svg>
            <span className={css.label}>
              {selectedOptions[main] || defaultText}
            </span>
          </div>
          {expandedOptions[main] && options && (
            <div className={css.subOptions}>
              {options.map((subOption) => (
                <div key={subOption} className={css.subOption}>
                  <Field
                    className={css.hiddenCheckbox}
                    type="checkbox"
                    name="equipment"
                    value={subOption}
                    id={subOption}
                    onClick={() => handleSelection(main, subOption)}
                  />
                  <label className={css.subLabel} htmlFor={subOption}>
                    <span>{subOption}</span>
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Filters;
