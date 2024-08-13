import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../types";

interface IInitialState {
  user: User
  stepRegistration: number
}

const initialState: IInitialState = {
  user: {
    id: null,
    email: '',
    password: '',
    nickname: '',
    firstName: '',
    lastName: '',
    middle_name: '',
    birthday: '',
    country: '',
    region: '',
    city: '',
    phone: '',
    photoLink: '',
    backgroundLink: '',
    pageLink: '',
    style: 'BREAKING',
    aboutMe: '',
    state: '',
    citizenship: null
  },
  stepRegistration: 1,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = {...(state.user), ...(action.payload)};
    },
    removeUser(state) {
      state.user = initialState.user;
    },
    setStepRegistration(state, action: PayloadAction<number>) {
      state.stepRegistration = action.payload
    }
  },
})

export const {setUser, removeUser, setStepRegistration} = userSlice.actions;
export default userSlice.reducer;