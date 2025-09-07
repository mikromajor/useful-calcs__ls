import { SalaryInit } from "types/salaryTypes";
import { determStandardSalary, determExtraSalary } from "./";

export const calculateSalaries = (state: SalaryInit) => {
  state.standardSalary = determStandardSalary(state);

  state.extraSalary = determExtraSalary(state);

  state.totalSalary = state.standardSalary + state.extraSalary;
};
