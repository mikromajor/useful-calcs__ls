import { getKey } from ".";
import { SalaryInit } from "types/salaryTypes";

export const determineVacationPayCoefficient = (state: SalaryInit): number => {
  let vacationPayCoefficientPerDay = 0;

  let pastsDateKey = "";

  for (let i = 1; i <= 3; i++) {
    if (state.month - i > 0) {
      pastsDateKey = getKey(state.year, state.month - i);
    } else {
      pastsDateKey = getKey(state.year - 1, state.month + 12 - i);
    }
    const item = window.localStorage.getItem(pastsDateKey);
    const savedData = !!item && (JSON.parse(item) as SalaryInit);

    vacationPayCoefficientPerDay += !!savedData ? savedData.totalSalary / savedData.workDays : 8 * state.nettoPerHours;
  }

  return vacationPayCoefficientPerDay / 3;
};
