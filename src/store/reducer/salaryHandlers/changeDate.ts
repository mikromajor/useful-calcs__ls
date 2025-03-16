import { PayloadType, SalaryInit } from "types/salaryTypes";
import { checkMonth, isNum } from ".";

export const changeDate = (state: SalaryInit, { year, month }: PayloadType) => {
  checkMonth(month) && (state.month = month);
  isNum(year) && (state.year = year);
};
