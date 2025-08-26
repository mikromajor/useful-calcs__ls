import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import Badge from "@mui/material/Badge";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay, PickersDayProps } from "@mui/x-date-pickers/PickersDay";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useAppSelector, useAppDispatch } from "store/hooks/redux";
import { alcoActions } from "store/reducer/alcoReducer";
import { DayInfo } from "types/alcoTypes";
import { AppLanguages } from "types/appTypes";
import updateLocale from "dayjs/plugin/updateLocale";
import "dayjs/locale/uk";
import "dayjs/locale/pl";

dayjs.extend(updateLocale);

dayjs.updateLocale("en", {
  weekStart: 1,
});

dayjs.updateLocale("uk", {
  weekStart: 1,
});
dayjs.updateLocale("pl", {
  weekStart: 1,
});

function ViewInfoDay(
  props: PickersDayProps<Dayjs> & {
    highlightedDays: DayInfo[];
  },
) {
  const { highlightedDays, ...otherProps } = props;
  const { day, outsideCurrentMonth } = otherProps;

  const isSelected = !outsideCurrentMonth && highlightedDays[day.date()];

  return (
    <Badge
      key={day.toString()}
      overlap='circular'
      color='secondary'
      max={999}
      badgeContent={isSelected && isSelected.totalVodka > 0 ? isSelected.totalVodka.toString() : undefined}
    >
      <PickersDay {...otherProps} />
    </Badge>
  );
}

export function CalendarDayInfo() {
  const { currentDate, yearData } = useAppSelector((state) => state.alcoReducer);
  const { currentTheme, currentLang } = useAppSelector((state) => state.appReducer);
  const { day, month, year } = currentDate;

  const dispatch = useAppDispatch();
  const { changeDay, changeMonth, changeYear } = alcoActions;

  const { months } = yearData;
  const isMonthData = months[Number(month)];
  const highlightedDays = !!isMonthData ? isMonthData.days : [];

  const adapterLocale = {
    [AppLanguages.UA]: "uk",
    [AppLanguages.PL]: "pl",
    [AppLanguages.EN]: "en",
  }[currentLang];

  const CustomViewInfoDay = React.useCallback(
    (props: PickersDayProps<Dayjs>) => <ViewInfoDay {...props} highlightedDays={highlightedDays} />,
    [highlightedDays],
  );

  const handleDateChange = (date: Dayjs | null) => {
    if (!date) return;

    const newDay = date.date().toString();
    const newMonth = (date.month() + 1).toString();
    const newYear = date.year().toString();

    if (newYear !== year) dispatch(changeYear(newYear));
    if (newMonth !== month) dispatch(changeMonth(newMonth));
    if (newDay !== day) dispatch(changeDay(newDay));
  };

  return (
    <div className={`alco-counter__calendar-day-info alco-counter__calendar-day-info--${currentTheme}`}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={adapterLocale}>
        <DateCalendar
          value={dayjs(year + "-" + month + "-" + day)}
          onChange={handleDateChange}
          slots={{
            day: CustomViewInfoDay,
          }}
          showDaysOutsideCurrentMonth
          fixedWeekNumber={6}
          dayOfWeekFormatter={(weekday) => `${weekday.format("ddd")}.`}
          views={["year", "month", "day"]}
          onMonthChange={(date) => {
            dispatch(changeMonth((date.month() + 1).toString()));
          }}
        />
      </LocalizationProvider>
    </div>
  );
}
