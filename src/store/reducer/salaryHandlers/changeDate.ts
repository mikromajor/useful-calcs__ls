import { SalaryDate, SalaryInit } from "types/salaryTypes";
import { checkMonth, isNum } from ".";

export const changeDate = (state: SalaryInit, { year, month }: SalaryDate) => {
  checkMonth(month) && (state.month = month);
  isNum(year) && (state.year = year);
};
