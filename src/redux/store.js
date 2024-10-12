import { configureStore } from '@reduxjs/toolkit';
import campersReducer from './campers/CampersSlice.js';

const store = configureStore({
  reducer: {
    campers: campersReducer,
  },
});

export default store;
