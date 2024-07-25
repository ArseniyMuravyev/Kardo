import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  user: null;
  counter: number;
}

const initialState: UserState = {
  user: null,
  counter: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
  },
});

export const { increment } = userSlice.actions;
export default userSlice.reducer;
