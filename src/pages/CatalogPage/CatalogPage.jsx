import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import CampersList from '../../components/CamperList/CamperList.jsx';
import FilterList from '../../components/FilterList/FilterList.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import ButtonLoadMore from '../../components/ButtonLoadMore/ButtonLoadMore.jsx';
import { getAllCampers } from '../../redux/campers/operations.js';
import { resetItems } from '../../redux/campers/slice.js';
import {
  selectIsError,
  selectIsLoading,
  selectNotFound,
  selectShownMoreBtn,
} from '../../redux/campers/selectors.js';
import css from './CatalogPage.module.css';
import NotFound from '../../pages/NotFound/NotFound.jsx';

function CatalogPage() {
  const [page, setPage] = useState(1);

  const isLoading = useSelector(selectIsLoading);
  const notFound = useSelector(selectNotFound);
  const isError = useSelector(selectIsError);
  const shownMoreBtn = useSelector(selectShownMoreBtn);

  const [params] = useSearchParams();

  const memoizedParamObject = useMemo(() => {
    const paramObject = {};

    const searchParams = [
      'transmission',
      'engine',
      'form',
      'bathroom',
      'kitchen',
      'TV',
      'AC',
      'location',
      'radio',
    ];

    searchParams.forEach((item) => {
      const paramValue = params.get(item);
      if (paramValue) {
        paramObject[item] = paramValue;
      }
    });

    return paramObject;
  }, [params]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCampers({ page, ...memoizedParamObject }));
  }, [dispatch, page, memoizedParamObject]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const onSearch = () => {
    dispatch(resetItems());
    setPage(1);
  };

  return (
    <div className={css.catalogPage}>
      <FilterList onSearch={onSearch} />
      {!isError && !notFound && <CampersList handleLoadMore={handleLoadMore} />}
      {!isLoading && shownMoreBtn && (
        <ButtonLoadMore onClick={handleLoadMore} />
      )}
      {isLoading && <Loader />}
      {notFound && !isLoading && <NotFound />}
      {isError && !isLoading && <p>An error occurred !</p>}
    </div>
  );
}

export default CatalogPage;
