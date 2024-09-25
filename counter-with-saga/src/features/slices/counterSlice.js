// features/slices/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    data: [],
    loading: false,
    error: null
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementAsyncSuccess: (state) => {
      state.value += 1;
    },
    decrementAsyncSuccess: (state) => {
      state.value -= 1;
    },
    fetchDataSuccess: (state, action) => {
      state.data = action.payload;
    },
    fetchDataFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { increment, decrement, incrementAsyncSuccess, decrementAsyncSuccess, fetchDataSuccess, fetchDataFailure } = counterSlice.actions;

export default counterSlice.reducer;
