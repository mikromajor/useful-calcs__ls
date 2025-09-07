import { JSX } from "react";
import { CALCULATED_DATA_KEYS, SALARY_CONTENT } from "constants/salaryConstants";
import { useAppSelector } from "store/hooks/redux";

export const CalculatedDataRows = () => {
  const salary = useAppSelector((state) => state.salaryReducer);

  const { currentLang, currentTheme } = useAppSelector((state) => state.appReducer);

  const rows: JSX.Element[] = [];
  let td: JSX.Element;
  let th: JSX.Element;

  CALCULATED_DATA_KEYS.forEach((key) => {
    td = <td className={`salary__td salary__td-no-inputs salary__td--${currentTheme}`}>{salary[key]}</td>;
    th = <th className={`salary__th salary__th--${currentTheme}`}>{SALARY_CONTENT?.[currentLang]?.[key]}</th>;

    rows.push(
      <tr className={`salary__tr salary__tr--${currentTheme}`} key={key}>
        {th}
        {td}
      </tr>,
    );
  });

  return rows;
};
