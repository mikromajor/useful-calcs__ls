import { JSX } from "react";
import { RATES_KEYS } from "constants/salaryConstants";
import { salaryActions } from "store/reducer/salaryReducer";
import { InputIterator } from ".";

const { changeRates } = salaryActions;

export const RatesRows = () => {
  const rows: JSX.Element[] = InputIterator({ action: changeRates, iterator: RATES_KEYS });
  return <>{rows}</>;
};
