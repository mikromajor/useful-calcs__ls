import React from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { APP_CONTENT } from "constants/appConstants";
import { useAppSelector } from "store/hooks/redux";
import { SelectLanguage, SelectTheme } from "../.";

interface TopMenuPops {
  setSwitchCalc: React.Dispatch<React.SetStateAction<boolean>>;
}

export function TopMenu({ setSwitchCalc }: TopMenuPops) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const { currentLang } = useAppSelector((state) => state.appReducer);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const switchToAlcoCalc = () => {
    setSwitchCalc(true);
    setAnchorEl(null);
  };
  const switchToSalary = () => {
    setSwitchCalc(false);
    setAnchorEl(null);
  };

  const content = APP_CONTENT[currentLang];

  return (
    <section className={`app__top-menu`}>
      <IconButton
        aria-label='more'
        id='long-button-top-menu'
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id='long-menu-top-menu'
        slotProps={{
          list: {
            "aria-labelledby": "long-button",
          },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <SelectTheme />

        <MenuItem onClick={switchToAlcoCalc}>{content.goToAlcoCalc}</MenuItem>
        <MenuItem onClick={switchToSalary}>{content.goToSalary}</MenuItem>

        <SelectLanguage />
      </Menu>
    </section>
  );
}
