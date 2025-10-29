import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import alcoReducer from "./reducer/alcoReducer";
import salaryReducer from "./reducer/salaryReducer";
import appReducer from "./reducer/appReducer";

export const store = configureStore({
  reducer: { appReducer, alcoReducer, salaryReducer },
});

export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;
