import { SalaryInit } from "types/salaryTypes";
import { SALARY_INIT } from "constants/salaryConstants";
import { getKey } from ".";

// TODO : rewrite with try..catch and do one  function for all storage handlers.

export const tryStorageData = () => {
  const { year, month } = SALARY_INIT;
  const isStoreData = window.localStorage.getItem(getKey(year, month));

  return isStoreData ? (JSON.parse(isStoreData) as unknown as SalaryInit) : null;
};
