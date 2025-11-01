import { AlcoState } from "types/alcoTypes";
import { getAlcoKey } from ".";

export const saveStateInStorage = (state: AlcoState) =>
  window.localStorage.setItem(getAlcoKey([state.currentDate.year]), JSON.stringify(state));
