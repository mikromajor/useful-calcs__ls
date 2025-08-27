import { amountWeekendsAndWeekdays, isNum, determExtraSalary, determStandardSalary, determNettoPerHour } from ".";
import { SalaryInit, SalaryInputs } from "types/salaryTypes";

export const calculateSalary = (state: SalaryInit, payload: SalaryInputs) => {
  const {
    salaryRateGrossPerHour,
    // salaryRateGrossPerMonth,
    premiumUzn,
    premiumRate,
    taxRate,
    extraHours_50,
    extraHours_100,
    extraHours_120,
    holidays,
    sickLeaveWeekDays,
    sickLeaveWeekendDays,
    usedVacation,
    bloodDonation,
  } = payload;

  // Calculate the number of weekends and weekdays in the given month

  const { weekends, weekdays } = amountWeekendsAndWeekdays(state.year, state.month);

  isNum(sickLeaveWeekDays) && (state.sickLeaveWeekDays = sickLeaveWeekDays);
  isNum(sickLeaveWeekendDays) && (state.sickLeaveWeekendDays = sickLeaveWeekendDays);

  isNum(usedVacation) && (state.usedVacation = usedVacation);
  isNum(bloodDonation) && (state.bloodDonation = bloodDonation);
  isNum(holidays) && (state.holidays = holidays);

  state.workDays = weekdays - state.sickLeaveWeekDays - state.holidays - state.usedVacation - state.bloodDonation;

  state.workHours = state.workDays * 8;

  state.weekendDays = weekends;

  isNum(salaryRateGrossPerHour) && (state.salaryRateGrossPerHour = salaryRateGrossPerHour);

  isNum(premiumRate) && (state.premiumRate = premiumRate);

  isNum(premiumUzn) && (state.premiumUzn = premiumUzn);

  isNum(taxRate) && (state.taxRate = taxRate);

  isNum(extraHours_50) && (state.extraHours_50 = extraHours_50);

  isNum(extraHours_100) && (state.extraHours_100 = extraHours_100);

  isNum(extraHours_120) && (state.extraHours_120 = extraHours_120);

  state.nettoPerHours = determNettoPerHour(state);

  state.standardSalary = determStandardSalary(state);

  state.extraSalary = determExtraSalary(state);

  state.totalSalary = state.standardSalary + state.extraSalary;
};
