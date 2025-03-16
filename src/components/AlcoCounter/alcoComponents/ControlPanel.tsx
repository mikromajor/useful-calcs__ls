import { ALCO_CONTENT } from "constants/alcoConstants";
import { useAppSelector } from "store/hooks/redux";
import { InputLiquidPanel } from "./InputLiquidPanel";

export const ControlPanel = () => {
  const { currentLang, currentTheme } = useAppSelector((state) => state.appReducer);
  return (
    <div className={`control-panel control-panel--${currentTheme}`} data-testid='control-panel'>
      <h2 className={`control-panel__header control-panel__header--${currentTheme}`}>
        {ALCO_CONTENT[currentLang].controlPanelHeader}
      </h2>

      <div className='control-panel__inputs-container'>
        <InputLiquidPanel />
      </div>
    </div>
  );
};
