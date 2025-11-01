import { getSalaryKey } from ".";
import { getStorage } from "lib";
import { SalaryInit } from "types/salaryTypes";

export const determineVacationPayCoefficient = (state: SalaryInit): number => {
  const { year, month } = state;
  let coef = 0;
  let neededMonths = 0;

  let expectStorageData: SalaryInit | null = null;

  for (let i = 1; i <= 3; i++) {
    neededMonths = month - i > 0 ? month - i : month - i + 12;

    expectStorageData = getStorage(getSalaryKey, [year, neededMonths]);

    if (
      expectStorageData &&
      expectStorageData?.totalSalary !== undefined &&
      expectStorageData?.workDays !== undefined &&
      expectStorageData.workDays !== 0
    ) {
      coef += expectStorageData.totalSalary / expectStorageData.workDays;
    } else {
      coef += 8 * state.nettoPerHours; // default value if no data
    }
  }

  return coef / 3;
};
