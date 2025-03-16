import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INIT_ALCO_STATE } from "constants/alcoConstants";
import { tryStorageData, saveStateInStorage, setDecimal, addVodkaToState, getMaxValidDayInCurrentMonth } from "./alcoHandlers";

const store = tryStorageData(INIT_ALCO_STATE.currentDate.year);

export const alcoReducer = createSlice({
  name: "alcoState",
  initialState: !!store ? store : INIT_ALCO_STATE,
  reducers: {
    changeDay: (state, action: PayloadAction<string>) => {
      const day = Number(action.payload);
      const { month, year } = state.currentDate;

      state.currentDate.day = getMaxValidDayInCurrentMonth(day, Number(month), Number(year));
    },

    changeMonth: (state, action: PayloadAction<string>) => {
      const month = Number(action.payload);
      if (month > 0 && month < 13) {
        const { day, year } = state.currentDate;

        state.currentDate.day = getMaxValidDayInCurrentMonth(Number(day), month, Number(year));
        state.currentDate.month = month.toString();
      }
    },
    changeYear: (state, action: PayloadAction<string>) => {
      const year = action.payload;

      const isStoreData = tryStorageData(year);

      Object.assign(state, !!isStoreData ? isStoreData : INIT_ALCO_STATE, {
        currentDate: {
          ...state.currentDate,
          year,
        },
      });
    },

    calculating: (state, action: PayloadAction<string[]>) => {
      const [vol, per] = action.payload.map((d) => Number(d));

      if (vol && per) {
        const vodka = setDecimal((vol * per * 2.5) / 100, 0);

        addVodkaToState(state, vodka);

        saveStateInStorage(state);
      }
    },
    clearAllStor: () => {
      window.localStorage.clear();
    },
  },
});

export default alcoReducer.reducer;
export const alcoActions = alcoReducer.actions;
