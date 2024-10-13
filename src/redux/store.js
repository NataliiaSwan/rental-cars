import { configureStore } from '@reduxjs/toolkit';
import campersReducer from './campers/CampersSlice.js';
import camperDetailsReduce from './campers/campersDetailsSlice.js';

const store = configureStore({
  reducer: {
    campers: campersReducer,
    camperDetails: camperDetailsReduce,
  },
});

export default store;

// import { combineReducers } from 'redux';
// import campersReducer from './campers/CampersSlice';
// import camperDetailsReducer from './campers/campersDetailsSlice';

// const rootReducer = combineReducers({
//   campers: campersReducer,
//   camperDetails: camperDetailsReducer,
// });

// export default rootReducer;
