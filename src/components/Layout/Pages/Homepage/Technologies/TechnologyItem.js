import classes from "./TechnologyItem.module.css";
import Button from "../../../../UI/Buttons/Button";
import { Fragment } from "react";
import { Link } from "react-router-dom";
const TechnologyItem = (props) => {
  function svgMap() {
    const slicedArray = props.icon.slice(0, 3);
    return (
      <Fragment>
        {slicedArray.map((icons) => (
          <svg
            aria-hidden="true"
            key={icons.d}
            focusable="false"
            data-prefix="fab"
            data-icon={icons.dataIcon}
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox={icons.viewBox}
            width="40px"
            height="40px"
          >
            <path fill={icons.fill} d={icons.d}></path>
          </svg>
        ))}
      </Fragment>
    );
  }

  return (
    <section className={classes.outer}>
      <div className={classes.inner}>
        <header className={classes.header}>
          <div>
            <h1 className={classes.title}>{props.name}</h1>
            <h1 className={classes.title}>
              {props.skill ? props.skill : "..."}/10
            </h1>
          </div>
          <div>{svgMap()}</div>
        </header>
        <main className={classes.body}>{props.description}</main>
        <div className={classes.center}>
          <Link to="projects">
            <Button className={classes.button} to="projects">
              Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TechnologyItem;
