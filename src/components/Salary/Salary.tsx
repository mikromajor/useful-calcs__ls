import { useAppSelector } from "store/hooks/redux";
import { SALARY_CONTENT } from "constants/salaryConstants";
import { DateRows, RatesRows, ExtraHoursRows, WorkDaysDecrementsRows, CalculatedDataRows } from "./components";

export const Salary = () => {
  const { currentLang, currentTheme } = useAppSelector((state) => state.appReducer);

  // const salaryReducer = useAppSelector((state) => state.salaryReducer);

  return (
    <div className='salary'>
      <table className={`salary__tabel salary__tabel--${currentTheme}`}>
        <caption className={`salary__header salary__header--${currentTheme}`}>{SALARY_CONTENT[currentLang].header}</caption>
        <tbody>
          <DateRows />
          <RatesRows />
          <ExtraHoursRows />
          <WorkDaysDecrementsRows />
          <CalculatedDataRows />
        </tbody>
      </table>
    </div>
  );
};
