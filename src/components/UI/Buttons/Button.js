import * as MUI from "@mui/material";
import { Link } from "react-router-dom";
import theme from "../Themes/Theme";
import classes from "./Button.module.css";

const Button = (props) => {
  const button = (
    <MUI.ThemeProvider theme={theme}>
      <MUI.Button
        onClick={props.onClick}
        color={props.color ? props.color : "mainButton"}
        variant={props.variant ? props.variant : "contained"}
        size={props.size ? props.size : "large"}
        type={props.type}
        startIcon={props.startIcon}
        endIcon={props.endIcon}
        className={classes.nav}

        // className=
      >
        {props.children}
      </MUI.Button>
    </MUI.ThemeProvider>
  );
  return button;
};
export default Button;
