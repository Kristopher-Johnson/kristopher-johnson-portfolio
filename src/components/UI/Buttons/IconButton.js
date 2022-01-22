import * as MUI from "@mui/material";
import { Link } from "react-router-dom";
import theme from "../Themes/Theme";
import classes from "./IconButton.module.css";

const IconButton = (props) => {
  const button = (
    <MUI.ThemeProvider theme={theme}>
      <MUI.Tooltip title={props.toolTip}>
        <MUI.IconButton
          onClick={props.onClick}
          color="outlinedButton"
          size="large"
          className={classes.nav}
          aria-label={props.ariaLabel}
        >
          {props.children}
        </MUI.IconButton>
      </MUI.Tooltip>
    </MUI.ThemeProvider>
  );
  return (
    <a href={props.to} target="_blank" rel="noreferrer">
      {button}
    </a>
  );
};
export default IconButton;
