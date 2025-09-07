import { amountWeekendsAndWeekdays, calculateSalaries } from ".";
import { SalaryInit, PayloadType } from "types/salaryTypes";

export const handleCalculateData = (state: SalaryInit, payload: PayloadType) => {
  Object.assign(state, payload);

  const { weekends, weekdays } = amountWeekendsAndWeekdays(state.year, state.month);

  state.workDays = weekdays - state.sickLeaveWeekDays - state.holidays - state.usedVacation - state.bloodDonation;
  state.workHours = state.workDays * 8;
  state.weekendDays = weekends;

  calculateSalaries(state);
};
