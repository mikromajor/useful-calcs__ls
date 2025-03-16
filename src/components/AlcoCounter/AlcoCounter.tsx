import { ControlPanel, Display, AlcoHeader, CalendarDayInfo } from "./alcoComponents";

export const AlcoCounter = () => {
  return (
    <>
      <div className='alco-counter '>
        <AlcoHeader />
        <Display />
        <CalendarDayInfo />
        <ControlPanel />
      </div>
    </>
  );
};
