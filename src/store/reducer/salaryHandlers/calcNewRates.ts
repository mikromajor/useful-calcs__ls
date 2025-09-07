import { calculateSalaries, determNettoPerHour } from ".";
import { SalaryInit, PayloadType } from "types/salaryTypes";

export const calcNewRates = (state: SalaryInit, payload: PayloadType) => {
  Object.assign(state, payload);

  const { taxRate, workHours } = state;

  if ("salaryRateGrossPerHour" in payload) {
    state.nettoPerHours = determNettoPerHour(payload.salaryRateGrossPerHour, taxRate);

    state.salaryRateGrossPerMonth = Math.round(state.salaryRateGrossPerHour * workHours * 100) / 100;
  }
  if ("salaryRateGrossPerMonth" in payload) {
    const grossPerHour = Math.round((payload.salaryRateGrossPerMonth / workHours) * 100) / 100;

    state.nettoPerHours = determNettoPerHour(grossPerHour, taxRate);

    state.salaryRateGrossPerHour = Math.round((payload.salaryRateGrossPerMonth / workHours) * 100) / 100;
  }
  if ("taxRate" in payload) {
    state.nettoPerHours = determNettoPerHour(state.salaryRateGrossPerHour, payload.taxRate);
  }

  calculateSalaries(state);
};
