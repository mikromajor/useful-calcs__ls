import { JSX } from "react";
import { EXTRA_HOURS_KEYS } from "constants/salaryConstants";
import { salaryActions } from "store/reducer/salaryReducer";
import { InputIterator } from ".";

const { getSalary } = salaryActions;

export const ExtraHoursRows = () => {
  const rows: JSX.Element[] = InputIterator({ action: getSalary, iterator: EXTRA_HOURS_KEYS });
  return <>{rows}</>;
};
