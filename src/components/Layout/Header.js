import { Fragment } from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.title}>
          <h1>Kristopher Johnson</h1>
          <h1>Portfolio</h1>
        </div>
        <nav>
          <ul className={classes.nav}>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="projects">
              <li>Projects</li>
            </Link>
            <Link to="about">
              <li>About</li>
            </Link>
            <li>
              <a href="/text.txt" download>
                CV
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};
export default Header;
