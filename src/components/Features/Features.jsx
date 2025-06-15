// import Categories from '../../components/Categories/Categories.jsx';
// import css from './Features.module.css';

// function Features({ camper }) {
//   if (!camper) {
//     return <p>No data available</p>;
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

// import { useOutletContext } from 'react-router-dom';
// import Categories from '../../components/Categories/Categories.jsx';
// import css from './Features.module.css';

// function Features() {
//   const camper = useOutletContext();

//   if (!camper) {
//     return <p>No data available</p>;
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

// import FeaturesList from '../../components/FilterList/FilterList.jsx';
import VehicleDetails from '../../components/VehicleDetails/VehicleDetails.jsx';
import FeaturesRouteWrapper from '../../components/FeaturesRouteWrapper/FeaturesRouteWrapper.jsx';
import css from './Features.module.css';

function Features() {
  return (
    <div className={css.featuresContainer}>
      <FeaturesRouteWrapper />
      {/* <FeaturesList /> */}
      <VehicleDetails />
    </div>
  );
}
export default Features;
