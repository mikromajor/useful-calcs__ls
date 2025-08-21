import { SalaryInit } from "types/salaryTypes";
import { SOCIAL_COEFFICIENTS } from "constants/salaryConstants";
import { determineVacationPayCoefficient } from ".";

export const determStandardSalary = (state: SalaryInit) => {
  const { sickCoefficient } = SOCIAL_COEFFICIENTS;

  const {
    premiumRate,
    premiumUzn,
    taxRate,
    nettoPerHours,
    workHours,
    usedVacation,
    bloodDonation,
    sickLeaveWeekDays,
    sickLeaveWeekendDays,
  } = state;

  const averageVacationPayPerDay = determineVacationPayCoefficient(state);

  const premiumConstPayment = premiumUzn * (1 - taxRate / 100);

  const premiumRatePayment = (premiumRate / 100) * nettoPerHours * workHours;

  const bloodDonationPayment = bloodDonation * 8 * nettoPerHours;

  const vacationPayment = usedVacation * averageVacationPayPerDay;

  const sickPayment = (sickLeaveWeekDays + sickLeaveWeekendDays) * sickCoefficient * nettoPerHours * 8;

  const standardPayment = workHours * nettoPerHours;

  return Math.round(
    standardPayment + sickPayment + vacationPayment + bloodDonationPayment + premiumRatePayment + premiumConstPayment,
  );
};
// TODO: зробити хворобові як середнє за останні 12 місяців
