import { SalaryInit } from "types/salaryTypes";

export const determNettoPerHour = (state: SalaryInit) =>
  Math.round(state.salaryRateGrossPerHour * (1 - state.taxRate / 100) * 100) / 100;
