import classes from "./TechnologyItem.module.css";
import Button from "../../../UI/Buttons/Button";
import js from "../../../../assets/js-square-brands.svg";
import { ReactSVG } from "react-svg";
import { Fragment } from "react";
const TechnologyItem = (props) => {
  //   console.log(props.icon);

  function svgMap() {
    const slicedArray = props.icon.slice(0, 3);
    return (
      <Fragment>
        {slicedArray.map((icons) => (
          <svg
            aria-hidden="true"
            key={icons.dataIcon}
            focusable="false"
            data-prefix="fab"
            data-icon={icons.dataIcon}
            //   class={icons.class}
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

  //   console.log(svgMap);

  return (
    <section className={classes.outer}>
      <div className={classes.inner}>
        <header className={classes.header}>
          <h1 className={classes.title}>{props.name}</h1>
          <div>{svgMap()}</div>
        </header>
        <main className={classes.body}>{props.description}</main>
        <div className={classes.center}>
          <Button className={classes.button} to="projects">
            Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TechnologyItem;
