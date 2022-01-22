import * as MUI from "@mui/material";
import { Link } from "react-router-dom";
import theme from "../Themes/Theme";
import classes from "./Button.module.css";

const Button = (props) => {
  const button = (
    <MUI.ThemeProvider theme={theme}>
      <MUI.Button
        onClick={props.onClick}
        color="outlinedButton"
        variant="outlined"
        size="large"
        startIcon={props.startIcon}
        endIcon={props.endIcon}
        className={classes.nav}
        // className=
      >
        {props.children}
      </MUI.Button>
    </MUI.ThemeProvider>
  );
  return <Link to={props.to}>{button}</Link>;
};
export default Button;
