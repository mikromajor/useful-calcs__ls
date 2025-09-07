import { useAppDispatch } from "store/hooks/redux";

import { SalaryReducerActionsType } from "store/reducer/salaryReducer";

import { AppThemes } from "types/appTypes";
import { PayloadType, SalaryInputsKeys } from "types/salaryTypes";

type InputProps = {
  payloadsKey: SalaryInputsKeys;
  action: SalaryReducerActionsType[keyof SalaryReducerActionsType];
  currentTheme: AppThemes;
  value: number;
};

export const Input = ({ value, payloadsKey, action, currentTheme }: InputProps) => {
  const dispatch = useAppDispatch();

  const changeInputValue = (val: number) => {
    dispatch(
      action({
        [payloadsKey]: val,
      } as PayloadType),
    );
  };

  const changeByOne = (val: number) => {
    dispatch(
      action({
        [payloadsKey]: value + val,
      } as PayloadType),
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const form = e.currentTarget.closest(".salary");
      if (!form) return;

      const inputs = Array.from(form.querySelectorAll("input.salary__input")) as HTMLInputElement[];
      const currentIndex = inputs.indexOf(e.currentTarget);
      const nextInput = inputs[currentIndex + 1];

      if (nextInput) {
        nextInput.focus();
      }
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
        onKeyDown={handleKeyDown}
        value={String(value)}
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
