import { calculateSalaries, determNettoPerHour } from ".";
import { SalaryInit, PayloadType } from "types/salaryTypes";

export const calcNewRates = (state: SalaryInit, payload: PayloadType) => {
  Object.assign(state, payload);

  const { taxRate, workHours } = state;

  if ("salaryRateGrossPerHour" in payload) {
    state.nettoPerHours = determNettoPerHour(payload.salaryRateGrossPerHour, taxRate);

    state.salaryRateGrossPerMonth = state.salaryRateGrossPerHour * workHours;
  }
  if ("salaryRateGrossPerMonth" in payload) {
    const grossPerHour = payload.salaryRateGrossPerMonth / workHours;

    state.nettoPerHours = determNettoPerHour(grossPerHour, taxRate);

    state.salaryRateGrossPerHour = payload.salaryRateGrossPerMonth / workHours;
  }
  if ("taxRate" in payload) {
    state.nettoPerHours = determNettoPerHour(state.salaryRateGrossPerHour, payload.taxRate);
  }

  calculateSalaries(state);
};
