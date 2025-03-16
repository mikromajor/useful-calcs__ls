import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import { AppLanguages } from "types/appTypes";
import { APP_CONTENT } from "constants/appConstants";
import { useAppSelector, useAppDispatch } from "store/hooks/redux";
import { appActions } from "store/reducer/appReducer";

export function SelectLanguage() {
  const currentLang = useAppSelector((state) => state.appReducer.currentLang);
  const dispatch = useAppDispatch();

  const { changeLanguage } = appActions;
  const languages = Object.values(AppLanguages);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (language: AppLanguages) => {
    setAnchorEl(null);
    dispatch(changeLanguage(language));
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <List component='nav' aria-label='Device settings'>
        <ListItemButton
          id='lock-button-language'
          aria-haspopup='listbox'
          aria-controls='lock-menu'
          aria-label='when device is locked'
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText primary={APP_CONTENT[currentLang].lblLang} secondary={currentLang} />
        </ListItemButton>
      </List>
      <Menu
        id='lock-menu-language'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "lock-button",
            role: "listbox",
          },
        }}
      >
        {languages.map((language) => (
          <MenuItem key={language} selected={language === currentLang} onClick={() => handleMenuItemClick(language)}>
            {language}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
