import { PayloadType, SalaryInit } from "types/salaryTypes";
import { checkMonth, isNum } from ".";

export const checkDates = (state: SalaryInit, payload: PayloadType) => {
  // Оскільки payload може бути { month: ... } або { year: ... },
  // ми перевіряємо наявність кожної властивості окремо.
  if ("month" in payload && checkMonth(payload.month)) {
    state.month = payload.month;
  }
  if ("year" in payload && isNum(payload.year)) {
    state.year = payload.year;
  }
};
