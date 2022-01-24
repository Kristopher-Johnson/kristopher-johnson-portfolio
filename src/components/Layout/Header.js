import { Fragment } from "react";
import classes from "./Header.module.css";
import Button from "../UI/Buttons/Button";
import IconButton from "../UI/Buttons/IconButton";
import LoadingButton from "../UI/Buttons/LoadingButton";
import * as MUIIcon from "@mui/icons-material";
import { Link } from "react-router-dom";
import * as MUI from "@mui/material";
import { useState } from "react";
// import LoadingButton from "@mui/lab/LoadingButton";

const Header = (props) => {
  const [downloadSnackbar, setDownloadSnackbar] = useState(false);
  const [downloadingIcon, setDownloadingIcon] = useState(false);

  const handleCvClickSnackbar = () => {
    setDownloadSnackbar(true);
  };
  function handleCvClickLoading() {
    setDownloadingIcon(true);
  }

  const handleCvClicSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setDownloadSnackbar(false);
  };

  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `Kristopher_Johnson_CV.pdf`;
    link.href = "./text.txt";
    // link.href = "Kristopher_Johnson_CV_v4.pdf";
    // const file = new Blob([text], { type: type });
    // link.href = URL.createObjectURL(file);
    link.click();
    handleCvClickSnackbar(true);
    // handleCvClickLoading(true);
  };

  const action = (
    <Fragment>
      <IconButton
        // size="large"
        ariaLabel="close"
        color="inherit"
        onClick={handleCvClicSnackbarClose}
        toolTip="Close"
      >
        <MUIIcon.Close fontSize="small" />
      </IconButton>
    </Fragment>
  );

  const cvEndIcon = () => {
    if (!downloadingIcon) {
    } else {
    }
  };

  // if (downloadSnackbar) {
  //   return (

  //   );
  // }

  return (
    <Fragment>
      <MUI.Snackbar
        open={downloadSnackbar}
        autoHideDuration={4000}
        onClose={handleCvClicSnackbarClose}
        message="Download Started!"
        action={action}
      />
      <header className={classes.header}>
        <Link to="/">
          <title className={classes.title}>
            <h1>Kristopher Johnson</h1>
            <h1>Portfolio</h1>
          </title>
        </Link>

        <nav className={classes.nav}>
          <Link to="/">
            <Button variant="outlined" color="outlinedButton">
              Home
            </Button>
          </Link>
          <Link to="projects">
            <Button variant="outlined" color="outlinedButton">
              Projects
            </Button>
          </Link>
          <Link to="contact">
            <Button variant="outlined" color="outlinedButton">
              Contact
            </Button>
          </Link>

          <LoadingButton
            to="#"
            onClick={onDownload}
            endIcon={<MUIIcon.Download />}
            loading={downloadingIcon}
            loadingPosition="end"
            variant="outlined"
          >
            CV
          </LoadingButton>
        </nav>

        <nav className={classes.icons}>
          <IconButton
            to="https://www.linkedin.com/in/kristopher-johnson-b6b189174/"
            ariaLabel="linkedin"
            toolTip="LinkedIn"
          >
            <MUIIcon.LinkedIn />
          </IconButton>
          <IconButton
            to="https://github.com/Kristopher-Johnson"
            ariaLabel="github"
            toolTip="Github"
          >
            <MUIIcon.GitHub />
          </IconButton>
          <IconButton
            to="https://www.facebook.com/kristopher.johnson.165"
            ariaLabel="facebook"
            toolTip="Facebook"
          >
            <MUIIcon.FacebookRounded />
          </IconButton>
        </nav>
      </header>
    </Fragment>
  );
};
export default Header;
