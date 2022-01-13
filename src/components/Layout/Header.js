import { Fragment } from "react";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.title}>
          <h1>Kristopher Johnson</h1>
          <h1>Portfolio</h1>
        </div>
        <ul className={classes.nav}>
          <li>Home</li>
          <li>Projects</li>
          <li>About</li>
          <li>CV</li>
        </ul>
      </header>
    </Fragment>
  );
};
export default Header;
