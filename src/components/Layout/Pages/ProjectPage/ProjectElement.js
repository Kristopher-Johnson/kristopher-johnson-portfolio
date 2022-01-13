import classes from "./ProjectElement.module.css";
import Card from "../../../UI/Card";

const ProjectElement = (props) => {
  return (
    <Card>
      <li className={classes.project}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
        </div>
      </li>
    </Card>
  );
};

export default ProjectElement;
