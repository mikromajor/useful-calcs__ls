import { JSX } from "react";
import { WORK_DAYS_DECREMENTS_KEYS } from "constants/salaryConstants";
import { salaryActions } from "store/reducer/salaryReducer";
import { InputIterator } from ".";

const { getSalary } = salaryActions;

export const WorkDaysDecrementsRows = () => {
  const rows: JSX.Element[] = InputIterator({ action: getSalary, iterator: WORK_DAYS_DECREMENTS_KEYS });
  return <>{rows}</>;
};
