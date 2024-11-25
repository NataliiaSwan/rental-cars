import { createSlice } from '@reduxjs/toolkit';
import { getAllCampers } from '../../redux/campers/operations.js';
import { getCamperById } from '../../redux/campers/operations.js';

const handlePending = (state) => {
  state.isError = false;
  state.notFound = false;
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  if (payload.status === 404) {
    state.notFound = true;
    state.isLoading = false;
  } else {
    state.isError = true;
    state.isLoading = false;
  }
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    selectedItem: null,
    total: null,
    isLoading: false,
    isError: null,
    notFound: false,
  },
  reducers: {
    resetItems: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getAllCampers.pending, handlePending)
      .addCase(getAllCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        const newItems = action.payload.items.filter(
          (newItem) => !state.items.some((item) => item.id === newItem.id)
        );
        state.items = [...state.items, ...newItems];
        state.total = action.payload.total;
      })
      .addCase(getAllCampers.rejected, handleRejected)
      .addCase(getCamperById.pending, handlePending)
      .addCase(getCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.selectedItem = action.payload;
      })
      .addCase(getCamperById.rejected, handleRejected),
});

export const campersReducer = campersSlice.reducer;
export const { resetItems } = campersSlice.actions;
