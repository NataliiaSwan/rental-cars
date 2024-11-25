// import { Field } from 'formik';
// import css from './CheckBox.module.css';
// import sprite from '../../assets/icons/symbol-defs.svg';
// import { iconMapping, equipmentOptions } from '../../contants/contants.js';

// export function EquipmentFilters() {
//   return (
//     <div className={css.options}>
//       {equipmentOptions.map((option) => (
//         <div key={option}>
//           <Field
//             className={css.input}
//             type="checkbox"
//             name="equipment"
//             value={option}
//             id={option}
//           />
//           <label className={css.label} htmlFor={option}>
//             <svg height={32} width={32}>
//               <use href={`${sprite}#icon-${iconMapping[option]}`} />
//             </svg>
//             <span className={css.span}>{option}</span>
//           </label>
//         </div>
//       ))}
//     </div>
//   );
// }

// const iconMapping = {
//   Automatic: 'automatic',
//   AC: 'AC',
//   Kitchen: 'kitchen',
//   TV: 'TV',
//   Bathroom: 'bathroom',
// };

// const equipmentOptions = ['AC', 'Automatic', 'Kitchen', 'TV', 'Bathroom'];

import { Field } from 'formik';
import css from './CheckBox.module.css';
import sprite from '../../assets/icons/symbol-defs.svg';
import { iconMapping, equipmentOptions } from '../../contants/contants.js';

export function EquipmentFilters() {
  return (
    <div className={css.options}>
      {equipmentOptions.map((option) => {
        if (option.options) {
          // Якщо є вкладені опції, обробляємо їх
          return option.options.map((subOption) => (
            <div key={subOption}>
              <Field
                className={css.input}
                type="checkbox"
                name="equipment"
                value={subOption}
                id={subOption}
              />
              <label className={css.label} htmlFor={subOption}>
                <svg height={32} width={32}>
                  <use href={`${sprite}#icon-${iconMapping[subOption]}`} />
                </svg>
                <span className={css.span}>{subOption}</span>
              </label>
            </div>
          ));
        } else {
          // Обробляємо опції без вкладених елементів
          return (
            <div key={option.main}>
              <Field
                className={css.input}
                type="checkbox"
                name="equipment"
                value={option.main}
                id={option.main}
              />
              <label className={css.label} htmlFor={option.main}>
                <svg height={32} width={32}>
                  <use href={`${sprite}#icon-${iconMapping[option.main]}`} />
                </svg>
                <span className={css.span}>{option.main}</span>
              </label>
            </div>
          );
        }
      })}
    </div>
  );
}
