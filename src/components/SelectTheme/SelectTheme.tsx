import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { AppThemes } from "types/appTypes";
import { APP_CONTENT } from "constants/appConstants";
import { useAppSelector, useAppDispatch } from "store/hooks/redux";
import { appActions } from "store/reducer/appReducer";

export function SelectTheme() {
  const { currentLang, currentTheme } = useAppSelector((state) => state.appReducer);

  const dispatch = useAppDispatch();

  const { changeTheme } = appActions;

  const themes = Object.values(AppThemes);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (theme: AppThemes) => {
    setAnchorEl(null);
    dispatch(changeTheme(theme));
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const content = APP_CONTENT[currentLang];

  return (
    <div>
      <List
        component='nav'
        aria-label='Device settings'
        // sx={{ bgcolor: "background.paper" }}
      >
        <ListItemButton
          id='lock-button-theme'
          aria-haspopup='listbox'
          aria-controls='lock-menu'
          aria-label='when device is locked'
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText primary={content.lblTheme} secondary={content[currentTheme]} />
        </ListItemButton>
      </List>
      <Menu
        id='lock-menu-theme'
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
        {themes.map((theme) => (
          <MenuItem key={theme} selected={theme === currentTheme} onClick={() => handleMenuItemClick(theme)}>
            {content[theme]}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
