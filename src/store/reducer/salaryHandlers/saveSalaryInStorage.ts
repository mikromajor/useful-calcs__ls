import { SalaryInit } from "types/salaryTypes";
import { getSalaryKey } from "./getSalaryKey";

export const saveSalaryInStorage = (state: SalaryInit) =>
  window.localStorage.setItem(getSalaryKey([state.year, state.month]), JSON.stringify(state));
