import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/';

export const getAllCampers = createAsyncThunk(
  'campers/getAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/campers');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const getCamperById = createAsyncThunk(
//   'campers/getOne',
//   async (camperId, thunkAPI) => {
//     try {
//       const response = await axios.get(`/campers/${camperId}`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

export const getCamperById = createAsyncThunk(
  'campers/getOne',
  async (camperId, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${camperId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue({
        message: e.message,
        status: e.response?.status,
      });
    }
  }
);
