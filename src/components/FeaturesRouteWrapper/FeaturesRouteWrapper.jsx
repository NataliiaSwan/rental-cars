import { useOutletContext } from 'react-router-dom';
import FeaturesList from '../../components/FeaturesList/FeaturesList.jsx';

const FeaturesRouteWrapper = () => {
  const camper = useOutletContext();

  if (!camper) return <p>No data available</p>;

  return <FeaturesList camper={camper} />;
};

export default FeaturesRouteWrapper;
