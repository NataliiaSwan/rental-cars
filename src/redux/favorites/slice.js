import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Використання локального сховища

// Створення slice для управління станом улюблених елементів
const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [], // Початковий стан масиву улюблених елементів
  },
  reducers: {
    setFavorite(state, action) {
      const { id } = action.payload; // Отримуємо id елемента

      // Перевіряємо, чи вже є елемент у масиві
      const index = state.items.findIndex((item) => item.id === id);
      if (index !== -1) {
        // Якщо елемент знайдений, видаляємо його
        state.items.splice(index, 1);
      } else {
        // Якщо елемент не знайдений, додаємо його в масив
        state.items.push(action.payload);
      }
    },
  },
});

// Конфігурація для persistReducer
const persistConfig = {
  key: 'favorites', // Ключ для збереження в сховищі
  storage, // Використання localStorage
};

// Обгортка для reducer з persistReducer
export const favoritesReducer = persistReducer(
  persistConfig,
  favoritesSlice.reducer
);

// Експортуємо action creator для використання в компонентах
export const { setFavorite } = favoritesSlice.actions;
