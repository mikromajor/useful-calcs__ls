// import { SALARY_CONTENT } from "constants/salaryConstants";
interface SalaryDate {
  month: number;
  year: number;
}
interface SalaryRates {
  salaryRateGrossPerHour: number;
  salaryRateGrossPerMonth: number;
  premiumRate: number;
  premiumUzn: number;
  taxRate: number;
}
interface SalaryExtraHours {
  extraHours_50: number;
  extraHours_100: number;
  extraHours_120: number;
}

interface SalaryWorkDaysDecrements {
  holidays: number;
  usedVacation: number;
  bloodDonation: number;
  sickLeaveWeekDays: number;
  sickLeaveWeekendDays: number;
}
interface SalaryCalculatedData {
  nettoPerHours: number;
  workDays: number;
  weekendDays: number;
  workHours: number;
  standardSalary: number;
  extraSalary: number;
  totalSalary: number;
}
type SalaryInputs = SalaryDate & SalaryRates & SalaryExtraHours & SalaryWorkDaysDecrements;
export type SalaryInputsKeys = keyof SalaryInputs;

export type PayloadType = {
  [K in keyof SalaryInputs]: Pick<SalaryInputs, K>;
}[keyof SalaryInputs];

export type SalaryInit = SalaryDate & SalaryRates & SalaryExtraHours & SalaryWorkDaysDecrements & SalaryCalculatedData;

// export type SalaryInit = {
//   year: number;
//   month: number;
//   salaryRateGrossPerHour: number;
//   salaryRateGrossPerMonth: number;
//   premiumRate: number;
//   premiumUzn: number;
//   taxRate: number;
//   nettoPerHours: number;
//   workDays: number;
//   weekendDays: number;
//   workHours: number;
//   extraHours_50: number;
//   extraHours_100: number;
//   extraHours_120: number;
//   sickLeaveWeekDays: number;
//   sickLeaveWeekendDays: number;
//   holidays: number;
//   usedVacation: number;
//   bloodDonation: number;
//   standardSalary: number;
//   extraSalary: number;
//   totalSalary: number;
// };

export type KeysSalaryInit = keyof SalaryInit;

// export type PayloadType = {
//   month?: number;
//   year?: number;

//   salaryRateGrossPerHour?: number;
//   salaryRateGrossPerMonth?: number;
//   premiumRate?: number;
//   premiumUzn?: number;
//   taxRate?: number;

//   extraHours_50?: number;
//   extraHours_100?: number;
//   extraHours_120?: number;

//   sickLeaveWeekDays?: number;
//   sickLeaveWeekendDays?: number;

//   holidays?: number;
//   usedVacation?: number;
//   bloodDonation?: number;
// };
// export type PayloadsKeys = keyof PayloadType;

// // Entries is the function returning type [[key,val],...]
// type Entries<T> = {
//   [K in keyof T]: [K, T[K]];
// }[keyof T][];

// type EntriesSalaryInit = Entries<SalaryInit>;

// TS PICK & OMIT EXAMPLE:

// type Payload = {
//   extraHours: number;
//   MonthInfo: number;
//   YearInfo: string;
// };
// type KeysPayload = keyof Payload;
// // remove written keys
// type PayloadWithoutYear = Omit<Payload, "Year">;
// const rem: removeField = {extraHours:0};

// // save only written keys
// type addField = Pick<
//   PayloadWithoutYear,
//   keyof PayloadWithoutYear
// > & {
//   YearInfo: "2023" | "2024";
//   salary: 5 | 10;
// };
// const pk: addField = {
//   extraHours: 0,
//   MonthInfo: 1,
//   Year: "2023",
//   salary: 5,
// };

// type RemoveKindField<SalaryInit> = {
//   [Property in keyof SalaryInit as Exclude<
//     Property,
//     "currentLanguage"
//   >]: number;
// };
