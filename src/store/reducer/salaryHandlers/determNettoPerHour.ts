import { SalaryInit } from "types/salaryTypes";

export const determNettoPerHour = (grossPerHour: number, taxRate: number) =>
  Math.round(grossPerHour * (1 - taxRate / 100) * 100) / 100;
