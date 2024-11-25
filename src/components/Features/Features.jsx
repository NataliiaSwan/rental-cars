// import Categories from '../../components/Features/Features.jsx';
// import css from './Features.module.css';

// function Features({ camper }) {
//   // Перевірка, чи визначений camper
//   if (!camper) {
//     return <p>No data available</p>; // Можна додати інформацію про те, що дані відсутні
//   }

//   return (
//     <div className={css.filterWrapper}>
//       {camper.transmission && (
//         <Categories
//           iconId="icon-transmission"
//           text={`${
//             camper.transmission.charAt(0).toUpperCase() +
//             camper.transmission.slice(1)
//           }`}
//         />
//       )}
//       {camper.engine && (
//         <Categories
//           iconId="icon-engine"
//           text={`${
//             camper.engine.charAt(0).toUpperCase() + camper.engine.slice(1)
//           }`}
//         />
//       )}
//       {camper.kitchen && <Categories iconId="icon-kitchen" text="Kitchen" />}
//       {camper.AC && <Categories iconId="icon-ac" text="AC" />}
//       {camper.TV && <Categories iconId="icon-tv" text="TV" />}
//       {camper.bathroom && <Categories iconId="icon-bathroom" text="Bathroom" />}
//       {camper.radio && <Categories iconId="icon-radio" text="Radio" />}
//     </div>
//   );
// }
// export default Features;
