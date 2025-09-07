import {
  // createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { SALARY_INIT } from "constants/salaryConstants";
import { PayloadType } from "types/salaryTypes";
import { checkDates, updateStateUsingStore, handleCalculateData, saveSalaryInStorage, calcNewRates } from "./salaryHandlers";

export const salaryReducer = createSlice({
  name: "salaryState",
  initialState: SALARY_INIT,
  reducers: {
    changeRates: (state, action: PayloadAction<PayloadType>) => {
      calcNewRates(state, action.payload);
      saveSalaryInStorage(state);
    },
    getSalary: (state, action: PayloadAction<PayloadType>) => {
      handleCalculateData(state, action.payload);
      saveSalaryInStorage(state);
    },
    changeSalaryDate: (state, action: PayloadAction<PayloadType>) => {
      checkDates(state, action.payload);
      updateStateUsingStore(state);
    },
  },
});

export default salaryReducer.reducer;
export const salaryActions = salaryReducer.actions;

export type SalaryReducerActionsType = typeof salaryReducer.actions;
