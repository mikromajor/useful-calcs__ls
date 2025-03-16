import { AlcoState, DayInfo, MonthInfo, YearInfo, AlcoContent } from "types/alcoTypes";
import { getDateMonthYear } from "lib/getDateMonthYear";
import { AppLanguages } from "types/appTypes";

//for calendar: new Date(year, monthIndex(0-11), day)
const [currentDay, currentMonth, currentYear] = getDateMonthYear(new Date());

const CURRENT_DATE = {
  day: currentDay,
  month: currentMonth,
  year: currentYear,
};

export const INIT_DAY: DayInfo = {
  totalVodka: 0,
  totalBill: 0,
};
export const INIT_MONTH: MonthInfo = {
  totalVodka: 0,
  totalBill: 0,
  days: [], // 1-31 days info (exist validation max  days in a month)
};
export const INIT_YEAR: YearInfo = {
  totalVodka: 0,
  totalBill: 0,
  months: [], // 1-12 months info
};

export const INIT_ALCO_STATE: AlcoState = {
  currentDate: CURRENT_DATE,
  yearData: INIT_YEAR,
};

export const ALCO_CONTENT: AlcoContent = {
  [AppLanguages.PL]: {
    alcoHeader: "Alco-kalendarz",
    controlPanelHeader: "Wprowadź dane napoju",
    lblDay: "Dzień",
    lblMonth: "Miesiąc",
    lblYear: "Rok",
    lblVolume: "Objętość płynu, ml",
    lblPercent: "Zawartość alkoholu, %",
    btnAdd: "Dodaj",
    btnShowAlcoCalendar: "Pokazywać kalendarz",
    caption: "Sumarycznie spożyto wódki",
    deleteYear: "Usunąć dane za rok",
    deleteMonth: "Usunąć dane za miesiąc",
  },
  [AppLanguages.EN]: {
    alcoHeader: "Alco-calendar",
    controlPanelHeader: "Enter the drink consumed",
    lblDay: "Day",
    lblMonth: "MonthInfo",
    lblYear: "Year",
    lblVolume: "Volume liquid, ml",
    lblPercent: "Alcohol content, %",
    btnAdd: "Add",
    btnShowAlcoCalendar: "Show calendar",
    caption: "Total vodka drunk",
    deleteYear: "Delete year's data",
    deleteMonth: "Delete month's data",
  },
  [AppLanguages.UA]: {
    alcoHeader: "Алкокалендар",
    controlPanelHeader: "Введіть спожитий напій",
    lblDay: "День",
    lblMonth: "Місяць",
    lblYear: "Рік",
    lblVolume: "Об'єм рідини, мл",
    lblPercent: "Вміст алкоголю, %",
    btnAdd: "Додати",
    btnShowAlcoCalendar: "Показувати календар",
    caption: "Сумарно випито горілки",
    deleteYear: "Видалити дані за рік",
    deleteMonth: "Видалити дані за місяць",
  },
};
