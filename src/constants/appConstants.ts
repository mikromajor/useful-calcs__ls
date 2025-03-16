import { AppThemes, AppLanguages } from "types/appTypes";

export const INIT_APP_STATE = {
  currentLang: AppLanguages.UA,
  currentTheme: AppThemes.WHITE,
};

export const APP_CONTENT = {
  [AppLanguages.EN]: {
    lblTheme: "theme",
    btnChangeCalc: "Change calculator",
    lblLang: "Change language:",
    [AppThemes.DARK]: "Black",
    [AppThemes.WHITE]: "White",
    goToAlcoCalc: "Alco-calendar",
    goToSalary: "Salary",
  },
  [AppLanguages.PL]: {
    lblTheme: "theme",
    btnChangeCalc: "Zmień kalkulator",
    lblLang: "Zmień język",
    [AppThemes.DARK]: "Ciemna",
    [AppThemes.WHITE]: "Światła",
    goToAlcoCalc: "Alko-kalendarz",
    goToSalary: "Wypłata",
  },
  [AppLanguages.UA]: {
    lblTheme: "Тема",
    btnChangeCalc: "Зміни калькулятор",
    lblLang: "Змінити мову",
    [AppThemes.DARK]: "Темна",
    [AppThemes.WHITE]: "Світла",
    goToAlcoCalc: "Алкокалендар",
    goToSalary: "Зарплата",
  },
};

export const LANGUAGES_LIST = Object.keys(APP_CONTENT) as (keyof typeof AppLanguages)[];
