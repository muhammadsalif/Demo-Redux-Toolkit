import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "Counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByamout: (state, action) => {
      state.count += Number(action.payload);
    },
  },
});

export const { increment, decrement, incrementByamout } = counterSlice.actions;
export default counterSlice.reducer;
