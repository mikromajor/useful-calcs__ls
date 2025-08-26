import { useAppSelector, useAppDispatch } from "store/hooks/redux";

import { salaryActions } from "store/reducer/salaryReducer";
import { KeysSalaryInit, SalaryInputsKeys } from "types/salaryTypes";

type InputProps = {
  payloadsKey: SalaryInputsKeys;
};

export const Input = ({ payloadsKey }: InputProps) => {
  const dispatch = useAppDispatch();
  const { currentTheme } = useAppSelector((state) => state.appReducer);

  const salaryReducer = useAppSelector((state) => state.salaryReducer);

  const { getSalary, changeSalaryDate } = salaryActions;

  const changeInputValue = (val: number) => {
    if (payloadsKey === "month" || payloadsKey === "year") {
      dispatch(
        changeSalaryDate({
          ...salaryReducer,
          [payloadsKey]: val,
        }),
      );
    } else {
      dispatch(
        getSalary({
          ...salaryReducer,
          [payloadsKey]: val,
        }),
      );
    }
  };

  const changeByOne = (val: number) => {
    if (payloadsKey === "month" || payloadsKey === "year") {
      dispatch(
        changeSalaryDate({
          ...salaryReducer,
          [payloadsKey]: salaryReducer[payloadsKey] + val,
        }),
      );
    } else {
      dispatch(
        getSalary({
          ...salaryReducer,
          [payloadsKey]: salaryReducer[payloadsKey] + val,
        }),
      );
    }
  };

  return (
    <div className='salary__input-wrapper'>
      <button
        className={`salary__change-by-one salary__change-by-one--${currentTheme}`}
        onClick={() => changeByOne(-1)}
        tabIndex={-1}
      >
        -1
      </button>
      <input
        className={`salary__input salary__input--${currentTheme}`}
        id={payloadsKey}
        type='number'
        autoComplete='off'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const val = Number(e.currentTarget.value);

          changeInputValue(val);
        }}
        value={String(salaryReducer[payloadsKey])}
      />

      <button
        className={`salary__change-by-one salary__change-by-one--${currentTheme}`}
        onClick={() => changeByOne(1)}
        tabIndex={-1}
      >
        +1
      </button>
    </div>
  );
};
