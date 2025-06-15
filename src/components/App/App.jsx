import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() =>
  import('../../pages/CatalogPage/CatalogPage.jsx')
);
const CamperDetailsPage = lazy(() =>
  import('../../pages/CamperDetailsPage/CamperDetailsPage.jsx')
);

import NotFound from '../../pages/NotFound/NotFound.jsx';
import FeaturesRouteWrapper from '../../components/FeaturesRouteWrapper/FeaturesRouteWrapper.jsx';
import Reviews from '../Reviews/Reviews.jsx';

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperDetailsPage />}>
            <Route index element={<FeaturesRouteWrapper />} />
            <Route path="features" element={<FeaturesRouteWrapper />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
