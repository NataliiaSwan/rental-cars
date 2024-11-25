import { createSelector } from '@reduxjs/toolkit';

export const selectCampers = (state) => state.campers.items;
export const selectSelectedCamper = (state) => state.campers.selectedItem;
export const selectTotal = (state) => state.campers.total;
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectIsError = (state) => state.campers.isError;
export const selectNotFound = (state) => state.campers.notFound;

export const selectShownMoreBtn = createSelector(
  [selectCampers, selectTotal],
  (campers, total) => {
    return campers.length > 0 && campers.length < total;
  }
);
export const selectDisabledBtn = createSelector(
  [selectIsError, selectIsLoading],
  (isError, isLoading) => {
    return isError || isLoading;
  }
);
