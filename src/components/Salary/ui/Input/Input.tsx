import { useAppSelector, useAppDispatch } from "store/hooks/redux";

import { salaryActions } from "store/reducer/salaryReducer";
import { KeysSalaryInit } from "types/salaryTypes";

type InputProps = {
  payloadsKey: KeysSalaryInit;
};

export const Input = ({ payloadsKey }: InputProps) => {
  const dispatch = useAppDispatch();
  const { currentTheme } = useAppSelector((state) => state.appReducer);

  const salaryReducer = useAppSelector((state) => state.salaryReducer);

  const { getSalary, changeSalaryDate } = salaryActions;

  const handlerInputChange = (val: number) => {
    if (payloadsKey === "month" || payloadsKey === "year") {
      dispatch(changeSalaryDate({ [payloadsKey]: val }));
    } else {
      dispatch(getSalary({ [payloadsKey]: val }));
    }
  };
  const changeByOne = (val: number) => {
    if (payloadsKey === "month" || payloadsKey === "year") {
      dispatch(changeSalaryDate({ [payloadsKey]: salaryReducer[payloadsKey] + val }));
    } else {
      dispatch(getSalary({ [payloadsKey]: salaryReducer[payloadsKey] + val }));
    }
  };

  return (
    <div className='salary__input-wrapper'>
      <button className={`salary__change-by-one salary__change-by-one--${currentTheme}`} onClick={() => changeByOne(-1)}>
        -1
      </button>
      <input
        className={`salary__input salary__input--${currentTheme}`}
        id={payloadsKey}
        type='number'
        autoComplete='off'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const val = Number(e.currentTarget.value);

          handlerInputChange(val);
        }}
        value={String(salaryReducer[payloadsKey])}
      />

      <button className={`salary__change-by-one salary__change-by-one--${currentTheme}`} onClick={() => changeByOne(1)}>
        +1
      </button>
    </div>
  );
};
