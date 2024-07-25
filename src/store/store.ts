import { configureStore, Store } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";
import userReducer from "../features/user/slice";

const store: Store<RootState> = configureStore({
  reducer: userReducer,
});

export type RootState = ReturnType<typeof userReducer>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
