import * as MUI from "@mui/material";
import MUILoadingButton from "@mui/lab/LoadingButton";
import { Link } from "react-router-dom";
import theme from "../Themes/Theme";
import classes from "./Button.module.css";

const LoadingButton = (props) => {
  const button = (
    <MUI.ThemeProvider theme={theme}>
      <MUILoadingButton
        onClick={props.onClick}
        color="outlinedButton"
        variant="outlined"
        size="large"
        startIcon={props.startIcon}
        endIcon={props.endIcon}
        loading={props.loading}
        loadingPosition="end"
        className={classes.nav}
      >
        {props.children}
      </MUILoadingButton>
    </MUI.ThemeProvider>
  );
  return <Link to={props.to}>{button}</Link>;
};
export default LoadingButton;
