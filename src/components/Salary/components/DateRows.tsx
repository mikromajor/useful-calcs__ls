import { JSX } from "react";
import { DATE_KEYS } from "constants/salaryConstants";
import { salaryActions } from "store/reducer/salaryReducer";
import { InputIterator } from ".";

const { changeSalaryDate } = salaryActions;

export const DateRows = () => {
  const rows: JSX.Element[] = InputIterator({ action: changeSalaryDate, iterator: DATE_KEYS });
  return <>{rows}</>;
};
