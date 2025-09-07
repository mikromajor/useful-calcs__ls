import { useAppSelector } from "store/hooks/redux";
import { Input } from "../ui";
import { SalaryInputsKeys } from "types/salaryTypes";
import { SalaryReducerActionsType } from "store/reducer/salaryReducer";
import { SALARY_CONTENT } from "constants/salaryConstants";
import { JSX } from "react";

type InputIteratorProps = {
  iterator: SalaryInputsKeys[];
  action: SalaryReducerActionsType[keyof SalaryReducerActionsType];
};

export const InputIterator = ({ action, iterator }: InputIteratorProps) => {
  const salary = useAppSelector((state) => state.salaryReducer);

  const { currentLang, currentTheme } = useAppSelector((state) => state.appReducer);

  const rows: JSX.Element[] = [];
  let td: JSX.Element;
  let th: JSX.Element;

  iterator.forEach((key) => {
    td = (
      <td className={`salary__td salary__td--${currentTheme}`}>
        <Input payloadsKey={key} action={action} currentTheme={currentTheme} value={salary[key]} />
      </td>
    );
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
