// import { Field } from 'formik';
// import css from './CheckBox.module.css';
// import sprite from '../assets/icons/symbol-defs.svg';

// const iconMapping = {
//   Automatic: 'automatic',
//   AC: 'AC',
//   Kitchen: 'kitchen',
//   TV: 'TV',
//   Bathroom: 'bathroom',
// };

// const equipmentOptions = ['AC', 'Automatic', 'Kitchen', 'TV', 'Bathroom'];

// export function EquipmentFilters() {
//   return (
//     <div className={css.options}>
//       {equipmentOptions.map((option) => {
//         if (Array.isArray(option)) {
//           return option.map((subOption) => (
//             <div key={subOption}>
//               <Field
//                 className={css.input}
//                 type="checkbox"
//                 name="equipment"
//                 value={subOption}
//                 id={subOption}
//               />
//               <label className={css.label} htmlFor={subOption}>
//                 <svg height={32} width={32}>
//                   <use href={`${sprite}#icon-${iconMapping[option]}`} />
//                 </svg>
//                 <span className={css.span}>{subOption}</span>
//               </label>
//             </div>
//           ));
//         } else {
//           return (
//             <div key={option}>
//               <Field
//                 className={css.input}
//                 type="checkbox"
//                 name="equipment"
//                 value={option}
//                 id={option}
//               />
//               <label className={css.label} htmlFor={option}>
//                 <svg height={32} width={32}>
//                   <use href={`${sprite}#icon-${iconMapping[option]}`} />
//                 </svg>
//                 <span className={css.span}>{option}</span>
//               </label>
//             </div>
//           );
//         }
//       })}
//     </div>
//   );
// }
