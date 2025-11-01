import { SalaryInit } from "types/salaryTypes";
import { SALARY_INIT } from "constants/salaryConstants";
import { amountWeekendsAndWeekdays, getSalaryKey } from ".";
import { getStorage } from "lib";

export const updateStateUsingStore = (state: SalaryInit) => {
  if (typeof window === "undefined") {
    return undefined;
  }
  const { year, month } = state;
  const { weekends, weekdays } = amountWeekendsAndWeekdays(year, month);

  try {
    const expectStorageData: SalaryInit | null = getStorage(getSalaryKey, [year, month]);

    const update = !!expectStorageData
      ? expectStorageData
      : {
          ...SALARY_INIT,
          workDays: weekdays,
          weekendDays: weekends,
          year: year,
          month: month,
        };
    // Correct values if saved value is NaN
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
