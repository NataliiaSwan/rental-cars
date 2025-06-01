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
import Features from '../Features/Features.jsx';
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
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

// import { Route, Routes } from 'react-router-dom';
// import HomePage from '../../pages/HomePage/HomePage.jsx';
// import CatalogPage from '../../pages/CatalogPage/CatalogPage.jsx';
// import CamperDetailsPage from '../../pages/CamperDetailsPage/CamperDetailsPage.jsx';
// import Header from '../../components/Header/Header.jsx';

// function App() {
//   return (
//     <>
//       <Header />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/catalog" element={<CatalogPage />} />
//         <Route path="/catalog/:id" element={<CamperDetailsPage />} />
//       </Routes>
//     </>
//   );
// }

// export default App;
