import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INIT_ALCO_STATE } from "constants/alcoConstants";
import { saveStateInStorage, setDecimal, addVodkaToState, getMaxValidDayInCurrentMonth, getAlcoKey } from "./alcoHandlers";
import { getStorage } from "lib";

const initYear = INIT_ALCO_STATE.currentDate.year;
const isStore = getStorage(getAlcoKey, [initYear, 0]);

export const alcoReducer = createSlice({
  name: "alcoState",
  initialState: !!isStore ? isStore : INIT_ALCO_STATE,
  reducers: {
    changeDay: (state, action: PayloadAction<number>) => {
      const day = action.payload;
      const { month, year } = state.currentDate;

      state.currentDate.day = getMaxValidDayInCurrentMonth(day, month, year);
    },

    changeMonth: (state, action: PayloadAction<number>) => {
      const month = action.payload;
      if (month > 0 && month < 13) {
        const { day, year } = state.currentDate;

        state.currentDate.day = getMaxValidDayInCurrentMonth(day, month, year);
        state.currentDate.month = month;
      }
    },
    changeYear: (state, action: PayloadAction<number>) => {
      const year = action.payload;

      const isStoreData = getStorage(getAlcoKey, [year, 0]);

      Object.assign(state, !!isStoreData ? isStoreData : INIT_ALCO_STATE, {
        currentDate: {
          ...state.currentDate,
          year: year,
        },
      });
    },

    calculating: (state, action: PayloadAction<number[]>) => {
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
