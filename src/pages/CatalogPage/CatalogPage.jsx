import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filters from '../../components/Filters/Filters';
import CamperList from '../../components/CamperList/CamperList';
import { fetchCampers } from '../../redux/campers/CampersSlice.js';
import Header from '../../components/Header/Header.jsx';
import css from './CatalogPage.module.css';
import LocationInput from '../../components/LocationInput/LocationInput.jsx';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector((state) => state.campers.items);
  const status = useSelector((state) => state.campers.status);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className={css.catalogPageContainer}>
      <Header />
      <div className={css.catalogBox}>
        <div className={css.filterBox}>
          <LocationInput />
          <Filters />
        </div>
        <CamperList campers={campers} status={status} />
        <button onClick={() => navigate('/catalog/:id')}>Show more</button>
      </div>
    </div>
  );
};

export default CatalogPage;
