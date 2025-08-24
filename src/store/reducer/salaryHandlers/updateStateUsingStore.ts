import { SalaryInit } from "types/salaryTypes";
import { SALARY_INIT } from "constants/salaryConstants";
import { amountWeekendsAndWeekdays, getKey } from ".";

export const updateStateUsingStore = (state: SalaryInit) => {
  if (typeof window === "undefined") {
    return undefined;
  }
  const { year, month } = state;
  const { weekends, weekdays } = amountWeekendsAndWeekdays(year, month);
  const dateKey = getKey(year, month);

  try {
    const item = window.localStorage.getItem(dateKey);

    const update = !!item
      ? (JSON.parse(item) as SalaryInit)
      : {
          ...SALARY_INIT,
          workDays: weekdays,
          weekendDays: weekends,
          year: year,
          month: month,
        };
    // Check values and set them to 0 if saved value is NaN
    Object.keys(update).forEach((key) => {
      if (isNaN(update[key as keyof SalaryInit] as number)) {
        update[key as keyof SalaryInit] = 0;
      }
    });
    Object.assign(state, update);
  } catch (e) {
    console.log("Error caught in updateStateUsingStore ->", e);
  }
};
