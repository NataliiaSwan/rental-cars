// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// import { configureStore } from '@reduxjs/toolkit';
// import { campersReducer } from '../redux/campers/slice.js';
// import { favoritesReducer } from '../redux/favorites/slice.js';

// export const store = configureStore({
//   reducer: {
//     campers: campersReducer,
//     favorites: favoritesReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from '../redux/campers/slice.js';
import { favoritesReducer } from '../redux/favorites/slice.js';

const store = configureStore({
  reducer: {
    campers: campersReducer,
    favorites: favoritesReducer,
  },
});
export default store;
