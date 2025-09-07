import {
  SalaryDate,
  SalaryDateKeys,
  SalaryRates,
  SalaryRatesKeys,
  SalaryExtraHours,
  SalaryExtraHoursKeys,
  SalaryWorkDaysDecrements,
  SalaryWorkDaysDecrementsKeys,
  SalaryCalculatedData,
  SalaryCalculatedDataKeys,
  SalaryInit,
  SalaryInitKeys,
} from "types/salaryTypes";
import { AppLanguages } from "types/appTypes";
import { amountWeekendsAndWeekdays } from "store/reducer/salaryHandlers";

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;
const { weekdays, weekends } = amountWeekendsAndWeekdays(currentYear, currentMonth);

const workHours = weekdays * 8;

const DATE: SalaryDate = { month: currentMonth, year: currentYear };

export const DATE_KEYS = Object.keys(DATE) as SalaryDateKeys[];

const RATES: SalaryRates = {
  salaryRateGrossPerHour: 0,
  salaryRateGrossPerMonth: 0,
  premiumRate: 0,
  premiumUzn: 0,
  taxRate: 27,
};

export const RATES_KEYS = Object.keys(RATES) as SalaryRatesKeys[];

const EXTRA_HOURS: SalaryExtraHours = {
  extraHours_50: 0,
  extraHours_100: 0,
  extraHours_120: 0,
};

export const EXTRA_HOURS_KEYS = Object.keys(EXTRA_HOURS) as SalaryExtraHoursKeys[];

const WORK_DAYS_DECREMENTS: SalaryWorkDaysDecrements = {
  holidays: 0,
  usedVacation: 0,
  bloodDonation: 0,
  sickLeaveWeekDays: 0,
  sickLeaveWeekendDays: 0,
};

export const WORK_DAYS_DECREMENTS_KEYS = Object.keys(WORK_DAYS_DECREMENTS) as SalaryWorkDaysDecrementsKeys[];

const CALCULATED_DATA: SalaryCalculatedData = {
  nettoPerHours: 0,
  workDays: weekdays,
  weekendDays: weekends,
  workHours: workHours,
  standardSalary: 0,
  extraSalary: 0,
  totalSalary: 0,
};

export const CALCULATED_DATA_KEYS = Object.keys(CALCULATED_DATA) as SalaryCalculatedDataKeys[];

export const SALARY_INIT: SalaryInit = {
  ...DATE,
  ...RATES,
  ...EXTRA_HOURS,
  ...WORK_DAYS_DECREMENTS,
  ...CALCULATED_DATA,
};

export const SALARY_INIT_KEYS = Object.keys(SALARY_INIT) as SalaryInitKeys[];

export const PREMIUM_COEFFICIENT = {
  pr_50: 1.5,
  pr_100: 2,
  pr_120: 2.2,
};

export const SOCIAL_COEFFICIENTS = {
  sickCoefficient: 0.8,
  bloodDonationCoefficient: 1,
};

export const SALARY_CONTENT = {
  [AppLanguages.UA]: {
    header: "Зарплата",
    year: "Рік",
    month: "Місяць",
    salaryRateGrossPerHour: "Ставка брутто, зл/год",
    salaryRateGrossPerMonth: "Ставка брутто, зл/місяць",
    nettoPerHours: "Ставка нетто, зл/год",
    taxRate: "Податкові та соціальні відрахування, %",
    premiumRate: "Премія, відсоток від ставки, %",
    premiumUzn: "Премія стала, зл. брутто",
    extraHours_50: "Години понаднормові з оплатою +50%",
    extraHours_100: "Години понаднормові з оплатою +100%",
    extraHours_120: "Години понаднормові з оплатою +120%",
    sickLeaveWeekDays: "Хворів в будні, дн",
    sickLeaveWeekendDays: "Хворів у вихідні/святкові, дн",
    usedVacation: "Використав відпустки, дн",
    bloodDonation: "Донорство крові в будні, дн",
    holidays: "Святкових днів в місяці",
    workDays: "Робочих днів в місяці",
    weekendDays: "Вихідних днів в місяці",
    workHours: "Робочих годин в місяці",
    standardSalary: "Зарплата без додатків, зл нетто",
    extraSalary: "Зарплата понаднормова, зл нетто",
    totalSalary: "Зарплата вся, зл нетто",
  },
  [AppLanguages.EN]: {
    header: "Salary",

    year: "Year",
    month: "Month",
    salaryRateGrossPerHour: "Salary rate, gross zl/h",
    salaryRateGrossPerMonth: "Salary rate, gross zl/month",
    nettoPerHours: "Salary rate, net zl/h",
    taxRate: "Tax rate, %",
    premiumRate: "Premium rate, %",
    premiumUzn: "Premium const, gross zl",
    extraHours_50: "Extra hours +50%, h",
    extraHours_100: "Extra hours +100%, h",
    extraHours_120: "Extra hours +120%, h",
    sickLeaveWeekDays: "Sick leave week days",
    sickLeaveWeekendDays: "Sick leave weekend days",
    usedVacation: "Used vacation",
    bloodDonation: "Blood donation, days",
    holidays: "Holidays",
    workDays: "Week days",
    weekendDays: "Weekends",
    workHours: "Standard work hours, h",
    standardSalary: "Standard salary, net zl",
    extraSalary: "Extra salary, net zl",
    totalSalary: "Total salary, net zl",
  },
  [AppLanguages.PL]: {
    header: "Wypłata",

    year: "Rok",
    month: "Miesiąc",
    salaryRateGrossPerHour: "Stawka brutto, zł/g",
    salaryRateGrossPerMonth: "Stawka brutto, zł/miesiąc",
    nettoPerHours: "Stawka netto, zł/g",
    taxRate: "Potrącenia składkowe i podatkowe, %",
    premiumRate: "Premia (procent do stawki), %",
    premiumUzn: "Premia uznaniowa, brutto zł",
    extraHours_50: "Nadgodziny z opłatą +50%, g",
    extraHours_100: "Nadgodziny z opłatą +100%, g",
    extraHours_120: "Nadgodziny z opłatą +120%, g",
    sickLeaveWeekDays: "Chorobowe w powszednie, dni",
    sickLeaveWeekendDays: "Chorobowe w wolny, dni",
    usedVacation: "Wykorzystał urlopu, dni",
    bloodDonation: "Krwiodawstwo, dni powszednie",
    holidays: "Świąteczni dni w miesiącu",
    workDays: "Dni robocze w miesiącu",
    weekendDays: "Dni wolne w miesiącu",
    workHours: "Ilość rob. godzin w miesiącu, g",
    standardSalary: "Wypłata podstawowa, netto zł",
    extraSalary: "Wypłata extra, netto zł",
    totalSalary: "Wypłata pełna, netto zł",
  },
};
